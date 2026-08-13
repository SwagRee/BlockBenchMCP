#!/usr/bin/env python3
"""Destructive live Blockbench smoke test; run only against a disposable project."""
from __future__ import annotations
import argparse, json, os, sys

sys.path.insert(0, os.path.dirname(__file__))
import blockbench_mcp as mcp


def call(name, arguments):
    payload = mcp.rpc("tools/call", {"name": name, "arguments": arguments})
    if "error" in payload:
        raise RuntimeError(f"{name}: {payload['error']}")
    result = payload.get("result", {})
    if result.get("isError"):
        raise RuntimeError(f"{name}: {result}")
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--confirm-disposable",
        action="store_true",
        help="required: this creates/replaces the active Blockbench project",
    )
    args = parser.parse_args()
    if not args.confirm_disposable:
        parser.error("pass --confirm-disposable; the live smoke mutates Blockbench")

    health = mcp.request_json(mcp.endpoint()[0] + "/health")
    call("create_project", {
        "format": "java_block",
        "name": "mcp_e2e_disposable",
        "texture_width": 64,
        "texture_height": 64,
    })
    call("apply_geometry_batch", {
        "create_groups": [{"name": "root", "origin": [0, 8, 0]}],
        "create_cubes": [{
            "name": "body", "parent": "root",
            "from": [-4, 0, -2], "to": [4, 8, 2], "origin": [0, 4, 0],
            "rotation": [0, 20, 0],
        }],
    })
    call("ensure_texture", {"name": "e2e_base", "width": 64, "height": 64})
    call("pack_box_uv", {"cubes": ["body"], "mode": "face", "auto_resize": False})
    call("paint_face_grid", {
        "texture": "e2e_base",
        "faces": [{"cube": "body", "face": "north", "rows": ["aaaaaaaa"] * 8}],
        "palette": {"a": "#4f86c6"},
    })
    check = call("check_model", {})
    layout = call("get_uv_layout", {"cubes": ["body"]})
    views = call("analyze_view_silhouette", {"views": ["iso", "north"], "max_edge": 128})
    summary = call("get_project_summary", {})
    report = {
        "ok": True,
        "blockbench_version": health.get("blockbench_version"),
        "project": summary,
        "check": check,
        "uv": layout,
        "silhouette": views,
    }
    json.dump(report, sys.stdout, ensure_ascii=False, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
