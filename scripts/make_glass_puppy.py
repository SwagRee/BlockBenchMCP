import json
import urllib.request

URL = "http://127.0.0.1:39741/mcp"
HEADERS = {
    "Content-Type": "application/json",
    "Authorization": "Bearer dev-local-secret",
}


def call(name: str, args: dict | None = None) -> dict:
    body = json.dumps(
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "tools/call",
            "params": {"name": name, "arguments": args or {}},
        }
    ).encode()
    req = urllib.request.Request(URL, data=body, headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=120) as r:
        raw = json.loads(r.read().decode())
    if "error" in raw:
        raise RuntimeError(raw["error"])
    payload = json.loads(raw["result"]["content"][0]["text"])
    print(f"{name}: {payload.get('summary')} ok={payload.get('ok')}")
    if not payload.get("ok"):
        raise RuntimeError(json.dumps(payload, ensure_ascii=False)[:1200])
    return payload


def main() -> None:
    call(
        "create_project",
        {
            "format": "java_block",
            "name": "glass_puppy",
            "texture_width": 64,
            "texture_height": 64,
        },
    )

    # Cubes only (group create hits a BB undo bug on current plugin build).
    cubes = [
        {"name": "torso", "from": [-3, 3, -3], "to": [3, 7, 3], "origin": [0, 4, 0]},
        {"name": "chest", "from": [-2, 4, -4], "to": [2, 7, -3], "origin": [0, 4, 0]},
        {"name": "skull", "from": [-2, 6, -8], "to": [2, 10, -4], "origin": [0, 7, -5]},
        {"name": "snout", "from": [-1, 6, -10], "to": [1, 8, -8], "origin": [0, 7, -5]},
        {"name": "ear_l", "from": [-3, 9, -6], "to": [-2, 12, -5], "origin": [0, 7, -5]},
        {"name": "ear_r", "from": [2, 9, -6], "to": [3, 12, -5], "origin": [0, 7, -5]},
        {"name": "leg_fl", "from": [-3, 0, 1], "to": [-1, 3, 3], "origin": [-2, 3, 2]},
        {"name": "leg_fr", "from": [1, 0, 1], "to": [3, 3, 3], "origin": [2, 3, 2]},
        {"name": "leg_bl", "from": [-3, 0, -3], "to": [-1, 3, -1], "origin": [-2, 3, -2]},
        {"name": "leg_br", "from": [1, 0, -3], "to": [3, 3, -1], "origin": [2, 3, -2]},
        {
            "name": "tail",
            "from": [0, 5, 3],
            "to": [1, 6, 7],
            "origin": [0, 5, 4],
            "rotation": [-20, 0, 0],
        },
        {"name": "collar", "from": [-3, 5, -3], "to": [3, 6, -2], "origin": [0, 4, 0]},
    ]
    call(
        "apply_geometry_batch",
        {"undo_label": "glass_puppy_cubes", "create_cubes": cubes},
    )
    call("check_model", {})
    call(
        "ensure_texture",
        {"name": "glass_puppy", "width": 64, "height": 64, "fill": "#A8E6F0"},
    )
    call("auto_uv_cubes", {})
    call(
        "paint_face_feature",
        {
            "cube": "skull",
            "face": "north",
            "feature": "ellipse",
            "x": 1,
            "y": 2,
            "width": 1.5,
            "height": 1.5,
            "color": "#163A4A",
        },
    )
    call(
        "paint_face_feature",
        {
            "cube": "skull",
            "face": "north",
            "feature": "ellipse",
            "x": 5,
            "y": 2,
            "width": 1.5,
            "height": 1.5,
            "color": "#163A4A",
        },
    )
    call(
        "paint_face_feature",
        {
            "cube": "snout",
            "face": "north",
            "feature": "rect",
            "x": 1,
            "y": 2,
            "width": 2,
            "height": 1,
            "color": "#4AA8BC",
        },
    )
    call(
        "paint_face_feature",
        {
            "cube": "collar",
            "face": "north",
            "feature": "fill",
            "x": 0,
            "y": 0,
            "width": 1,
            "height": 1,
            "color": "#F2FBFD",
        },
    )
    chk = call("check_model", {})
    print("findings:", json.dumps(chk.get("result", {}).get("findings", []), ensure_ascii=False)[:800])
    call(
        "capture_views",
        {"views": ["iso", "north", "east"], "max_edge": 256, "format": "jpeg"},
    )
    summary = call("get_project_summary", {})
    print("summary:", json.dumps(summary.get("result", {}), ensure_ascii=False)[:800])


if __name__ == "__main__":
    main()
