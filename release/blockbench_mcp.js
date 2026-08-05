"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../../node_modules/zod/v3/external.js
  var external_exports = {};
  __export(external_exports, {
    BRAND: () => BRAND,
    DIRTY: () => DIRTY,
    EMPTY_PATH: () => EMPTY_PATH,
    INVALID: () => INVALID,
    NEVER: () => NEVER,
    OK: () => OK,
    ParseStatus: () => ParseStatus,
    Schema: () => ZodType,
    ZodAny: () => ZodAny,
    ZodArray: () => ZodArray,
    ZodBigInt: () => ZodBigInt,
    ZodBoolean: () => ZodBoolean,
    ZodBranded: () => ZodBranded,
    ZodCatch: () => ZodCatch,
    ZodDate: () => ZodDate,
    ZodDefault: () => ZodDefault,
    ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
    ZodEffects: () => ZodEffects,
    ZodEnum: () => ZodEnum,
    ZodError: () => ZodError,
    ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
    ZodFunction: () => ZodFunction,
    ZodIntersection: () => ZodIntersection,
    ZodIssueCode: () => ZodIssueCode,
    ZodLazy: () => ZodLazy,
    ZodLiteral: () => ZodLiteral,
    ZodMap: () => ZodMap,
    ZodNaN: () => ZodNaN,
    ZodNativeEnum: () => ZodNativeEnum,
    ZodNever: () => ZodNever,
    ZodNull: () => ZodNull,
    ZodNullable: () => ZodNullable,
    ZodNumber: () => ZodNumber,
    ZodObject: () => ZodObject,
    ZodOptional: () => ZodOptional,
    ZodParsedType: () => ZodParsedType,
    ZodPipeline: () => ZodPipeline,
    ZodPromise: () => ZodPromise,
    ZodReadonly: () => ZodReadonly,
    ZodRecord: () => ZodRecord,
    ZodSchema: () => ZodType,
    ZodSet: () => ZodSet,
    ZodString: () => ZodString,
    ZodSymbol: () => ZodSymbol,
    ZodTransformer: () => ZodEffects,
    ZodTuple: () => ZodTuple,
    ZodType: () => ZodType,
    ZodUndefined: () => ZodUndefined,
    ZodUnion: () => ZodUnion,
    ZodUnknown: () => ZodUnknown,
    ZodVoid: () => ZodVoid,
    addIssueToContext: () => addIssueToContext,
    any: () => anyType,
    array: () => arrayType,
    bigint: () => bigIntType,
    boolean: () => booleanType,
    coerce: () => coerce,
    custom: () => custom,
    date: () => dateType,
    datetimeRegex: () => datetimeRegex,
    defaultErrorMap: () => en_default,
    discriminatedUnion: () => discriminatedUnionType,
    effect: () => effectsType,
    enum: () => enumType,
    function: () => functionType,
    getErrorMap: () => getErrorMap,
    getParsedType: () => getParsedType,
    instanceof: () => instanceOfType,
    intersection: () => intersectionType,
    isAborted: () => isAborted,
    isAsync: () => isAsync,
    isDirty: () => isDirty,
    isValid: () => isValid,
    late: () => late,
    lazy: () => lazyType,
    literal: () => literalType,
    makeIssue: () => makeIssue,
    map: () => mapType,
    nan: () => nanType,
    nativeEnum: () => nativeEnumType,
    never: () => neverType,
    null: () => nullType,
    nullable: () => nullableType,
    number: () => numberType,
    object: () => objectType,
    objectUtil: () => objectUtil,
    oboolean: () => oboolean,
    onumber: () => onumber,
    optional: () => optionalType,
    ostring: () => ostring,
    pipeline: () => pipelineType,
    preprocess: () => preprocessType,
    promise: () => promiseType,
    quotelessJson: () => quotelessJson,
    record: () => recordType,
    set: () => setType,
    setErrorMap: () => setErrorMap,
    strictObject: () => strictObjectType,
    string: () => stringType,
    symbol: () => symbolType,
    transformer: () => effectsType,
    tuple: () => tupleType,
    undefined: () => undefinedType,
    union: () => unionType,
    unknown: () => unknownType,
    util: () => util,
    void: () => voidType
  });

  // ../../node_modules/zod/v3/helpers/util.js
  var util;
  (function(util2) {
    util2.assertEqual = (_) => {
    };
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
      const filtered = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e) {
        return obj[e];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  var getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };

  // ../../node_modules/zod/v3/ZodError.js
  var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  var quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = class _ZodError extends Error {
    get errors() {
      return this.issues;
    }
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < issue.path.length) {
              const el = issue.path[i];
              const terminal = i === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof _ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          const firstEl = sub.path[0];
          fieldErrors[firstEl] = fieldErrors[firstEl] || [];
          fieldErrors[firstEl].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };

  // ../../node_modules/zod/v3/locales/en.js
  var errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "bigint")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  var en_default = errorMap;

  // ../../node_modules/zod/v3/errors.js
  var overrideErrorMap = en_default;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }

  // ../../node_modules/zod/v3/helpers/parseUtil.js
  var makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m) => !!m).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: errorMessage
    };
  };
  var EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === en_default ? void 0 : en_default
        // then global default map
      ].filter((x) => !!x)
    });
    ctx.common.issues.push(issue);
  }
  var ParseStatus = class _ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s of results) {
        if (s.status === "aborted")
          return INVALID;
        if (s.status === "dirty")
          status.dirty();
        arrayValue.push(s.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key;
        const value = await pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return _ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  };
  var INVALID = Object.freeze({
    status: "aborted"
  });
  var DIRTY = (value) => ({ status: "dirty", value });
  var OK = (value) => ({ status: "valid", value });
  var isAborted = (x) => x.status === "aborted";
  var isDirty = (x) => x.status === "dirty";
  var isValid = (x) => x.status === "valid";
  var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

  // ../../node_modules/zod/v3/helpers/errorUtil.js
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));

  // ../../node_modules/zod/v3/types.js
  var ParseInputLazyPath = class {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (Array.isArray(this._key)) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  };
  var handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      const { message } = params;
      if (iss.code === "invalid_enum_value") {
        return { message: message ?? ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: message ?? required_error ?? ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: message ?? invalid_type_error ?? ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  var ZodType = class {
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      const ctx = {
        common: {
          issues: [],
          async: params?.async ?? false,
          contextualErrorMap: params?.errorMap
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    "~validate"(data) {
      const ctx = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      if (!this["~standard"].async) {
        try {
          const result = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result) ? {
            value: result.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if (err?.message?.toLowerCase()?.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
        value: result.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params?.errorMap,
          async: true
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
      this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (data) => this["~validate"](data)
      };
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  };
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var cuid2Regex = /^[0-9a-z]+$/;
  var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  var nanoidRegex = /^[a-z0-9_-]{21}$/i;
  var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  var emojiRegex;
  var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  var dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
      secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
  }
  function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
  }
  function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      if (!header)
        return false;
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if ("typ" in decoded && decoded?.typ !== "JWT")
        return false;
      if (!decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  var ZodString = class _ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "nanoid") {
          if (!nanoidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "nanoid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "time",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "duration") {
          if (!durationRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "duration",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "jwt") {
          if (!isValidJWT(input.data, check.alg)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "jwt",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cidr") {
          if (!isValidCidr(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cidr",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64") {
          if (!base64Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64url") {
          if (!base64urlRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        offset: options?.offset ?? false,
        local: options?.local ?? false,
        ...errorUtil.errToObj(options?.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        ...errorUtil.errToObj(options?.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options?.position,
        ...errorUtil.errToObj(options?.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxLength() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodString.create = (params) => {
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
  }
  var ZodNumber = class _ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max = null;
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        } else if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return Number.isFinite(min) && Number.isFinite(max);
    }
  };
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  var ZodBigInt = class _ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch {
          return this._getInvalidInput(input);
        }
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodBigInt.create = (params) => {
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  var ZodBoolean = class extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  var ZodDate = class _ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (Number.isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new _ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min != null ? new Date(min) : null;
    }
    get maxDate() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max != null ? new Date(max) : null;
    }
  };
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: params?.coerce || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  var ZodSymbol = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  var ZodUndefined = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  var ZodNull = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  var ZodAny = class extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  var ZodUnknown = class extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  var ZodNever = class extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  };
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  var ZodVoid = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  var ZodArray = class _ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new _ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new _ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new _ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodArray.create = (schema, params) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  var ZodObject = class _ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      this._cached = { shape, keys };
      return this._cached;
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") {
        } else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: errorUtil.errToObj(message).message ?? defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new _ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new _ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
      return new _ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      for (const key of util.objectKeys(mask)) {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  };
  ZodObject.create = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  var ZodUnion = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  var getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return util.objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else if (type instanceof ZodOptional) {
      return [void 0, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodNullable) {
      return [null, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodBranded) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
      return getDiscriminator(type._def.innerType);
    } else {
      return [];
    }
  };
  var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues.length) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
          optionsMap.set(value, type);
        }
      }
      return new _ZodDiscriminatedUnion({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  };
  function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
      return { valid: true, data: a };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b);
      const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return { valid: true, data: a };
    } else {
      return { valid: false };
    }
  }
  var ZodIntersection = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  };
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  var ZodTuple = class _ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x) => !!x);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new _ZodTuple({
        ...this._def,
        rest
      });
    }
  };
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  var ZodRecord = class _ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new _ZodRecord({
          keyType: first,
          valueType: second,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(third)
        });
      }
      return new _ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(second)
      });
    }
  };
  var ZodMap = class extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  };
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  var ZodSet = class _ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new _ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new _ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  var ZodFunction = class _ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error
          }
        });
      }
      function makeReturnsIssue(returns, error) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        const me = this;
        return OK(async function(...args) {
          const error = new ZodError([]);
          const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
            error.addIssue(makeArgsIssue(args, e));
            throw error;
          });
          const result = await Reflect.apply(fn, this, parsedArgs);
          const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
            error.addIssue(makeReturnsIssue(result, e));
            throw error;
          });
          return parsedReturns;
        });
      } else {
        const me = this;
        return OK(function(...args) {
          const parsedArgs = me._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = Reflect.apply(fn, this, parsedArgs.data);
          const parsedReturns = me._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new _ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new _ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params) {
      return new _ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: ZodFirstPartyTypeKind.ZodFunction,
        ...processCreateParams(params)
      });
    }
  };
  var ZodLazy = class extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  };
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  var ZodLiteral = class extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  };
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params)
    });
  };
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params)
    });
  }
  var ZodEnum = class _ZodEnum extends ZodType {
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(this._def.values);
      }
      if (!this._cache.has(input.data)) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values, newDef = this._def) {
      return _ZodEnum.create(values, {
        ...this._def,
        ...newDef
      });
    }
    exclude(values, newDef = this._def) {
      return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
        ...this._def,
        ...newDef
      });
    }
  };
  ZodEnum.create = createZodEnum;
  var ZodNativeEnum = class extends ZodType {
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(util.getValidEnumValues(this._def.values));
      }
      if (!this._cache.has(input.data)) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  var ZodPromise = class extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  };
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  var ZodEffects = class extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return INVALID;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return INVALID;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
              status: status.value,
              value: result
            }));
          });
        }
      }
      util.assertNever(effect);
    }
  };
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  var ZodOptional = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  var ZodNullable = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  var ZodDefault = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  var ZodCatch = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  var ZodNaN = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  };
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  var BRAND = Symbol("zod_brand");
  var ZodBranded = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  };
  var ZodPipeline = class _ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a, b) {
      return new _ZodPipeline({
        in: a,
        out: b,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  };
  var ZodReadonly = class extends ZodType {
    _parse(input) {
      const result = this._def.innerType._parse(input);
      const freeze = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params)
    });
  };
  function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
    const p2 = typeof p === "string" ? { message: p } : p;
    return p2;
  }
  function custom(check, _params = {}, fatal) {
    if (check)
      return ZodAny.create().superRefine((data, ctx) => {
        const r = check(data);
        if (r instanceof Promise) {
          return r.then((r2) => {
            if (!r2) {
              const params = cleanParams(_params, data);
              const _fatal = params.fatal ?? fatal ?? true;
              ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
            }
          });
        }
        if (!r) {
          const params = cleanParams(_params, data);
          const _fatal = params.fatal ?? fatal ?? true;
          ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
        }
        return;
      });
    return ZodAny.create();
  }
  var late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  var instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var nanType = ZodNaN.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var symbolType = ZodSymbol.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var discriminatedUnionType = ZodDiscriminatedUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var pipelineType = ZodPipeline.create;
  var ostring = () => stringType().optional();
  var onumber = () => numberType().optional();
  var oboolean = () => booleanType().optional();
  var coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
      ...arg,
      coerce: true
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
  };
  var NEVER = INVALID;

  // ../shared/dist/protocol-base.js
  var PROTOCOL_VERSION = 1;
  var DEFAULTS = {
    wsPort: 39741,
    requestTimeoutMs: 3e4,
    handshakeTimeoutMs: 5e3,
    maxMessageBytes: 8 * 1024 * 1024,
    /** Default longest screenshot edge — keep context cheap. */
    screenshotMaxEdge: 256,
    screenshotMaxEdgeCap: 1024,
    screenshotQuality: 70,
    screenshotFormat: "jpeg"
  };
  var ERROR_CODES = [
    "E_PLUGIN_DISCONNECTED",
    "E_SECRET_MISSING",
    "E_AUTH_FAILED",
    "E_PROTOCOL_MISMATCH",
    "E_TIMEOUT",
    "E_INVALID_PARAM",
    "E_UNKNOWN_PARAM",
    "E_UNSUPPORTED_FORMAT",
    "E_UNSUPPORTED_COMMAND",
    "E_SCOPE_DENIED",
    "E_PARTIAL_FORBIDDEN",
    "E_NOT_FOUND",
    "E_BLOCKBENCH_ERROR"
  ];
  var errorPayloadSchema = external_exports.object({
    code: external_exports.enum(ERROR_CODES),
    message: external_exports.string(),
    details: external_exports.unknown().optional()
  }).strict();
  function makeError(code, message, details) {
    return details === void 0 ? { code, message } : { code, message, details };
  }
  var PROJECT_FORMATS = ["java_block", "geckolib_model"];
  var VIEW_PRESETS = [
    "north",
    "south",
    "east",
    "west",
    "up",
    "down",
    "iso"
  ];
  var vec3Schema = external_exports.tuple([external_exports.number(), external_exports.number(), external_exports.number()]);

  // ../shared/dist/contracts.js
  var projectSummarySchema = external_exports.object({
    format: external_exports.string(),
    name: external_exports.string().optional(),
    cubes: external_exports.number().int().nonnegative(),
    groups: external_exports.number().int().nonnegative(),
    textures: external_exports.number().int().nonnegative(),
    animations: external_exports.number().int().nonnegative(),
    outliner: external_exports.array(external_exports.object({
      uuid: external_exports.string(),
      name: external_exports.string(),
      type: external_exports.enum(["group", "cube"]),
      parent: external_exports.string().nullable()
    }).strict())
  }).strict();
  var checkFindingSchema = external_exports.object({
    severity: external_exports.enum(["error", "warn", "info"]),
    code: external_exports.string(),
    element: external_exports.string().optional(),
    message: external_exports.string()
  }).strict();
  var checkModelResultSchema = external_exports.object({
    findings: external_exports.array(checkFindingSchema),
    summary: external_exports.object({
      cubes: external_exports.number().int().nonnegative(),
      groups: external_exports.number().int().nonnegative(),
      errors: external_exports.number().int().nonnegative(),
      warns: external_exports.number().int().nonnegative()
    }).strict()
  }).strict();
  var captureViewsParamsSchema = external_exports.object({
    views: external_exports.array(external_exports.enum(VIEW_PRESETS)).min(1).optional(),
    max_edge: external_exports.number().int().positive().max(DEFAULTS.screenshotMaxEdgeCap).optional(),
    format: external_exports.enum(["jpeg", "png"]).optional(),
    quality: external_exports.number().int().min(1).max(100).optional()
  }).strict();
  var captureViewsDefaults = {
    views: ["iso", "north", "east"],
    max_edge: DEFAULTS.screenshotMaxEdge,
    format: DEFAULTS.screenshotFormat,
    quality: DEFAULTS.screenshotQuality
  };
  var captureViewMetaSchema = external_exports.object({
    view: external_exports.enum(VIEW_PRESETS),
    width: external_exports.number().int().positive(),
    height: external_exports.number().int().positive(),
    bytes: external_exports.number().int().nonnegative(),
    mime: external_exports.string()
  }).strict();
  var mutationSuccessSchema = external_exports.object({
    ok: external_exports.literal(true),
    undo_label: external_exports.string(),
    created: external_exports.array(external_exports.object({
      uuid: external_exports.string(),
      name: external_exports.string(),
      type: external_exports.string()
    }).strict()).optional(),
    updated: external_exports.array(external_exports.string()).optional(),
    deleted: external_exports.array(external_exports.string()).optional()
  }).strict();
  var mutationFailureSchema = external_exports.object({
    ok: external_exports.literal(false),
    code: errorPayloadSchema.shape.code,
    message: external_exports.string(),
    details: external_exports.unknown().optional()
  }).strict();
  var mutationResultSchema = external_exports.union([
    mutationSuccessSchema,
    mutationFailureSchema
  ]);
  var createProjectParamsSchema = external_exports.object({
    format: external_exports.enum(PROJECT_FORMATS),
    name: external_exports.string().min(1).optional(),
    texture_width: external_exports.number().int().positive().optional(),
    texture_height: external_exports.number().int().positive().optional()
  }).strict();
  var cubeSpecSchema = external_exports.object({
    name: external_exports.string().min(1),
    from: vec3Schema,
    to: vec3Schema,
    origin: vec3Schema.optional(),
    rotation: vec3Schema.optional(),
    inflate: external_exports.number().optional(),
    parent: external_exports.string().optional()
  }).strict();
  var groupSpecSchema = external_exports.object({
    name: external_exports.string().min(1),
    origin: vec3Schema.optional(),
    rotation: vec3Schema.optional(),
    parent: external_exports.string().optional()
  }).strict();
  var applyGeometryBatchParamsSchema = external_exports.object({
    create_groups: external_exports.array(groupSpecSchema).optional(),
    create_cubes: external_exports.array(cubeSpecSchema).optional(),
    delete_uuids: external_exports.array(external_exports.string().min(1)).optional(),
    undo_label: external_exports.string().min(1).optional()
  }).strict().refine((v) => (v.create_groups?.length ?? 0) + (v.create_cubes?.length ?? 0) + (v.delete_uuids?.length ?? 0) > 0, { message: "Batch must create or delete at least one element" });
  var createLimbParamsSchema = external_exports.object({
    name: external_exports.string().min(1),
    parent: external_exports.string().optional(),
    pivot: vec3Schema,
    size: vec3Schema,
    /** Lower corner of the cube in model space; default centers on pivot. */
    from: vec3Schema.optional(),
    mirror: external_exports.enum(["none", "x"]).optional(),
    undo_label: external_exports.string().optional()
  }).strict();
  var paintFaceFeatureParamsSchema = external_exports.object({
    cube: external_exports.string().min(1),
    face: external_exports.enum(["north", "south", "east", "west", "up", "down"]),
    feature: external_exports.enum(["rect", "ellipse", "fill"]),
    /** Face-local UV coords: origin top-left of that face's UV rect. */
    x: external_exports.number(),
    y: external_exports.number(),
    width: external_exports.number().positive(),
    height: external_exports.number().positive(),
    color: external_exports.string().min(1),
    texture: external_exports.string().optional()
  }).strict();
  var healthResultSchema = external_exports.object({
    protocol_version: external_exports.number().int(),
    adapter_version: external_exports.string(),
    ws_listening: external_exports.boolean(),
    plugin_connected: external_exports.boolean(),
    plugin: external_exports.object({
      blockbench_version: external_exports.string().optional(),
      plugin_version: external_exports.string().optional(),
      format: external_exports.string().nullable().optional()
    }).strict().optional()
  }).strict();

  // ../shared/dist/contracts-extra.js
  var ensureTextureParamsSchema = external_exports.object({
    name: external_exports.string().min(1).optional(),
    width: external_exports.number().int().positive().max(1024).optional(),
    height: external_exports.number().int().positive().max(1024).optional(),
    fill: external_exports.string().optional()
  }).strict();
  var autoUvCubesParamsSchema = external_exports.object({
    cubes: external_exports.array(external_exports.string().min(1)).optional(),
    mode: external_exports.enum(["box", "face"]).optional()
  }).strict();
  var mirrorElementsParamsSchema = external_exports.object({
    names: external_exports.array(external_exports.string().min(1)).min(1),
    axis: external_exports.enum(["x", "y", "z"]).optional(),
    pivot: external_exports.number().optional(),
    /** Rename: left↔right, _l↔_r, .L↔.R */
    rename: external_exports.boolean().optional()
  }).strict();
  var scaffoldBipedParamsSchema = external_exports.object({
    /** Overall scale; 1 = classic 32px-tall player proportions in BB units. */
    scale: external_exports.number().positive().max(4).optional(),
    texture_size: external_exports.number().int().positive().max(256).optional(),
    name_prefix: external_exports.string().optional(),
    include_outer_layers: external_exports.boolean().optional()
  }).strict();
  var upsertAnimationParamsSchema = external_exports.object({
    name: external_exports.string().min(1),
    length: external_exports.number().positive(),
    loop: external_exports.enum(["once", "hold", "loop"]).optional(),
    bones: external_exports.record(external_exports.object({
      rotation: external_exports.array(external_exports.object({
        time: external_exports.number().nonnegative(),
        value: vec3Schema
      }).strict()).optional(),
      position: external_exports.array(external_exports.object({
        time: external_exports.number().nonnegative(),
        value: vec3Schema
      }).strict()).optional()
    }).strict()).optional(),
    replace: external_exports.boolean().optional()
  }).strict();

  // ../shared/dist/capabilities.js
  var MIN_BLOCKBENCH_VERSION = "5.1.0";
  var CAPABILITY_IDS = [
    "geometry",
    "textures",
    "screenshots",
    "animations",
    "geckolib",
    "filesystem",
    "painter"
  ];
  var capabilitiesSchema = external_exports.array(external_exports.enum(CAPABILITY_IDS));

  // ../shared/dist/wire.js
  var helloMessageSchema = external_exports.object({
    type: external_exports.literal("hello"),
    protocol_version: external_exports.number().int(),
    secret: external_exports.string().min(1),
    plugin_version: external_exports.string().min(1),
    blockbench_version: external_exports.string().min(1),
    capabilities: capabilitiesSchema.optional()
  }).strict();
  var helloAckSchema = external_exports.object({
    type: external_exports.literal("hello_ack"),
    protocol_version: external_exports.literal(PROTOCOL_VERSION),
    ok: external_exports.literal(true),
    min_blockbench_version: external_exports.string().optional()
  }).strict();
  var requestMessageSchema = external_exports.object({
    type: external_exports.literal("request"),
    id: external_exports.string().min(1),
    command: external_exports.string().min(1),
    params: external_exports.unknown()
  }).strict();
  var responseMessageSchema = external_exports.object({
    type: external_exports.literal("response"),
    id: external_exports.string().min(1),
    ok: external_exports.boolean(),
    result: external_exports.unknown().optional(),
    error: errorPayloadSchema.optional()
  }).strict();
  var pluginToAdapterSchema = external_exports.union([
    helloMessageSchema,
    responseMessageSchema
  ]);

  // ../shared/dist/guides.js
  var GUIDE_MODELING = `
# Modeling (Minecraft / Blockbench 5.1+)

## Mandatory workflow (do not skip)
1. get_guide(modeling) then create_project(format).
2. Entities: scaffold_biped FIRST (correct pivots). Blocks: apply_geometry_batch.
3. check_model immediately. Fix every error before texturing.
4. ensure_texture \u2192 auto_uv_cubes \u2192 paint_face_feature for details.
5. capture_views only after check_model is clean (max_edge 256).

## Proportions
- Even integer sizes (2/4/6/8). Silhouette first; 8\u201320 cubes beats 80.
- Biped scale=1: head 8\xB3, body 8\xD712\xD74, limbs 4\xD712\xD74; feet on y=0.

## Pivots
- Joints, not centers. Legs=hip top, arms=shoulder, head=neck.
- create_limb hangs cube from pivot \u2014 keep that default.

## Hierarchy
- root \u2192 body \u2192 head/arm_*/leg_*. Animate bones only.
- Empty groups / zero-volume cubes are errors.
`.trim();
  var GUIDE_TEXTURING = `
# Texturing

1. ensure_texture(64 for entities, 16 for blocks) then auto_uv_cubes(mode=box).
2. Base fill \u2192 darker sides via paint_face_feature \u2192 eyes/trim last.
3. Face-local (0,0)=top-left of that face UV. Palette 4\u20138 colors.
4. Re-run check_model for UNTEXTURED_FACE.
`.trim();
  var GUIDE_ANIMATION = `
# Animation

1. Rig first (scaffold_biped / create_limb). Never keyframe loose cubes.
2. Idle: tiny body bob + head sway. Walk: opposite-phase limbs, few keys.
3. upsert_animation(replace:true) when revising. Then check_model + capture_views.
`.trim();
  var GUIDE_JAVA_BLOCK = `
# java_block

- Prefer geometry inside 0..16. One 16\xD716 texture.
- apply_geometry_batch for multi-cube shapes in one undo.
- check_model before export.
`.trim();
  var GUIDE_GECKOLIB = `
# geckolib_model

- Requires GeckoLib plugin (capability geckolib).
- Start scaffold_biped; stable snake_case bone names.
- propose_scoped_directory before export_model.
`.trim();

  // ../shared/dist/guide-resolve.js
  var TOPICS = {
    modeling: GUIDE_MODELING,
    texturing: GUIDE_TEXTURING,
    animation: GUIDE_ANIMATION,
    java_block: GUIDE_JAVA_BLOCK,
    geckolib: GUIDE_GECKOLIB
  };
  function resolveGuide(topic) {
    const key = topic ?? "modeling";
    return { topic: key, text: TOPICS[key] };
  }

  // ../shared/dist/commands.js
  var COMMAND_SPECS = {
    get_project_summary: {
      description: "Compact outliner + counts. Prefer over screenshots for situational awareness.",
      mutates: false,
      params: external_exports.object({}).strict(),
      result: projectSummarySchema
    },
    check_model: {
      description: "Audit overlaps, empty groups, zero-size cubes, bad pivots, untextured faces. Call after geometry batches.",
      mutates: false,
      params: external_exports.object({}).strict(),
      result: checkModelResultSchema
    },
    capture_views: {
      description: "Low-res multi-angle screenshots. Default max_edge 256 jpeg. Use sparingly after check_model.",
      mutates: false,
      params: captureViewsParamsSchema
    },
    get_guide: {
      description: "Playbook before building. Topics: modeling|texturing|animation|java_block|geckolib. ALWAYS call modeling first for entities.",
      mutates: false,
      params: external_exports.object({
        topic: external_exports.enum(["modeling", "texturing", "animation", "java_block", "geckolib"]).optional()
      }).strict()
    },
    create_project: {
      description: "Create java_block or geckolib_model project (closes nothing silently \u2014 requires format).",
      mutates: true,
      params: createProjectParamsSchema
    },
    apply_geometry_batch: {
      description: "Create/delete groups+cubes in ONE undo. All-or-nothing. Prefer for multi-part shapes.",
      mutates: true,
      params: applyGeometryBatchParamsSchema
    },
    create_limb: {
      description: "Bone+cube with pivot at joint. Optional X mirror (arm_left/arm_right). Prefer for characters.",
      mutates: true,
      params: createLimbParamsSchema
    },
    scaffold_biped: {
      description: "BEST START for humanoids: Steve-like biped bones+cubes+64\xB2 texture with correct pivots. Prefer over hand-placing limbs.",
      mutates: true,
      params: scaffoldBipedParamsSchema
    },
    ensure_texture: {
      description: "Create or reuse a project texture (default 64\xD764 solid fill).",
      mutates: true,
      params: ensureTextureParamsSchema
    },
    auto_uv_cubes: {
      description: "Box-UV (or face) map named cubes / all cubes.",
      mutates: true,
      params: autoUvCubesParamsSchema
    },
    mirror_elements: {
      description: "Mirror named groups/cubes across an axis with smart rename.",
      mutates: true,
      params: mirrorElementsParamsSchema
    },
    paint_face_feature: {
      description: "Paint rect/ellipse/fill in face-local UV space (eyes, trim). Not raw brushes.",
      mutates: true,
      params: paintFaceFeatureParamsSchema
    },
    upsert_animation: {
      description: "Create/replace a simple bone animation clip (rotation/position keys).",
      mutates: true,
      params: upsertAnimationParamsSchema
    },
    propose_scoped_directory: {
      description: "Ask user to allow session file access under an absolute directory.",
      mutates: false,
      params: external_exports.object({ path: external_exports.string().min(1) }).strict()
    },
    export_model: {
      description: "Save/export project into scoped directory. overwrite must be explicit.",
      mutates: false,
      params: external_exports.object({
        path: external_exports.string().min(1),
        overwrite: external_exports.boolean().optional()
      }).strict()
    }
  };
  var COMMAND_NAMES = Object.keys(COMMAND_SPECS);

  // ../shared/dist/index.js
  var PLUGIN_VERSION = "0.1.0";

  // src/config.ts
  function readPluginConfig() {
    const portRaw = settings?.mcp_port?.value;
    const secretRaw = settings?.mcp_secret?.value;
    const autoRaw = settings?.mcp_autostart?.value;
    const port = typeof portRaw === "number" ? portRaw : typeof portRaw === "string" ? Number(portRaw) : DEFAULTS.wsPort;
    return {
      port: Number.isFinite(port) ? port : DEFAULTS.wsPort,
      secret: typeof secretRaw === "string" && secretRaw.length > 0 ? secretRaw : "dev-local-secret",
      autostart: autoRaw !== false
    };
  }
  function registerPluginSettings() {
    Settings.add?.("mcp_port", {
      value: DEFAULTS.wsPort,
      category: "general",
      name: "MCP Server Port",
      description: "Loopback HTTP port for in-plugin MCP (127.0.0.1).",
      type: "number"
    });
    Settings.add?.("mcp_secret", {
      value: "dev-local-secret",
      category: "general",
      name: "MCP Shared Secret",
      description: "Bearer token Cursor must send as Authorization: Bearer \u2026",
      type: "text"
    });
    Settings.add?.("mcp_autostart", {
      value: true,
      category: "general",
      name: "Start MCP Server automatically",
      description: "Listen for Cursor/AI as soon as the plugin loads.",
      type: "toggle"
    });
  }

  // src/session.ts
  function createSession() {
    return { scopedDirectory: null };
  }
  function revokeScope(session2) {
    session2.scopedDirectory = null;
  }

  // src/bb/globals.ts
  function bbPlugin() {
    return globalThis.Plugin;
  }
  function bbAnimation() {
    return globalThis.Animation;
  }
  function bbBlockbench() {
    return globalThis.Blockbench;
  }

  // src/mcp/net.ts
  function loadNet() {
    const req = globalThis.require ?? // eslint-disable-next-line no-undef
    (typeof __require !== "undefined" ? __require : void 0);
    if (typeof req !== "function") {
      throw new Error(
        "Blockbench desktop `require` is unavailable. Use the desktop app, not the web app."
      );
    }
    const net = req("net");
    if (!net?.createServer) {
      throw new Error(
        "Network access (net module) was denied. Allow it for this plugin, then Start MCP Server."
      );
    }
    return net;
  }

  // src/mcp/http-server.ts
  var MAX_BODY = 8 * 1024 * 1024;
  function concatChunks(chunks) {
    const BufferCtor = globalThis.Buffer;
    if (BufferCtor?.concat) return BufferCtor.concat(chunks);
    let len = 0;
    for (const c of chunks) len += c.length;
    const out = new Uint8Array(len);
    let off = 0;
    for (const c of chunks) {
      out.set(c, off);
      off += c.length;
    }
    return out;
  }
  function indexOfSep(buf) {
    for (let i = 0; i < buf.length - 3; i++) {
      if (buf[i] === 13 && buf[i + 1] === 10 && buf[i + 2] === 13 && buf[i + 3] === 10) {
        return i;
      }
    }
    return -1;
  }
  function writeHttp(socket, status, body, extraHeaders) {
    const statusText = status === 200 ? "OK" : status === 202 ? "Accepted" : status === 204 ? "No Content" : status === 401 ? "Unauthorized" : status === 404 ? "Not Found" : status === 405 ? "Method Not Allowed" : status === 400 ? "Bad Request" : "Error";
    const payload = body ?? "";
    const headers = [
      `HTTP/1.1 ${status} ${statusText}`,
      "Connection: close",
      "Access-Control-Allow-Origin: *",
      "Access-Control-Allow-Headers: Content-Type, Authorization, Mcp-Session-Id, mcp-session-id",
      "Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE"
    ];
    if (extraHeaders) {
      for (const [k, v] of Object.entries(extraHeaders)) headers.push(`${k}: ${v}`);
    }
    if (body !== void 0) {
      headers.push("Content-Type: application/json; charset=utf-8");
      const byteLen = globalThis.Buffer?.byteLength?.(payload, "utf8") ?? new TextEncoder().encode(payload).length;
      headers.push(`Content-Length: ${byteLen}`);
    } else {
      headers.push("Content-Length: 0");
    }
    socket.write(`${headers.join("\r\n")}\r
\r
${payload}`);
    try {
      socket.destroy();
    } catch {
    }
  }
  function attachHttpServer(net, handler) {
    return net.createServer((socket) => {
      const chunks = [];
      let received = 0;
      let headersDone = false;
      let method = "GET";
      let path = "/";
      let headerLength = 0;
      let contentLength = 0;
      const headers = {};
      socket.on("data", ((chunk) => {
        received += chunk.length;
        if (received > MAX_BODY) {
          socket.destroy();
          return;
        }
        chunks.push(chunk);
        const buffer = concatChunks(chunks);
        chunks.length = 0;
        chunks.push(buffer);
        if (!headersDone) {
          const sep = indexOfSep(buffer);
          if (sep === -1) return;
          headerLength = sep + 4;
          const headerText = new TextDecoder().decode(buffer.slice(0, sep));
          const lines = headerText.split("\r\n");
          const parts = (lines[0] || "").split(" ");
          method = parts[0] || "GET";
          path = parts[1] || "/";
          for (let i = 1; i < lines.length; i++) {
            const c = lines[i].indexOf(":");
            if (c <= 0) continue;
            const key = lines[i].slice(0, c).trim().toLowerCase();
            const val = lines[i].slice(c + 1).trim();
            headers[key] = val;
            if (key === "content-length") contentLength = parseInt(val, 10) || 0;
          }
          headersDone = true;
        }
        if (headersDone && buffer.length >= headerLength + contentLength) {
          const body = new TextDecoder().decode(
            buffer.slice(headerLength, headerLength + contentLength)
          );
          void Promise.resolve(handler({ method, path, headers, body }, socket)).catch(
            () => {
              try {
                writeHttp(socket, 500, JSON.stringify({ error: "internal" }));
              } catch {
              }
            }
          );
        }
      }));
      socket.on("error", (() => {
        try {
          socket.destroy();
        } catch {
        }
      }));
      socket.setTimeout(12e4, () => {
        try {
          socket.destroy();
        } catch {
        }
      });
    });
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/Options.js
  var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
  var defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    basePath: ["#"],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
    openAiAnyTypeName: "OpenAiAnyType"
  };
  var getDefaultOptions = (options) => typeof options === "string" ? {
    ...defaultOptions,
    name: options
  } : {
    ...defaultOptions,
    ...options
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/Refs.js
  var getRefs = (options) => {
    const _options = getDefaultOptions(options);
    const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
    return {
      ..._options,
      flags: { hasReferencedOpenAiAnyType: false },
      currentPath,
      propertyPath: void 0,
      seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
        def._def,
        {
          def: def._def,
          path: [..._options.basePath, _options.definitionPath, name],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ]))
    };
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/errorMessages.js
  function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages)
      return;
    if (errorMessage) {
      res.errorMessage = {
        ...res.errorMessage,
        [key]: errorMessage
      };
    }
  }
  function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
  var getRelativePath = (pathA, pathB) => {
    let i = 0;
    for (; i < pathA.length && i < pathB.length; i++) {
      if (pathA[i] !== pathB[i])
        break;
    }
    return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/any.js
  function parseAnyDef(refs) {
    if (refs.target !== "openAi") {
      return {};
    }
    const anyDefinitionPath = [
      ...refs.basePath,
      refs.definitionPath,
      refs.openAiAnyTypeName
    ];
    refs.flags.hasReferencedOpenAiAnyType = true;
    return {
      $ref: refs.$refStrategy === "relative" ? getRelativePath(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/array.js
  function parseArrayDef(def, refs) {
    const res = {
      type: "array"
    };
    if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
      res.items = parseDef(def.type._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items"]
      });
    }
    if (def.minLength) {
      setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
    }
    if (def.maxLength) {
      setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    }
    if (def.exactLength) {
      setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
      setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
  function parseBigintDef(def, refs) {
    const res = {
      type: "integer",
      format: "int64"
    };
    if (!def.checks)
      return res;
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMinimum = true;
            }
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          }
          break;
        case "max":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMaximum = true;
            }
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          }
          break;
        case "multipleOf":
          setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
          break;
      }
    }
    return res;
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
  function parseBooleanDef() {
    return {
      type: "boolean"
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
  function parseBrandedDef(_def, refs) {
    return parseDef(_def.type._def, refs);
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
  var parseCatchDef = (def, refs) => {
    return parseDef(def.innerType._def, refs);
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/date.js
  function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
      return {
        anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
      };
    }
    switch (strategy) {
      case "string":
      case "format:date-time":
        return {
          type: "string",
          format: "date-time"
        };
      case "format:date":
        return {
          type: "string",
          format: "date"
        };
      case "integer":
        return integerDateParser(def, refs);
    }
  }
  var integerDateParser = (def, refs) => {
    const res = {
      type: "integer",
      format: "unix-time"
    };
    if (refs.target === "openApi3") {
      return res;
    }
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(
            res,
            "minimum",
            check.value,
            // This is in milliseconds
            check.message,
            refs
          );
          break;
        case "max":
          setResponseValueAndErrors(
            res,
            "maximum",
            check.value,
            // This is in milliseconds
            check.message,
            refs
          );
          break;
      }
    }
    return res;
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/default.js
  function parseDefaultDef(_def, refs) {
    return {
      ...parseDef(_def.innerType._def, refs),
      default: _def.defaultValue()
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
  function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef(refs);
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
  function parseEnumDef(def) {
    return {
      type: "string",
      enum: Array.from(def.values)
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
  var isJsonSchema7AllOfType = (type) => {
    if ("type" in type && type.type === "string")
      return false;
    return "allOf" in type;
  };
  function parseIntersectionDef(def, refs) {
    const allOf = [
      parseDef(def.left._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "0"]
      }),
      parseDef(def.right._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "1"]
      })
    ].filter((x) => !!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
    const mergedAllOf = [];
    allOf.forEach((schema) => {
      if (isJsonSchema7AllOfType(schema)) {
        mergedAllOf.push(...schema.allOf);
        if (schema.unevaluatedProperties === void 0) {
          unevaluatedProperties = void 0;
        }
      } else {
        let nestedSchema = schema;
        if ("additionalProperties" in schema && schema.additionalProperties === false) {
          const { additionalProperties, ...rest } = schema;
          nestedSchema = rest;
        } else {
          unevaluatedProperties = void 0;
        }
        mergedAllOf.push(nestedSchema);
      }
    });
    return mergedAllOf.length ? {
      allOf: mergedAllOf,
      ...unevaluatedProperties
    } : void 0;
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
  function parseLiteralDef(def, refs) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
      return {
        type: Array.isArray(def.value) ? "array" : "object"
      };
    }
    if (refs.target === "openApi3") {
      return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        enum: [def.value]
      };
    }
    return {
      type: parsedType === "bigint" ? "integer" : parsedType,
      const: def.value
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/string.js
  var emojiRegex2 = void 0;
  var zodPatterns = {
    /**
     * `c` was changed to `[cC]` to replicate /i flag
     */
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
     * `a-z` was added to replicate /i flag
     */
    email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
     * Constructed a valid Unicode RegExp
     *
     * Lazily instantiate since this type of regex isn't supported
     * in all envs (e.g. React Native).
     *
     * See:
     * https://github.com/colinhacks/zod/issues/2433
     * Fix in Zod:
     * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
     */
    emoji: () => {
      if (emojiRegex2 === void 0) {
        emojiRegex2 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
      }
      return emojiRegex2;
    },
    /**
     * Unused
     */
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
     * Unused
     */
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    /**
     * Unused
     */
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  };
  function parseStringDef(def, refs) {
    const res = {
      type: "string"
    };
    if (def.checks) {
      for (const check of def.checks) {
        switch (check.kind) {
          case "min":
            setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            break;
          case "max":
            setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
          case "email":
            switch (refs.emailStrategy) {
              case "format:email":
                addFormat(res, "email", check.message, refs);
                break;
              case "format:idn-email":
                addFormat(res, "idn-email", check.message, refs);
                break;
              case "pattern:zod":
                addPattern(res, zodPatterns.email, check.message, refs);
                break;
            }
            break;
          case "url":
            addFormat(res, "uri", check.message, refs);
            break;
          case "uuid":
            addFormat(res, "uuid", check.message, refs);
            break;
          case "regex":
            addPattern(res, check.regex, check.message, refs);
            break;
          case "cuid":
            addPattern(res, zodPatterns.cuid, check.message, refs);
            break;
          case "cuid2":
            addPattern(res, zodPatterns.cuid2, check.message, refs);
            break;
          case "startsWith":
            addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
            break;
          case "endsWith":
            addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
            break;
          case "datetime":
            addFormat(res, "date-time", check.message, refs);
            break;
          case "date":
            addFormat(res, "date", check.message, refs);
            break;
          case "time":
            addFormat(res, "time", check.message, refs);
            break;
          case "duration":
            addFormat(res, "duration", check.message, refs);
            break;
          case "length":
            setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
          case "includes": {
            addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
            break;
          }
          case "ip": {
            if (check.version !== "v6") {
              addFormat(res, "ipv4", check.message, refs);
            }
            if (check.version !== "v4") {
              addFormat(res, "ipv6", check.message, refs);
            }
            break;
          }
          case "base64url":
            addPattern(res, zodPatterns.base64url, check.message, refs);
            break;
          case "jwt":
            addPattern(res, zodPatterns.jwt, check.message, refs);
            break;
          case "cidr": {
            if (check.version !== "v6") {
              addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
            }
            if (check.version !== "v4") {
              addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
            }
            break;
          }
          case "emoji":
            addPattern(res, zodPatterns.emoji(), check.message, refs);
            break;
          case "ulid": {
            addPattern(res, zodPatterns.ulid, check.message, refs);
            break;
          }
          case "base64": {
            switch (refs.base64Strategy) {
              case "format:binary": {
                addFormat(res, "binary", check.message, refs);
                break;
              }
              case "contentEncoding:base64": {
                setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
                break;
              }
              case "pattern:zod": {
                addPattern(res, zodPatterns.base64, check.message, refs);
                break;
              }
            }
            break;
          }
          case "nanoid": {
            addPattern(res, zodPatterns.nanoid, check.message, refs);
          }
          case "toLowerCase":
          case "toUpperCase":
          case "trim":
            break;
          default:
            /* @__PURE__ */ ((_) => {
            })(check);
        }
      }
    }
    return res;
  }
  function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
  }
  var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  function escapeNonAlphaNumeric(source) {
    let result = "";
    for (let i = 0; i < source.length; i++) {
      if (!ALPHA_NUMERIC.has(source[i])) {
        result += "\\";
      }
      result += source[i];
    }
    return result;
  }
  function addFormat(schema, value, message, refs) {
    if (schema.format || schema.anyOf?.some((x) => x.format)) {
      if (!schema.anyOf) {
        schema.anyOf = [];
      }
      if (schema.format) {
        schema.anyOf.push({
          format: schema.format,
          ...schema.errorMessage && refs.errorMessages && {
            errorMessage: { format: schema.errorMessage.format }
          }
        });
        delete schema.format;
        if (schema.errorMessage) {
          delete schema.errorMessage.format;
          if (Object.keys(schema.errorMessage).length === 0) {
            delete schema.errorMessage;
          }
        }
      }
      schema.anyOf.push({
        format: value,
        ...message && refs.errorMessages && { errorMessage: { format: message } }
      });
    } else {
      setResponseValueAndErrors(schema, "format", value, message, refs);
    }
  }
  function addPattern(schema, regex, message, refs) {
    if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
      if (!schema.allOf) {
        schema.allOf = [];
      }
      if (schema.pattern) {
        schema.allOf.push({
          pattern: schema.pattern,
          ...schema.errorMessage && refs.errorMessages && {
            errorMessage: { pattern: schema.errorMessage.pattern }
          }
        });
        delete schema.pattern;
        if (schema.errorMessage) {
          delete schema.errorMessage.pattern;
          if (Object.keys(schema.errorMessage).length === 0) {
            delete schema.errorMessage;
          }
        }
      }
      schema.allOf.push({
        pattern: stringifyRegExpWithFlags(regex, refs),
        ...message && refs.errorMessages && { errorMessage: { pattern: message } }
      });
    } else {
      setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
    }
  }
  function stringifyRegExpWithFlags(regex, refs) {
    if (!refs.applyRegexFlags || !regex.flags) {
      return regex.source;
    }
    const flags = {
      i: regex.flags.includes("i"),
      m: regex.flags.includes("m"),
      s: regex.flags.includes("s")
      // `.` matches newlines
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for (let i = 0; i < source.length; i++) {
      if (isEscaped) {
        pattern += source[i];
        isEscaped = false;
        continue;
      }
      if (flags.i) {
        if (inCharGroup) {
          if (source[i].match(/[a-z]/)) {
            if (inCharRange) {
              pattern += source[i];
              pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
              inCharRange = false;
            } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
              pattern += source[i];
              inCharRange = true;
            } else {
              pattern += `${source[i]}${source[i].toUpperCase()}`;
            }
            continue;
          }
        } else if (source[i].match(/[a-z]/)) {
          pattern += `[${source[i]}${source[i].toUpperCase()}]`;
          continue;
        }
      }
      if (flags.m) {
        if (source[i] === "^") {
          pattern += `(^|(?<=[\r
]))`;
          continue;
        } else if (source[i] === "$") {
          pattern += `($|(?=[\r
]))`;
          continue;
        }
      }
      if (flags.s && source[i] === ".") {
        pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
        continue;
      }
      pattern += source[i];
      if (source[i] === "\\") {
        isEscaped = true;
      } else if (inCharGroup && source[i] === "]") {
        inCharGroup = false;
      } else if (!inCharGroup && source[i] === "[") {
        inCharGroup = true;
      }
    }
    try {
      new RegExp(pattern);
    } catch {
      console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
      return regex.source;
    }
    return pattern;
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/record.js
  function parseRecordDef(def, refs) {
    if (refs.target === "openAi") {
      console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    }
    if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
      return {
        type: "object",
        required: def.keyType._def.values,
        properties: def.keyType._def.values.reduce((acc, key) => ({
          ...acc,
          [key]: parseDef(def.valueType._def, {
            ...refs,
            currentPath: [...refs.currentPath, "properties", key]
          }) ?? parseAnyDef(refs)
        }), {}),
        additionalProperties: refs.rejectedAdditionalProperties
      };
    }
    const schema = {
      type: "object",
      additionalProperties: parseDef(def.valueType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      }) ?? refs.allowedAdditionalProperties
    };
    if (refs.target === "openApi3") {
      return schema;
    }
    if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
      const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
      return {
        ...schema,
        propertyNames: keyType
      };
    } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
      return {
        ...schema,
        propertyNames: {
          enum: def.keyType._def.values
        }
      };
    } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
      const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
      return {
        ...schema,
        propertyNames: keyType
      };
    }
    return schema;
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/map.js
  function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
      return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "0"]
    }) || parseAnyDef(refs);
    const values = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "1"]
    }) || parseAnyDef(refs);
    return {
      type: "array",
      maxItems: 125,
      items: {
        type: "array",
        items: [keys, values],
        minItems: 2,
        maxItems: 2
      }
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
  function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key) => {
      return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key) => object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
    return {
      type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
      enum: actualValues
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/never.js
  function parseNeverDef(refs) {
    return refs.target === "openAi" ? void 0 : {
      not: parseAnyDef({
        ...refs,
        currentPath: [...refs.currentPath, "not"]
      })
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/null.js
  function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
      enum: ["null"],
      nullable: true
    } : {
      type: "null"
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/union.js
  var primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
  };
  function parseUnionDef(def, refs) {
    if (refs.target === "openApi3")
      return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
      const types = options.reduce((types2, x) => {
        const type = primitiveMappings[x._def.typeName];
        return type && !types2.includes(type) ? [...types2, type] : types2;
      }, []);
      return {
        type: types.length > 1 ? types : types[0]
      };
    } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
      const types = options.reduce((acc, x) => {
        const type = typeof x._def.value;
        switch (type) {
          case "string":
          case "number":
          case "boolean":
            return [...acc, type];
          case "bigint":
            return [...acc, "integer"];
          case "object":
            if (x._def.value === null)
              return [...acc, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return acc;
        }
      }, []);
      if (types.length === options.length) {
        const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
        return {
          type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
          enum: options.reduce((acc, x) => {
            return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
          }, [])
        };
      }
    } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
      return {
        type: "string",
        enum: options.reduce((acc, x) => [
          ...acc,
          ...x._def.values.filter((x2) => !acc.includes(x2))
        ], [])
      };
    }
    return asAnyOf(def, refs);
  }
  var asAnyOf = (def, refs) => {
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", `${i}`]
    })).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? { anyOf } : void 0;
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
  function parseNullableDef(def, refs) {
    if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
      if (refs.target === "openApi3") {
        return {
          type: primitiveMappings[def.innerType._def.typeName],
          nullable: true
        };
      }
      return {
        type: [
          primitiveMappings[def.innerType._def.typeName],
          "null"
        ]
      };
    }
    if (refs.target === "openApi3") {
      const base2 = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [...refs.currentPath]
      });
      if (base2 && "$ref" in base2)
        return { allOf: [base2], nullable: true };
      return base2 && { ...base2, nullable: true };
    }
    const base = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", "0"]
    });
    return base && { anyOf: [base, { type: "null" }] };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/number.js
  function parseNumberDef(def, refs) {
    const res = {
      type: "number"
    };
    if (!def.checks)
      return res;
    for (const check of def.checks) {
      switch (check.kind) {
        case "int":
          res.type = "integer";
          addErrorMessage(res, "type", check.message, refs);
          break;
        case "min":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMinimum = true;
            }
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          }
          break;
        case "max":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMaximum = true;
            }
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          }
          break;
        case "multipleOf":
          setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
          break;
      }
    }
    return res;
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/object.js
  function parseObjectDef(def, refs) {
    const forceOptionalIntoNullable = refs.target === "openAi";
    const result = {
      type: "object",
      properties: {}
    };
    const required = [];
    const shape = def.shape();
    for (const propName in shape) {
      let propDef = shape[propName];
      if (propDef === void 0 || propDef._def === void 0) {
        continue;
      }
      let propOptional = safeIsOptional(propDef);
      if (propOptional && forceOptionalIntoNullable) {
        if (propDef._def.typeName === "ZodOptional") {
          propDef = propDef._def.innerType;
        }
        if (!propDef.isNullable()) {
          propDef = propDef.nullable();
        }
        propOptional = false;
      }
      const parsedDef = parseDef(propDef._def, {
        ...refs,
        currentPath: [...refs.currentPath, "properties", propName],
        propertyPath: [...refs.currentPath, "properties", propName]
      });
      if (parsedDef === void 0) {
        continue;
      }
      result.properties[propName] = parsedDef;
      if (!propOptional) {
        required.push(propName);
      }
    }
    if (required.length) {
      result.required = required;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== void 0) {
      result.additionalProperties = additionalProperties;
    }
    return result;
  }
  function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
      return parseDef(def.catchall._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      });
    }
    switch (def.unknownKeys) {
      case "passthrough":
        return refs.allowedAdditionalProperties;
      case "strict":
        return refs.rejectedAdditionalProperties;
      case "strip":
        return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
  }
  function safeIsOptional(schema) {
    try {
      return schema.isOptional();
    } catch {
      return true;
    }
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
  var parseOptionalDef = (def, refs) => {
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
      return parseDef(def.innerType._def, refs);
    }
    const innerSchema = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", "1"]
    });
    return innerSchema ? {
      anyOf: [
        {
          not: parseAnyDef(refs)
        },
        innerSchema
      ]
    } : parseAnyDef(refs);
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
  var parsePipelineDef = (def, refs) => {
    if (refs.pipeStrategy === "input") {
      return parseDef(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
      return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    });
    const b = parseDef(def.out._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
    });
    return {
      allOf: [a, b].filter((x) => x !== void 0)
    };
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
  function parsePromiseDef(def, refs) {
    return parseDef(def.type._def, refs);
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/set.js
  function parseSetDef(def, refs) {
    const items = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
    const schema = {
      type: "array",
      uniqueItems: true,
      items
    };
    if (def.minSize) {
      setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
    }
    if (def.maxSize) {
      setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    }
    return schema;
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
  function parseTupleDef(def, refs) {
    if (def.rest) {
      return {
        type: "array",
        minItems: def.items.length,
        items: def.items.map((x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
        additionalItems: parseDef(def.rest._def, {
          ...refs,
          currentPath: [...refs.currentPath, "additionalItems"]
        })
      };
    } else {
      return {
        type: "array",
        minItems: def.items.length,
        maxItems: def.items.length,
        items: def.items.map((x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
      };
    }
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
  function parseUndefinedDef(refs) {
    return {
      not: parseAnyDef(refs)
    };
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
  function parseUnknownDef(refs) {
    return parseAnyDef(refs);
  }

  // ../../node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
  var parseReadonlyDef = (def, refs) => {
    return parseDef(def.innerType._def, refs);
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/selectParser.js
  var selectParser = (def, typeName, refs) => {
    switch (typeName) {
      case ZodFirstPartyTypeKind.ZodString:
        return parseStringDef(def, refs);
      case ZodFirstPartyTypeKind.ZodNumber:
        return parseNumberDef(def, refs);
      case ZodFirstPartyTypeKind.ZodObject:
        return parseObjectDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBigInt:
        return parseBigintDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBoolean:
        return parseBooleanDef();
      case ZodFirstPartyTypeKind.ZodDate:
        return parseDateDef(def, refs);
      case ZodFirstPartyTypeKind.ZodUndefined:
        return parseUndefinedDef(refs);
      case ZodFirstPartyTypeKind.ZodNull:
        return parseNullDef(refs);
      case ZodFirstPartyTypeKind.ZodArray:
        return parseArrayDef(def, refs);
      case ZodFirstPartyTypeKind.ZodUnion:
      case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
        return parseUnionDef(def, refs);
      case ZodFirstPartyTypeKind.ZodIntersection:
        return parseIntersectionDef(def, refs);
      case ZodFirstPartyTypeKind.ZodTuple:
        return parseTupleDef(def, refs);
      case ZodFirstPartyTypeKind.ZodRecord:
        return parseRecordDef(def, refs);
      case ZodFirstPartyTypeKind.ZodLiteral:
        return parseLiteralDef(def, refs);
      case ZodFirstPartyTypeKind.ZodEnum:
        return parseEnumDef(def);
      case ZodFirstPartyTypeKind.ZodNativeEnum:
        return parseNativeEnumDef(def);
      case ZodFirstPartyTypeKind.ZodNullable:
        return parseNullableDef(def, refs);
      case ZodFirstPartyTypeKind.ZodOptional:
        return parseOptionalDef(def, refs);
      case ZodFirstPartyTypeKind.ZodMap:
        return parseMapDef(def, refs);
      case ZodFirstPartyTypeKind.ZodSet:
        return parseSetDef(def, refs);
      case ZodFirstPartyTypeKind.ZodLazy:
        return () => def.getter()._def;
      case ZodFirstPartyTypeKind.ZodPromise:
        return parsePromiseDef(def, refs);
      case ZodFirstPartyTypeKind.ZodNaN:
      case ZodFirstPartyTypeKind.ZodNever:
        return parseNeverDef(refs);
      case ZodFirstPartyTypeKind.ZodEffects:
        return parseEffectsDef(def, refs);
      case ZodFirstPartyTypeKind.ZodAny:
        return parseAnyDef(refs);
      case ZodFirstPartyTypeKind.ZodUnknown:
        return parseUnknownDef(refs);
      case ZodFirstPartyTypeKind.ZodDefault:
        return parseDefaultDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBranded:
        return parseBrandedDef(def, refs);
      case ZodFirstPartyTypeKind.ZodReadonly:
        return parseReadonlyDef(def, refs);
      case ZodFirstPartyTypeKind.ZodCatch:
        return parseCatchDef(def, refs);
      case ZodFirstPartyTypeKind.ZodPipeline:
        return parsePipelineDef(def, refs);
      case ZodFirstPartyTypeKind.ZodFunction:
      case ZodFirstPartyTypeKind.ZodVoid:
      case ZodFirstPartyTypeKind.ZodSymbol:
        return void 0;
      default:
        return /* @__PURE__ */ ((_) => void 0)(typeName);
    }
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/parseDef.js
  function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
      const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
      if (overrideResult !== ignoreOverride) {
        return overrideResult;
      }
    }
    if (seenItem && !forceResolution) {
      const seenSchema = get$ref(seenItem, refs);
      if (seenSchema !== void 0) {
        return seenSchema;
      }
    }
    const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
    const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema) {
      addMeta(def, refs, jsonSchema);
    }
    if (refs.postProcess) {
      const postProcessResult = refs.postProcess(jsonSchema, def, refs);
      newItem.jsonSchema = jsonSchema;
      return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema;
    return jsonSchema;
  }
  var get$ref = (item, refs) => {
    switch (refs.$refStrategy) {
      case "root":
        return { $ref: item.path.join("/") };
      case "relative":
        return { $ref: getRelativePath(refs.currentPath, item.path) };
      case "none":
      case "seen": {
        if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
          console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
          return parseAnyDef(refs);
        }
        return refs.$refStrategy === "seen" ? parseAnyDef(refs) : void 0;
      }
    }
  };
  var addMeta = (def, refs, jsonSchema) => {
    if (def.description) {
      jsonSchema.description = def.description;
      if (refs.markdownDescription) {
        jsonSchema.markdownDescription = def.description;
      }
    }
    return jsonSchema;
  };

  // ../../node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
  var zodToJsonSchema = (schema, options) => {
    const refs = getRefs(options);
    let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2]) => ({
      ...acc,
      [name2]: parseDef(schema2._def, {
        ...refs,
        currentPath: [...refs.basePath, refs.definitionPath, name2]
      }, true) ?? parseAnyDef(refs)
    }), {}) : void 0;
    const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
    const main = parseDef(schema._def, name === void 0 ? refs : {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name]
    }, false) ?? parseAnyDef(refs);
    const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
    if (title !== void 0) {
      main.title = title;
    }
    if (refs.flags.hasReferencedOpenAiAnyType) {
      if (!definitions) {
        definitions = {};
      }
      if (!definitions[refs.openAiAnyTypeName]) {
        definitions[refs.openAiAnyTypeName] = {
          // Skipping "object" as no properties can be defined and additionalProperties must be "false"
          type: ["string", "number", "integer", "boolean", "array", "null"],
          items: {
            $ref: refs.$refStrategy === "relative" ? "1" : [
              ...refs.basePath,
              refs.definitionPath,
              refs.openAiAnyTypeName
            ].join("/")
          }
        };
      }
    }
    const combined = name === void 0 ? definitions ? {
      ...main,
      [refs.definitionPath]: definitions
    } : main : {
      $ref: [
        ...refs.$refStrategy === "relative" ? [] : refs.basePath,
        refs.definitionPath,
        name
      ].join("/"),
      [refs.definitionPath]: {
        ...definitions,
        [name]: main
      }
    };
    if (refs.target === "jsonSchema7") {
      combined.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
      combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
      console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
    }
    return combined;
  };

  // src/errors.ts
  var CommandError = class extends Error {
    constructor(code, message, details) {
      super(message);
      this.code = code;
      this.details = details;
    }
    toPayload() {
      return makeError(this.code, this.message, this.details);
    }
  };
  function toErrorPayload(err) {
    if (err instanceof CommandError) return err.toPayload();
    if (err instanceof Error) {
      return makeError("E_BLOCKBENCH_ERROR", err.message);
    }
    return makeError("E_BLOCKBENCH_ERROR", String(err));
  }

  // src/host/undo-port.ts
  function undoApi() {
    const u = globalThis.Undo;
    if (!u?.initEdit || !u.finishEdit) {
      throw new CommandError("E_BLOCKBENCH_ERROR", "Undo API unavailable");
    }
    return {
      initEdit: u.initEdit.bind(u),
      finishEdit: u.finishEdit.bind(u),
      cancelEdit: typeof u.cancelEdit === "function" ? u.cancelEdit.bind(u) : () => {
      }
    };
  }
  function createUndoPort() {
    return {
      run(aspects, label, fn) {
        const Undo = undoApi();
        const createdEls = [];
        const createdTex = [];
        const liveEls = [];
        const liveTex = [];
        const initAspects = { ...aspects };
        if (Array.isArray(initAspects.elements) && initAspects.elements.length === 0) {
          delete initAspects.elements;
        }
        if (Array.isArray(initAspects.textures) && initAspects.textures.length === 0) {
          delete initAspects.textures;
        }
        Undo.initEdit(initAspects);
        try {
          const track = {
            addElements: (els2) => {
              createdEls.push(...els2);
              for (const e of els2) {
                if (e && typeof e === "object" && "uuid" in e && "getUndoCopy" in e) {
                  liveEls.push(e);
                }
              }
            },
            addTextures: (texs2) => {
              createdTex.push(...texs2);
              for (const t of texs2) {
                if (t && typeof t === "object" && "uuid" in t && "getUndoCopy" in t) {
                  liveTex.push(t);
                }
              }
            }
          };
          const result = fn(track);
          const finish = { ...initAspects };
          const els = liveEls.length ? liveEls : resolveLive(createdEls);
          const texs = liveTex.length ? liveTex : resolveLiveTextures(createdTex);
          if (els.length) finish.elements = els;
          else delete finish.elements;
          if (texs.length) finish.textures = texs;
          else delete finish.textures;
          Undo.finishEdit(label, finish);
          return result;
        } catch (err) {
          try {
            Undo.cancelEdit(true);
          } catch {
          }
          throw err;
        }
      }
    };
  }
  function resolveLive(refs) {
    const Cube2 = globalThis.Cube;
    const Group2 = globalThis.Group;
    const out = [];
    for (const r of refs) {
      const hit = Cube2?.all.find((c) => c.uuid === r.uuid) ?? Group2?.all.find((g) => g.uuid === r.uuid);
      if (hit) out.push(hit);
    }
    return out;
  }
  function resolveLiveTextures(refs) {
    const Texture2 = globalThis.Texture;
    return refs.map((r) => Texture2?.all.find((t) => t.uuid === r.uuid)).filter(Boolean);
  }

  // src/host/texture-port.ts
  function textureApi() {
    const T = globalThis.Texture;
    if (!T) throw new CommandError("E_BLOCKBENCH_ERROR", "Texture API unavailable");
    return T;
  }
  function wrap(tex) {
    return {
      uuid: tex.uuid,
      name: tex.name,
      width: tex.width,
      height: tex.height,
      edit(paint, editName) {
        if (typeof tex.edit === "function") {
          tex.edit((canvas2) => {
            const ctx2 = canvas2.getContext("2d") ?? tex.ctx;
            if (!ctx2) {
              throw new CommandError("E_BLOCKBENCH_ERROR", "Texture canvas has no 2d context");
            }
            paint(ctx2, canvas2);
          }, { edit_name: editName });
          tex.updateChangesAfterEdit?.();
          return;
        }
        const canvas = tex.canvas;
        const ctx = canvas?.getContext("2d") ?? tex.ctx;
        if (!canvas || !ctx) {
          throw new CommandError("E_BLOCKBENCH_ERROR", "Texture.edit unavailable");
        }
        paint(ctx, canvas);
        tex.updateChangesAfterEdit?.();
      },
      applyToCube(cubeUuid, faces = true) {
        const Cube2 = globalThis.Cube;
        const cube = Cube2?.all.find((c) => c.uuid === cubeUuid);
        if (!cube) throw new CommandError("E_NOT_FOUND", `Cube ${cubeUuid}`);
        cube.applyTexture(tex, faces);
      }
    };
  }
  function solidDataUrl(width, height, fill) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    ctx.fillStyle = fill;
    ctx.fillRect(0, 0, width, height);
    return canvas.toDataURL("image/png");
  }
  function createTexturePort() {
    return {
      find(ref) {
        const T = textureApi();
        const hit = T.all.find((t) => t.uuid === ref || t.name === ref);
        return hit ? wrap(hit) : void 0;
      },
      defaultOrFirst() {
        const T = textureApi();
        const hit = T.getDefault?.() ?? T.all[0];
        return hit ? wrap(hit) : void 0;
      },
      list() {
        return textureApi().all.map(wrap);
      },
      ensure(opts) {
        const T = textureApi();
        const existing = T.all.find((t) => t.name === opts.name);
        if (existing) return wrap(existing);
        const dataUrl = solidDataUrl(opts.width, opts.height, opts.fill);
        const tex = new T({ name: opts.name });
        if (typeof tex.fromDataURL !== "function") {
          throw new CommandError(
            "E_BLOCKBENCH_ERROR",
            "Texture.fromDataURL missing \u2014 need Blockbench \u2265 5.1"
          );
        }
        tex.fromDataURL(dataUrl);
        tex.add(false);
        const Project2 = globalThis.Project;
        if (Project2) {
          Project2.texture_width = opts.width;
          Project2.texture_height = opts.height;
        }
        return wrap(tex);
      }
    };
  }

  // src/host/canvas-port.ts
  function createCanvasPort() {
    return {
      updateElements(elements, aspects = { geometry: true, uv: true, faces: true }) {
        const Canvas = globalThis.Canvas;
        const Cube2 = globalThis.Cube;
        const Group2 = globalThis.Group;
        const live = elements.map(
          (r) => Cube2?.all.find((c) => c.uuid === r.uuid) ?? Group2?.all.find((g) => g.uuid === r.uuid)
        ).filter(Boolean);
        if (Canvas?.updateView && live.length) {
          Canvas.updateView({
            elements: live,
            element_aspects: aspects,
            selection: false
          });
          return;
        }
        Canvas?.updateAll?.();
      },
      updateAll() {
        const Canvas = globalThis.Canvas;
        Canvas?.updateAll?.();
      }
    };
  }

  // src/host/format-port.ts
  function createFormatPort() {
    return {
      currentId() {
        return globalThis.Format?.id ?? null;
      },
      hasGeckoLib() {
        const Formats = globalThis.Formats;
        if (!Formats) return false;
        if (Formats.geckolib_model) return true;
        return Object.keys(Formats).some((id) => id.toLowerCase().includes("gecko"));
      },
      createProject(opts) {
        const Formats = globalThis.Formats;
        if (!Formats) {
          throw new CommandError("E_BLOCKBENCH_ERROR", "Formats unavailable");
        }
        let api = Formats[opts.format];
        let id = opts.format;
        if (!api && opts.format === "geckolib_model") {
          const hit = Object.keys(Formats).find(
            (k) => k.toLowerCase().includes("gecko")
          );
          if (!hit) {
            throw new CommandError(
              "E_UNSUPPORTED_FORMAT",
              "Install the GeckoLib Blockbench plugin."
            );
          }
          id = hit;
          api = Formats[hit];
        }
        if (!api?.new) {
          throw new CommandError("E_UNSUPPORTED_FORMAT", `Cannot create ${opts.format}`);
        }
        api.new();
        const Project2 = globalThis.Project;
        const Format2 = globalThis.Format;
        if (Project2) {
          if (opts.name) Project2.name = opts.name;
          if (opts.texture_width) Project2.texture_width = opts.texture_width;
          if (opts.texture_height) Project2.texture_height = opts.texture_height;
        }
        return { format: Format2?.id ?? id, name: Project2?.name };
      }
    };
  }

  // src/host/preview-port.ts
  var FALLBACK = {
    north: { id: "north", projection: "orthogonal", position: [0, 16, -64], target: [0, 16, 0] },
    south: { id: "south", projection: "orthogonal", position: [0, 16, 64], target: [0, 16, 0] },
    east: { id: "east", projection: "orthogonal", position: [64, 16, 0], target: [0, 16, 0] },
    west: { id: "west", projection: "orthogonal", position: [-64, 16, 0], target: [0, 16, 0] },
    up: { id: "up", projection: "orthogonal", position: [0, 64, 0], target: [0, 16, 0] },
    down: { id: "down", projection: "orthogonal", position: [0, -64, 0], target: [0, 16, 0] },
    iso: { id: "isometric", projection: "orthogonal", position: [40, 40, 40], target: [0, 16, 0] }
  };
  function createPreviewPort() {
    return {
      capture(view, size) {
        return new Promise((resolve, reject) => {
          const g = globalThis;
          const preview = g.Screencam?.NoAAPreview ?? g.Preview?.selected;
          if (!preview || !g.Screencam?.screenshotPreview) {
            reject(
              new CommandError(
                "E_BLOCKBENCH_ERROR",
                "Screenshot API missing (need desktop Blockbench 5.1+)"
              )
            );
            return;
          }
          const key = view === "iso" ? "isometric" : view;
          const preset = g.DefaultCameraPresets?.find((p) => p.id === key || p.id === view) ?? FALLBACK[view] ?? FALLBACK.iso;
          g.Screencam.NoAAPreview?.loadAnglePreset?.(preset);
          g.Screencam.NoAAPreview?.resize?.(size, size);
          const t = setTimeout(
            () => reject(new CommandError("E_TIMEOUT", "Screenshot timed out")),
            2e4
          );
          try {
            g.Screencam.screenshotPreview(
              preview,
              { width: size, height: size, crop: false },
              (url) => {
                clearTimeout(t);
                resolve(url);
              }
            );
          } catch (err) {
            clearTimeout(t);
            reject(err);
          }
        });
      }
    };
  }

  // src/host/live.ts
  function probeCapabilities(host) {
    const caps = ["geometry"];
    try {
      host.textures.list();
      caps.push("textures");
    } catch {
    }
    const g = globalThis;
    if (g.Screencam?.screenshotPreview) caps.push("screenshots");
    if (g.Painter?.edit) caps.push("painter");
    if (host.formats.hasGeckoLib()) caps.push("geckolib");
    const Anim = globalThis.Animation;
    if (Anim?.all) caps.push("animations");
    if (g.Blockbench?.isApp && typeof g.require === "function") {
      try {
        g.require("fs");
        caps.push("filesystem");
      } catch {
      }
    }
    return caps;
  }
  var cached = null;
  function getHost() {
    if (cached) return cached;
    const undo = createUndoPort();
    const textures = createTexturePort();
    const canvas = createCanvasPort();
    const formats = createFormatPort();
    const preview = createPreviewPort();
    const host = {
      undo,
      textures,
      canvas,
      formats,
      preview,
      probeCapabilities: () => probeCapabilities(host)
    };
    cached = host;
    return host;
  }

  // src/bb/elements.ts
  function requireProject() {
    if (!globalThis.Project) {
      throw new CommandError("E_BLOCKBENCH_ERROR", "No project is open in Blockbench.");
    }
  }
  function currentFormatId() {
    return getHost().formats.currentId();
  }
  function findGroup(ref) {
    return Group.all.find((g) => g.uuid === ref || g.name === ref);
  }
  function findCube(ref) {
    return Cube.all.find((c) => c.uuid === ref || c.name === ref);
  }
  function findElement(ref) {
    return findGroup(ref) ?? findCube(ref);
  }
  function requireGroup(ref) {
    const g = findGroup(ref);
    if (!g) throw new CommandError("E_NOT_FOUND", `Group not found: ${ref}`);
    return g;
  }
  function requireCube(ref) {
    const c = findCube(ref);
    if (!c) throw new CommandError("E_NOT_FOUND", `Cube not found: ${ref}`);
    return c;
  }
  function parentOf(ref) {
    if (!ref || ref === "root") return "root";
    return requireGroup(ref);
  }
  function refreshView(elements) {
    const host = getHost();
    if (elements?.length) host.canvas.updateElements(elements);
    else host.canvas.updateAll();
  }

  // src/bb/summary.ts
  function buildProjectSummary() {
    requireProject();
    const outliner = [];
    for (const g of Group.all) {
      const parent = !g.parent || g.parent === "root" ? null : typeof g.parent === "string" ? g.parent : g.parent.uuid;
      outliner.push({
        uuid: g.uuid,
        name: g.name,
        type: "group",
        parent
      });
    }
    for (const c of Cube.all) {
      const parent = !c.parent || c.parent === "root" ? null : typeof c.parent === "string" ? c.parent : c.parent.uuid;
      outliner.push({
        uuid: c.uuid,
        name: c.name,
        type: "cube",
        parent
      });
    }
    return {
      format: currentFormatId() ?? "unknown",
      name: Project?.name,
      cubes: Cube.all.length,
      groups: Group.all.length,
      textures: Texture.all.length,
      animations: bbAnimation()?.all?.length ?? 0,
      outliner
    };
  }

  // src/check/aabb.ts
  function cubeAabb(cube) {
    const min = [
      Math.min(cube.from[0], cube.to[0]),
      Math.min(cube.from[1], cube.to[1]),
      Math.min(cube.from[2], cube.to[2])
    ];
    const max = [
      Math.max(cube.from[0], cube.to[0]),
      Math.max(cube.from[1], cube.to[1]),
      Math.max(cube.from[2], cube.to[2])
    ];
    return { min, max };
  }
  function volume(a) {
    return Math.max(0, a.max[0] - a.min[0]) * Math.max(0, a.max[1] - a.min[1]) * Math.max(0, a.max[2] - a.min[2]);
  }
  function overlaps(a, b) {
    return a.min[0] < b.max[0] && a.max[0] > b.min[0] && a.min[1] < b.max[1] && a.max[1] > b.min[1] && a.min[2] < b.max[2] && a.max[2] > b.min[2];
  }
  function center(a) {
    return [
      (a.min[0] + a.max[0]) / 2,
      (a.min[1] + a.max[1]) / 2,
      (a.min[2] + a.max[2]) / 2
    ];
  }
  function dist(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    const dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  // src/check/rules.ts
  function runCheckModel() {
    requireProject();
    const findings = [];
    for (const g of Group.all) {
      const childCount = g.children?.length ?? 0;
      if (childCount === 0) {
        findings.push({
          severity: "error",
          code: "EMPTY_GROUP",
          element: g.name,
          message: `Group "${g.name}" has no children \u2014 delete it or add geometry.`
        });
      }
    }
    const aabbs = Cube.all.map((c) => ({ cube: c, box: cubeAabb(c) }));
    for (const { cube, box } of aabbs) {
      if (volume(box) <= 0) {
        findings.push({
          severity: "error",
          code: "ZERO_VOLUME",
          element: cube.name,
          message: `Cube "${cube.name}" has zero volume.`
        });
      }
      const sizes = [
        box.max[0] - box.min[0],
        box.max[1] - box.min[1],
        box.max[2] - box.min[2]
      ];
      if (sizes.some((s) => s > 0 && s < 1)) {
        findings.push({
          severity: "warn",
          code: "SLIVER",
          element: cube.name,
          message: `Cube "${cube.name}" has a sub-1 unit thickness \u2014 often looks noisy.`
        });
      }
      const untextured = Object.entries(cube.faces ?? {}).filter(
        ([, f]) => f && (f.texture === null || f.texture === void 0)
      );
      if (untextured.length > 0) {
        findings.push({
          severity: "warn",
          code: "UNTEXTURED_FACE",
          element: cube.name,
          message: `Cube "${cube.name}" has ${untextured.length} untextured face(s).`
        });
      }
      const parent = cube.parent;
      if (parent && parent !== "root" && typeof parent !== "string") {
        const d = dist(center(box), parent.origin);
        const diag = dist(box.min, box.max);
        if (diag > 0 && d > diag * 2.5) {
          findings.push({
            severity: "warn",
            code: "BAD_PIVOT",
            element: cube.name,
            message: `Cube "${cube.name}" is far from parent pivot \u2014 animation may look wrong.`
          });
        }
      }
    }
    for (let i = 0; i < aabbs.length; i++) {
      for (let j = i + 1; j < aabbs.length; j++) {
        const a = aabbs[i];
        const b = aabbs[j];
        if (!overlaps(a.box, b.box)) continue;
        const inter = Math.max(
          0,
          Math.min(a.box.max[0], b.box.max[0]) - Math.max(a.box.min[0], b.box.min[0])
        ) * Math.max(
          0,
          Math.min(a.box.max[1], b.box.max[1]) - Math.max(a.box.min[1], b.box.min[1])
        ) * Math.max(
          0,
          Math.min(a.box.max[2], b.box.max[2]) - Math.max(a.box.min[2], b.box.min[2])
        );
        const smaller = Math.min(volume(a.box), volume(b.box));
        if (smaller > 0 && inter / smaller > 0.35) {
          findings.push({
            severity: "info",
            code: "OVERLAP",
            element: `${a.cube.name}|${b.cube.name}`,
            message: `Cubes "${a.cube.name}" and "${b.cube.name}" overlap significantly.`
          });
        }
      }
    }
    if (Cube.all.length === 0) {
      findings.push({
        severity: "error",
        code: "NO_CUBES",
        message: "Project has no cubes."
      });
    }
    const errors = findings.filter((f) => f.severity === "error").length;
    const warns = findings.filter((f) => f.severity === "warn").length;
    return {
      findings,
      summary: {
        cubes: Cube.all.length,
        groups: Group.all.length,
        errors,
        warns
      }
    };
  }

  // src/views/capture.ts
  async function captureViews(params = {}) {
    requireProject();
    const host = getHost();
    const views = params.views ?? [...captureViewsDefaults.views];
    const maxEdge = params.max_edge ?? captureViewsDefaults.max_edge;
    const format = params.format ?? captureViewsDefaults.format;
    const quality = (params.quality ?? captureViewsDefaults.quality) / 100;
    const out = [];
    for (const view of views) {
      const raw = await host.preview.capture(view, maxEdge);
      const compressed = await compress(raw, format, quality, maxEdge);
      const mime = compressed.startsWith("data:image/jpeg") ? "image/jpeg" : "image/png";
      const b64 = compressed.split(",")[1] ?? "";
      out.push({
        view,
        width: maxEdge,
        height: maxEdge,
        bytes: Math.floor(b64.length * 3 / 4),
        mime,
        data_url: compressed
      });
    }
    return { views: out };
  }
  function compress(dataUrl, format, quality, maxEdge) {
    if (format === "png" && dataUrl.startsWith("data:image/png")) {
      return Promise.resolve(dataUrl);
    }
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = maxEdge;
        canvas.height = maxEdge;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(dataUrl);
          return;
        }
        ctx.drawImage(img, 0, 0, maxEdge, maxEdge);
        resolve(
          format === "jpeg" ? canvas.toDataURL("image/jpeg", quality) : canvas.toDataURL("image/png")
        );
      };
      img.onerror = () => resolve(dataUrl);
      img.src = dataUrl;
    });
  }

  // src/bb/project.ts
  function createProject(opts) {
    return getHost().formats.createProject(opts);
  }

  // src/geometry/batch.ts
  function applyGeometryBatch(opts) {
    requireProject();
    const label = opts.undo_label ?? "apply_geometry_batch";
    const pendingGroups = new Set(
      (opts.create_groups ?? []).map((g) => g.name)
    );
    for (const g of opts.create_groups ?? []) {
      if (g.parent && g.parent !== "root" && !pendingGroups.has(g.parent) && !findElement(g.parent)) {
        throw new CommandError("E_PARTIAL_FORBIDDEN", `Missing parent group: ${g.parent}`);
      }
    }
    for (const c of opts.create_cubes ?? []) {
      if (c.parent && c.parent !== "root" && !pendingGroups.has(c.parent) && !findElement(c.parent)) {
        throw new CommandError("E_PARTIAL_FORBIDDEN", `Missing parent for cube: ${c.parent}`);
      }
    }
    for (const id of opts.delete_uuids ?? []) {
      if (!findElement(id)) {
        throw new CommandError("E_PARTIAL_FORBIDDEN", `Cannot delete missing element: ${id}`);
      }
    }
    const host = getHost();
    return host.undo.run({ outliner: true, elements: [] }, label, (track) => {
      const created = [];
      const deleted = [];
      const nameToGroup = /* @__PURE__ */ new Map();
      for (const spec of opts.create_groups ?? []) {
        const parent = !spec.parent || spec.parent === "root" ? "root" : nameToGroup.get(spec.parent) ?? findElement(spec.parent) ?? "root";
        const group = new Group({
          name: spec.name,
          origin: spec.origin ? [...spec.origin] : [0, 0, 0],
          rotation: spec.rotation ? [...spec.rotation] : [0, 0, 0]
        }).init().addTo(parent);
        group.createUniqueName?.();
        nameToGroup.set(group.name, group);
        const row = { uuid: group.uuid, name: group.name, type: "group" };
        created.push(row);
        track.addElements([group]);
      }
      const tex = host.textures.defaultOrFirst();
      for (const spec of opts.create_cubes ?? []) {
        const parent = !spec.parent || spec.parent === "root" ? "root" : nameToGroup.get(spec.parent) ?? findElement(spec.parent) ?? "root";
        const cube = new Cube({
          name: spec.name,
          from: [...spec.from],
          to: [...spec.to],
          origin: spec.origin ? [...spec.origin] : [...spec.from],
          rotation: spec.rotation ? [...spec.rotation] : [0, 0, 0],
          inflate: spec.inflate ?? 0,
          autouv: 1,
          box_uv: true
        }).init().addTo(parent);
        cube.mapAutoUV?.();
        if (tex) tex.applyToCube(cube.uuid, true);
        const row = { uuid: cube.uuid, name: cube.name, type: "cube" };
        created.push(row);
        track.addElements([cube]);
      }
      for (const id of opts.delete_uuids ?? []) {
        const el = findElement(id);
        if (!el) continue;
        deleted.push(el.uuid);
        el.remove?.(false);
      }
      refreshView(created);
      return { ok: true, undo_label: label, created, deleted };
    });
  }

  // src/geometry/limb.ts
  function hangFromPivot(pivot, size, from) {
    if (from) {
      return {
        from,
        to: [from[0] + size[0], from[1] + size[1], from[2] + size[2]]
      };
    }
    const fromAuto = [
      pivot[0] - size[0] / 2,
      pivot[1] - size[1],
      pivot[2] - size[2] / 2
    ];
    return {
      from: fromAuto,
      to: [fromAuto[0] + size[0], fromAuto[1] + size[1], fromAuto[2] + size[2]]
    };
  }
  function addLimbSide(name, pivot, size, parent, from) {
    const box = hangFromPivot(pivot, size, from);
    const group = new Group({
      name,
      origin: [...pivot],
      rotation: [0, 0, 0]
    }).init().addTo(parent);
    group.createUniqueName?.();
    const cube = new Cube({
      name: `${name}_cube`,
      from: box.from,
      to: box.to,
      origin: [...pivot],
      autouv: 1
    }).init().addTo(group);
    cube.mapAutoUV?.();
    const tex = getHost().textures.defaultOrFirst();
    if (tex) tex.applyToCube(cube.uuid, true);
    return { group, cube };
  }
  function createLimb(opts) {
    requireProject();
    const parent = parentOf(opts.parent);
    const label = opts.undo_label ?? `create_limb ${opts.name}`;
    const host = getHost();
    return host.undo.run({ outliner: true, elements: [] }, label, (track) => {
      const created = [];
      const primary = addLimbSide(opts.name, opts.pivot, opts.size, parent, opts.from);
      created.push(
        { uuid: primary.group.uuid, name: primary.group.name, type: "group" },
        { uuid: primary.cube.uuid, name: primary.cube.name, type: "cube" }
      );
      track.addElements(created);
      if (opts.mirror === "x") {
        const mirrorName = mirrorNameX(opts.name);
        const mp = [-opts.pivot[0], opts.pivot[1], opts.pivot[2]];
        const mf = opts.from ? [-opts.from[0] - opts.size[0], opts.from[1], opts.from[2]] : void 0;
        const secondary = addLimbSide(mirrorName, mp, opts.size, parent, mf);
        const more = [
          { uuid: secondary.group.uuid, name: secondary.group.name, type: "group" },
          { uuid: secondary.cube.uuid, name: secondary.cube.name, type: "cube" }
        ];
        created.push(...more);
        track.addElements(more);
      }
      refreshView(created);
      return { created };
    });
  }
  function mirrorNameX(name) {
    if (/right/i.test(name)) return name.replace(/right/gi, "left");
    if (/left/i.test(name)) return name.replace(/left/gi, "right");
    if (/_r\b/i.test(name)) return name.replace(/_r\b/i, "_l");
    if (/_l\b/i.test(name)) return name.replace(/_l\b/i, "_r");
    return `${name}_mirrored`;
  }

  // src/geometry/biped.ts
  function scaffoldBiped(opts) {
    requireProject();
    const s = opts.scale ?? 1;
    const prefix = opts.name_prefix ?? "";
    const texSize = opts.texture_size ?? 64;
    const label = `scaffold_biped scale=${s}`;
    const host = getHost();
    return host.undo.run({ outliner: true, elements: [], textures: [], bitmap: true }, label, (track) => {
      const skin = host.textures.ensure({
        name: `${prefix || ""}skin`,
        width: texSize,
        height: texSize,
        fill: "#8a8a8a"
      });
      track.addTextures([skin]);
      skin.edit((ctx, canvas) => {
        ctx.fillStyle = "#6e6e6e";
        ctx.fillRect(0, Math.floor(canvas.height / 2), canvas.width, Math.ceil(canvas.height / 2));
        ctx.fillStyle = "#9a9a9a";
        ctx.fillRect(0, 0, canvas.width, Math.floor(canvas.height / 2));
      }, "scaffold base shade");
      const created = [];
      const push = (el, type) => {
        const row = { uuid: el.uuid, name: el.name, type };
        created.push(row);
        track.addElements([row]);
      };
      const root = bone(`${prefix}root`, [0, 0, 0], "root");
      push(root, "group");
      const body = bone(`${prefix}body`, [0, 24 * s, 0], root);
      push(body, "group");
      push(cubeOn(`${prefix}body_cube`, body, [-4 * s, 12 * s, -2 * s], [8 * s, 12 * s, 4 * s], [0, 24 * s, 0], skin.uuid), "cube");
      const head = bone(`${prefix}head`, [0, 24 * s, 0], body);
      push(head, "group");
      push(cubeOn(`${prefix}head_cube`, head, [-4 * s, 24 * s, -4 * s], [8 * s, 8 * s, 8 * s], [0, 24 * s, 0], skin.uuid), "cube");
      const armR = bone(`${prefix}arm_right`, [-6 * s, 22 * s, 0], body);
      const armL = bone(`${prefix}arm_left`, [6 * s, 22 * s, 0], body);
      push(armR, "group");
      push(armL, "group");
      push(cubeOn(`${prefix}arm_right_cube`, armR, [-8 * s, 12 * s, -2 * s], [4 * s, 12 * s, 4 * s], [-6 * s, 22 * s, 0], skin.uuid), "cube");
      push(cubeOn(`${prefix}arm_left_cube`, armL, [4 * s, 12 * s, -2 * s], [4 * s, 12 * s, 4 * s], [6 * s, 22 * s, 0], skin.uuid), "cube");
      const legR = bone(`${prefix}leg_right`, [-2 * s, 12 * s, 0], body);
      const legL = bone(`${prefix}leg_left`, [2 * s, 12 * s, 0], body);
      push(legR, "group");
      push(legL, "group");
      push(cubeOn(`${prefix}leg_right_cube`, legR, [-4 * s, 0, -2 * s], [4 * s, 12 * s, 4 * s], [-2 * s, 12 * s, 0], skin.uuid), "cube");
      push(cubeOn(`${prefix}leg_left_cube`, legL, [0, 0, -2 * s], [4 * s, 12 * s, 4 * s], [2 * s, 12 * s, 0], skin.uuid), "cube");
      if (opts.include_outer_layers) {
        push(cubeOn(`${prefix}hat`, head, [-4.5 * s, 23.5 * s, -4.5 * s], [9 * s, 9 * s, 9 * s], [0, 24 * s, 0], skin.uuid, 0.25 * s), "cube");
      }
      refreshView(created);
      const check = runCheckModel();
      return { ok: true, undo_label: label, created, check };
    });
  }
  function bone(name, origin, parent) {
    const g = new Group({ name, origin: [...origin], rotation: [0, 0, 0] }).init().addTo(parent);
    g.createUniqueName?.();
    return g;
  }
  function cubeOn(name, parent, from, size, origin, textureUuid, inflate = 0) {
    const to = [from[0] + size[0], from[1] + size[1], from[2] + size[2]];
    const c = new Cube({
      name,
      from: [...from],
      to,
      origin: [...origin],
      inflate,
      autouv: 1,
      box_uv: true
    }).init().addTo(parent);
    c.mapAutoUV?.();
    getHost().textures.find(textureUuid)?.applyToCube(c.uuid, true);
    return c;
  }

  // src/texture/ensure.ts
  function ensureTexture(opts) {
    requireProject();
    const host = getHost();
    const width = opts.width ?? 64;
    const height = opts.height ?? 64;
    const name = opts.name ?? "texture";
    const fill = opts.fill ?? "#808080";
    const existing = host.textures.find(name);
    if (existing) {
      return {
        uuid: existing.uuid,
        name: existing.name,
        width: existing.width,
        height: existing.height
      };
    }
    return host.undo.run({ textures: [], bitmap: true }, `ensure_texture ${name}`, (track) => {
      const tex = host.textures.ensure({ name, width, height, fill });
      track.addTextures([tex]);
      host.canvas.updateAll();
      return {
        uuid: tex.uuid,
        name: tex.name,
        width: tex.width,
        height: tex.height
      };
    });
  }

  // src/paint/face-feature.ts
  function autoUvCubes(opts) {
    requireProject();
    const list = opts.cubes && opts.cubes.length > 0 ? opts.cubes.map((n) => requireCube(n)) : [...Cube.all];
    if (list.length === 0) {
      throw new CommandError("E_NOT_FOUND", "No cubes to UV.");
    }
    const mode = opts.mode ?? "box";
    const host = getHost();
    return host.undo.run({ elements: list, uv_only: true }, "auto_uv_cubes", () => {
      const updated = [];
      for (const cube of list) {
        cube.box_uv = mode === "box";
        cube.autouv = 1;
        cube.mapAutoUV?.();
        updated.push(cube.uuid);
      }
      refreshView(list.map((c) => ({ uuid: c.uuid, name: c.name })));
      return { ok: true, undo_label: "auto_uv_cubes", updated };
    });
  }
  function paintFaceFeature(opts) {
    requireProject();
    const cube = requireCube(opts.cube);
    const face = cube.faces?.[opts.face];
    if (!face) {
      throw new CommandError("E_INVALID_PARAM", `Face not found: ${opts.face}`);
    }
    const host = getHost();
    const tex = (opts.texture ? host.textures.find(opts.texture) : void 0) ?? host.textures.defaultOrFirst();
    if (!tex) throw new CommandError("E_NOT_FOUND", "No texture available");
    const uv = face.uv ?? [0, 0, 16, 16];
    const originX = Math.min(uv[0], uv[2]);
    const originY = Math.min(uv[1], uv[3]);
    return host.undo.run(
      { textures: [], bitmap: true, uv_only: true },
      "paint_face_feature",
      (track) => {
        track.addTextures([tex]);
        tex.applyToCube(cube.uuid, [opts.face]);
        tex.edit((ctx) => {
          const x = originX + opts.x;
          const y = originY + opts.y;
          ctx.fillStyle = opts.color;
          if (opts.feature === "fill") {
            ctx.fillRect(
              originX,
              originY,
              Math.abs(uv[2] - uv[0]),
              Math.abs(uv[3] - uv[1])
            );
          } else if (opts.feature === "rect") {
            ctx.fillRect(x, y, opts.width, opts.height);
          } else {
            ctx.beginPath();
            ctx.ellipse(
              x + opts.width / 2,
              y + opts.height / 2,
              opts.width / 2,
              opts.height / 2,
              0,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        }, "paint_face_feature");
        refreshView([{ uuid: cube.uuid, name: cube.name }]);
        return { ok: true, undo_label: "paint_face_feature" };
      }
    );
  }

  // src/geometry/mirror.ts
  function mirrorElements(opts) {
    requireProject();
    const axis = opts.axis ?? "x";
    const pivot = opts.pivot ?? 0;
    const axisIndex = axis === "x" ? 0 : axis === "y" ? 1 : 2;
    const label = `mirror_elements ${axis}`;
    const sources = opts.names.map((n) => {
      const el = findElement(n);
      if (!el) throw new CommandError("E_NOT_FOUND", `Element not found: ${n}`);
      return el;
    });
    const host = getHost();
    return host.undo.run({ outliner: true, elements: [] }, label, (track) => {
      const created = [];
      for (const el of sources) {
        if (isCube(el)) {
          const c = el;
          const from = [...c.from];
          const to = [...c.to];
          from[axisIndex] = pivot * 2 - from[axisIndex];
          to[axisIndex] = pivot * 2 - to[axisIndex];
          const lo = from.map((v, i) => Math.min(v, to[i]));
          const hi = from.map((v, i) => Math.max(v, to[i]));
          const name = opts.rename === false ? `${c.name}_mirrored` : smartRename(c.name);
          const origin = [...c.origin];
          origin[axisIndex] = pivot * 2 - origin[axisIndex];
          const parent = !c.parent || c.parent === "root" ? "root" : typeof c.parent === "string" ? "root" : c.parent;
          const neo = new Cube({
            name,
            from: lo,
            to: hi,
            origin,
            autouv: 1,
            box_uv: true
          }).init().addTo(parent);
          neo.mapAutoUV?.();
          host.textures.defaultOrFirst()?.applyToCube(neo.uuid, true);
          const row = { uuid: neo.uuid, name: neo.name, type: "cube" };
          created.push(row);
          track.addElements([row]);
        } else {
          const g = el;
          const origin = [...g.origin];
          origin[axisIndex] = pivot * 2 - origin[axisIndex];
          const name = opts.rename === false ? `${g.name}_mirrored` : smartRename(g.name);
          const parent = !g.parent || g.parent === "root" ? "root" : typeof g.parent === "string" ? "root" : g.parent;
          const neo = new Group({ name, origin, rotation: [0, 0, 0] }).init().addTo(parent);
          neo.createUniqueName?.();
          const row = { uuid: neo.uuid, name: neo.name, type: "group" };
          created.push(row);
          track.addElements([row]);
        }
      }
      refreshView(created);
      return { ok: true, undo_label: label, created };
    });
  }
  function isCube(el) {
    return typeof el.from !== "undefined" && typeof el.to !== "undefined";
  }
  function smartRename(name) {
    if (/right/i.test(name)) return name.replace(/right/gi, "left");
    if (/left/i.test(name)) return name.replace(/left/gi, "right");
    if (/_r\b/i.test(name)) return name.replace(/_r\b/i, "_l");
    if (/_l\b/i.test(name)) return name.replace(/_l\b/i, "_r");
    return `${name}_mirrored`;
  }

  // src/commands/scope-export.ts
  function proposeScopedDirectory(session2, path) {
    const ok = typeof window !== "undefined" && window.confirm(
      `Allow MCP file access for this session?

${path}

Only this folder will be writable/readable by AI tools.`
    );
    if (!ok) {
      throw new CommandError("E_SCOPE_DENIED", "User denied scoped directory access.");
    }
    session2.scopedDirectory = path;
    return { scoped_directory: path, confirmed: true };
  }
  function exportModel(session2, opts) {
    requireProject();
    if (!session2.scopedDirectory) {
      throw new CommandError(
        "E_SCOPE_DENIED",
        "Call propose_scoped_directory first and get user approval."
      );
    }
    const root = session2.scopedDirectory.replace(/\\/g, "/");
    const target = opts.path.replace(/\\/g, "/");
    if (!target.startsWith(root)) {
      throw new CommandError(
        "E_SCOPE_DENIED",
        `Export path must be inside scoped directory: ${root}`
      );
    }
    const codec = window.Codecs;
    if (codec) {
    }
    const payload = {
      meta: { format: Format?.id, name: Project?.name },
      note: "Full codec export depends on format plugins; project metadata recorded.",
      overwrite: opts.overwrite === true,
      path: target
    };
    const fs = window.require?.("fs");
    if (!fs?.writeFileSync) {
      throw new CommandError(
        "E_BLOCKBENCH_ERROR",
        "Filesystem not available (use Blockbench desktop app)."
      );
    }
    if (fs.existsSync?.(target) && opts.overwrite !== true) {
      throw new CommandError("E_SCOPE_DENIED", "File exists; pass overwrite:true");
    }
    fs.writeFileSync(target, JSON.stringify(payload, null, 2));
    return { path: target };
  }

  // src/bb/undo.ts
  function withUndo(aspects, label, fn) {
    return getHost().undo.run(aspects, label, (track) => {
      if (fn.length >= 1) return fn(track);
      return fn();
    });
  }

  // src/commands/animation.ts
  function upsertAnimation(opts) {
    requireProject();
    const AnimationApi = bbAnimation();
    if (!AnimationApi) {
      throw new CommandError(
        "E_UNSUPPORTED_FORMAT",
        "Animations are not available in this format/plugin set."
      );
    }
    const existing = AnimationApi.all.find((a) => a.name === opts.name);
    if (existing && opts.replace !== true) {
      throw new CommandError(
        "E_INVALID_PARAM",
        `Animation "${opts.name}" exists; pass replace:true`
      );
    }
    return withUndo({ animations: true }, `upsert_animation ${opts.name}`, () => {
      if (existing && opts.replace) {
        const idx = AnimationApi.all.indexOf(existing);
        if (idx >= 0) AnimationApi.all.splice(idx, 1);
      }
      const AnimCtor = AnimationApi;
      if (typeof AnimCtor.new !== "function") {
        const rec = {
          name: opts.name,
          length: opts.length,
          loop: opts.loop ?? "loop",
          bones: opts.bones ?? {}
        };
        AnimationApi.all.push(rec);
        return {
          ok: true,
          undo_label: `upsert_animation ${opts.name}`,
          name: opts.name
        };
      }
      const anim = new AnimCtor({
        name: opts.name,
        length: opts.length,
        loop: opts.loop ?? "loop"
      });
      anim.add?.(false);
      anim.mcp_bones = opts.bones ?? {};
      return {
        ok: true,
        undo_label: `upsert_animation ${opts.name}`,
        name: opts.name
      };
    });
  }

  // src/dispatch.ts
  async function dispatchCommand(session2, command, params) {
    try {
      switch (command) {
        case "get_project_summary":
          return buildProjectSummary();
        case "check_model":
          return runCheckModel();
        case "capture_views":
          return await captureViews(params ?? {});
        case "get_guide":
          return resolveGuide(
            params?.topic
          );
        case "create_project": {
          const p = params;
          const r = createProject(p);
          return { ok: true, undo_label: `create_project ${p.format}`, ...r };
        }
        case "apply_geometry_batch":
          return applyGeometryBatch(params ?? {});
        case "create_limb": {
          const r = createLimb(params ?? {});
          return { ok: true, undo_label: "create_limb", ...r };
        }
        case "scaffold_biped":
          return scaffoldBiped(params ?? {});
        case "ensure_texture": {
          const r = ensureTexture(params ?? {});
          return { ok: true, undo_label: "ensure_texture", created: [r] };
        }
        case "auto_uv_cubes":
          return autoUvCubes(params ?? {});
        case "mirror_elements":
          return mirrorElements(params ?? {});
        case "paint_face_feature":
          return paintFaceFeature(params ?? {});
        case "upsert_animation":
          return upsertAnimation(params ?? {});
        case "propose_scoped_directory":
          return proposeScopedDirectory(
            session2,
            params.path
          );
        case "export_model":
          return exportModel(session2, params ?? {});
        default:
          requireProject();
          throw Object.assign(new Error(`Unsupported command: ${command}`), {
            code: "E_UNSUPPORTED_COMMAND"
          });
      }
    } catch (err) {
      const payload = toErrorPayload(err);
      throw Object.assign(new Error(payload.message), { payload });
    }
  }

  // src/mcp/rpc.ts
  function envelope(ok, summary, result, error) {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({ summary, ok, result, error }, null, 2)
        }
      ],
      ...ok ? {} : { isError: true }
    };
  }
  function attachImages(base, result) {
    if (!result || typeof result !== "object") return base;
    const views = result.views;
    if (!Array.isArray(views)) return base;
    const images = [];
    for (const v of views) {
      if (!v || typeof v !== "object") continue;
      const dataUrl = v.data_url;
      if (!dataUrl?.startsWith("data:")) continue;
      const m = /^data:([^;]+);base64,(.+)$/.exec(dataUrl);
      if (!m) continue;
      images.push({ type: "image", data: m[2], mimeType: m[1] });
    }
    if (!images.length) return base;
    return { ...base, content: [...base.content, ...images] };
  }
  function toolInputSchema(spec) {
    try {
      return zodToJsonSchema(spec.params, {
        $refStrategy: "none",
        target: "jsonSchema7"
      });
    } catch {
      return { type: "object", properties: {} };
    }
  }
  function listTools() {
    const tools = [
      {
        name: "health",
        description: "Plugin MCP status: listening, Blockbench version, current format.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false }
      }
    ];
    for (const [name, spec] of Object.entries(COMMAND_SPECS)) {
      tools.push({
        name,
        description: spec.description,
        inputSchema: toolInputSchema(spec)
      });
    }
    return { tools };
  }
  async function callTool(session2, name, args) {
    if (name === "health") {
      return envelope(true, "Plugin MCP running", {
        protocol_version: PROTOCOL_VERSION,
        plugin_version: PLUGIN_VERSION,
        blockbench_version: bbBlockbench().version ?? "unknown",
        format: currentFormatId() ?? null,
        mode: "in-process"
      });
    }
    const spec = COMMAND_SPECS[name];
    if (!spec) {
      return envelope(false, `Unknown tool: ${name}`, void 0, {
        code: "E_UNSUPPORTED_COMMAND",
        message: `Unknown tool: ${name}`
      });
    }
    const parsed = spec.params.safeParse(args ?? {});
    if (!parsed.success) {
      return envelope(false, "Invalid parameters", void 0, {
        code: "E_INVALID_PARAM",
        message: parsed.error.message,
        details: parsed.error.flatten()
      });
    }
    if (name === "get_guide") {
      const topic = parsed.data.topic;
      const guide = resolveGuide(topic);
      return envelope(true, `Guide: ${guide.topic}`, guide);
    }
    try {
      const result = await dispatchCommand(session2, name, parsed.data);
      const base = envelope(true, `OK: ${name}`, result);
      return name === "capture_views" ? attachImages(base, result) : base;
    } catch (err) {
      const error = err && typeof err === "object" && "payload" in err ? err.payload : toErrorPayload(err);
      return envelope(false, error.message, void 0, error);
    }
  }
  async function handleMcpJsonRpc(session2, message) {
    if (Array.isArray(message)) {
      const parts = [];
      for (const m of message) {
        const r = await handleOne(session2, m);
        if (r.body) parts.push(JSON.parse(r.body));
      }
      return { status: 200, body: JSON.stringify(parts) };
    }
    return handleOne(session2, message);
  }
  async function handleOne(session2, message) {
    if (!message || typeof message !== "object") {
      return {
        status: 400,
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: null,
          error: { code: -32700, message: "Parse error" }
        })
      };
    }
    const msg = message;
    const hasId = Object.prototype.hasOwnProperty.call(msg, "id");
    const id = hasId ? msg.id : null;
    const method = msg.method;
    if (!method) {
      return {
        status: 400,
        body: JSON.stringify({
          jsonrpc: "2.0",
          id,
          error: { code: -32600, message: "Invalid Request" }
        })
      };
    }
    if (!hasId && method.startsWith("notifications/")) {
      return { status: 202 };
    }
    if (method === "initialize") {
      return {
        status: 200,
        sessionId: `bbmcp-${Date.now()}`,
        body: JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: { tools: {} },
            serverInfo: {
              name: "blockbench-mcp",
              version: PLUGIN_VERSION
            }
          }
        })
      };
    }
    if (method === "ping") {
      return {
        status: 200,
        body: JSON.stringify({ jsonrpc: "2.0", id, result: {} })
      };
    }
    if (method === "tools/list") {
      return {
        status: 200,
        body: JSON.stringify({ jsonrpc: "2.0", id, result: listTools() })
      };
    }
    if (method === "tools/call") {
      const params = msg.params ?? {};
      const name = params.name ?? "";
      const result = await callTool(session2, name, params.arguments);
      return {
        status: 200,
        body: JSON.stringify({ jsonrpc: "2.0", id, result })
      };
    }
    return {
      status: 200,
      body: JSON.stringify({
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: `Method not found: ${method}` }
      })
    };
  }

  // src/mcp/server.ts
  function authorized(req, secret) {
    const auth = req.headers.authorization ?? "";
    if (auth.toLowerCase().startsWith("bearer ") && auth.slice(7).trim() === secret) {
      return true;
    }
    const alt = req.headers["x-mcp-secret"];
    return alt === secret;
  }
  function pathOnly(path) {
    const q = path.indexOf("?");
    return q === -1 ? path : path.slice(0, q);
  }
  function startMcpHttp(config, session2) {
    const net = loadNet();
    let server = null;
    let listening = false;
    const onRequest = async (req, socket) => {
      const path = pathOnly(req.path);
      if (req.method === "OPTIONS") {
        writeHttp(socket, 204, void 0);
        return;
      }
      if (path === "/" || path === "/health") {
        writeHttp(
          socket,
          200,
          JSON.stringify({
            ok: true,
            service: "blockbench-mcp",
            mcp: `http://127.0.0.1:${config.port}/mcp`
          })
        );
        return;
      }
      if (path !== "/mcp") {
        writeHttp(socket, 404, JSON.stringify({ error: "not found" }));
        return;
      }
      if (req.method === "GET") {
        writeHttp(
          socket,
          405,
          JSON.stringify({
            error: "Use POST /mcp (Streamable HTTP JSON). SSE stream not required."
          })
        );
        return;
      }
      if (req.method === "DELETE") {
        writeHttp(socket, 200, JSON.stringify({ ok: true }));
        return;
      }
      if (req.method !== "POST") {
        writeHttp(socket, 405, JSON.stringify({ error: "POST only" }));
        return;
      }
      if (!authorized(req, config.secret)) {
        writeHttp(socket, 401, JSON.stringify({ error: "unauthorized" }));
        return;
      }
      let parsed;
      try {
        parsed = JSON.parse(req.body || "{}");
      } catch {
        writeHttp(
          socket,
          400,
          JSON.stringify({
            jsonrpc: "2.0",
            id: null,
            error: { code: -32700, message: "Parse error" }
          })
        );
        return;
      }
      const result = await handleMcpJsonRpc(session2, parsed);
      const extra = {};
      if (result.sessionId) {
        extra["Mcp-Session-Id"] = result.sessionId;
      }
      writeHttp(socket, result.status, result.body, extra);
    };
    server = attachHttpServer(net, onRequest);
    server.on("error", ((err) => {
      listening = false;
      bbBlockbench().showQuickMessage?.(
        `MCP server error: ${err?.message ?? "unknown"}`,
        4e3
      );
    }));
    server.listen(config.port, "127.0.0.1", () => {
      listening = true;
      bbBlockbench().showQuickMessage?.(
        `MCP ready \u2192 http://127.0.0.1:${config.port}/mcp`,
        3500
      );
    });
    return {
      port: config.port,
      running: () => listening && !!server,
      stop: () => {
        listening = false;
        server?.close();
        server = null;
      }
    };
  }

  // src/mcp/actions.ts
  var toggle = null;
  function registerMcpActions(options) {
    const refresh = () => {
      const h = options.getHandle();
      const running = !!h?.running();
      toggle?.setName?.(
        running ? `Stop MCP Server (:${h?.port})` : "Start MCP Server"
      );
    };
    toggle = new Action("blockbench_mcp_toggle", {
      name: "Start MCP Server",
      icon: "smart_toy",
      category: "tools",
      click: () => {
        const h = options.getHandle();
        if (h?.running()) options.stop();
        else options.start();
        refresh();
      }
    });
    refresh();
    return () => {
      toggle?.delete();
      toggle = null;
    };
  }

  // src/main.ts
  var PROMPT_FLAG = "blockbench_mcp_prompt_start";
  var mcp = null;
  var disposeActions = null;
  var session = createSession();
  function startServer() {
    if (mcp?.running()) return;
    mcp?.stop();
    const config = readPluginConfig();
    try {
      mcp = startMcpHttp(config, session);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      bbBlockbench().showQuickMessage?.(`MCP start failed: ${message}`, 5e3);
      mcp = null;
    }
  }
  function stopServer() {
    mcp?.stop();
    mcp = null;
    bbBlockbench().showQuickMessage?.("MCP server stopped", 1500);
  }
  function promptStartAfterInstall() {
    const bb = bbBlockbench();
    const message = "Start the local MCP server now?\n\nBlockbench will ask for network permission \u2014 choose Always allow.\nDefault: http://127.0.0.1:39741/mcp";
    if (typeof bb.showMessageBox === "function") {
      bb.showMessageBox(
        {
          title: "Blockbench MCP",
          message,
          buttons: ["Start MCP", "Later"],
          confirm: 0,
          cancel: 1
        },
        (button) => {
          if (button === 0) startServer();
          else {
            bb.showQuickMessage?.(
              "MCP not started. Use Tools \u2192 Start MCP Server when ready.",
              4e3
            );
          }
        }
      );
      return;
    }
    const ok = typeof window !== "undefined" && window.confirm("Start Blockbench MCP server now? (needs network permission)");
    if (ok) startServer();
  }
  function schedulePostLoadStart(freshInstall) {
    const config = readPluginConfig();
    const delayMs = freshInstall ? 400 : 80;
    setTimeout(() => {
      if (freshInstall) {
        promptStartAfterInstall();
        return;
      }
      if (config.autostart) startServer();
    }, delayMs);
  }
  bbPlugin().register("blockbench_mcp", {
    title: "Blockbench MCP",
    author: "SwagRee",
    description: "In-process MCP for Minecraft modeling. Install the plugin, start the server, point Cursor at http://127.0.0.1:<port>/mcp.",
    icon: "smart_toy",
    version: PLUGIN_VERSION,
    variant: "desktop",
    min_version: MIN_BLOCKBENCH_VERSION,
    oninstall() {
      try {
        localStorage.setItem(PROMPT_FLAG, "1");
      } catch {
      }
    },
    onload() {
      registerPluginSettings();
      disposeActions = registerMcpActions({
        getHandle: () => mcp,
        start: startServer,
        stop: stopServer
      });
      let freshInstall = false;
      try {
        freshInstall = localStorage.getItem(PROMPT_FLAG) === "1";
        if (freshInstall) localStorage.removeItem(PROMPT_FLAG);
      } catch {
        freshInstall = false;
      }
      schedulePostLoadStart(freshInstall);
      bbBlockbench().showQuickMessage?.(
        `Blockbench MCP ${PLUGIN_VERSION} (BB\u2265${MIN_BLOCKBENCH_VERSION})`,
        2500
      );
    },
    onunload() {
      disposeActions?.();
      disposeActions = null;
      stopServer();
      revokeScope(session);
    }
  });
})();
