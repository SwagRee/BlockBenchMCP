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
      const base642 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base642));
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
    /** Loopback HTTP MCP port (plugin hosts `/mcp`). */
    mcpPort: 39741,
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

  // ../shared/dist/contracts.js
  var projectSummarySchema = external_exports.object({
    format: external_exports.string(),
    name: external_exports.string().optional(),
    geometry_name: external_exports.string().optional(),
    texture_width: external_exports.number().int().positive().optional(),
    texture_height: external_exports.number().int().positive().optional(),
    /** Resolved UV strategy for this project (box vs per-face). */
    uv_mode: external_exports.enum(["box", "face"]).optional(),
    capabilities: capabilitiesSchema.optional(),
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
  var checkFaceTargetSchema = external_exports.object({
    cube: external_exports.string().min(1),
    face: external_exports.enum(["north", "south", "east", "west", "up", "down"])
  }).strict();
  var checkModelParamsSchema = external_exports.object({
    allowed_uv_overlaps: external_exports.array(external_exports.object({ a: checkFaceTargetSchema, b: checkFaceTargetSchema }).strict()).max(256).optional()
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
    visible_face: external_exports.enum(VIEW_PRESETS).nullable(),
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
    plugin_version: external_exports.string(),
    blockbench_version: external_exports.string(),
    format: external_exports.string().nullable(),
    uv_mode: external_exports.enum(["box", "face"]).optional(),
    capabilities: capabilitiesSchema.optional(),
    mode: external_exports.literal("in-process")
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
    /** Default `auto` = detect from Project/Format (java_block → face). */
    mode: external_exports.enum(["box", "face", "auto"]).optional()
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
  var animationKeySchema = external_exports.object({
    time: external_exports.number().nonnegative(),
    value: vec3Schema,
    interpolation: external_exports.enum(["linear", "catmullrom", "step"]).optional()
  }).strict();
  var upsertAnimationParamsSchema = external_exports.object({
    name: external_exports.string().min(1),
    length: external_exports.number().positive(),
    loop: external_exports.enum(["once", "hold", "loop"]).optional(),
    bones: external_exports.record(external_exports.object({
      rotation: external_exports.array(animationKeySchema).optional(),
      position: external_exports.array(animationKeySchema).optional(),
      scale: external_exports.array(animationKeySchema).optional()
    }).strict()).optional(),
    replace: external_exports.boolean().optional()
  }).strict();

  // ../shared/dist/contracts-texture.js
  var faceEnum = external_exports.enum(["north", "south", "east", "west", "up", "down"]);
  var packBoxUvParamsSchema = external_exports.object({
    cubes: external_exports.array(external_exports.string().min(1)).optional(),
    texture: external_exports.string().optional(),
    padding: external_exports.number().int().nonnegative().max(8).optional(),
    /** Grow Project.texture_* and bitmap if packed extent overflows. */
    auto_resize: external_exports.boolean().optional(),
    /**
     * UV strategy. Default `auto` reads Project/Format/cubes
     * (`java_block` → per-face, Bedrock-style → box).
     */
    mode: external_exports.enum(["box", "face", "auto"]).optional(),
    /** When packing a cube subset, keep clear of islands belonging to other cubes. */
    preserve_others: external_exports.boolean().optional(),
    /** Round an automatically grown atlas up to powers of two (default true). */
    power_of_two: external_exports.boolean().optional(),
    max_size: external_exports.number().int().positive().max(4096).optional()
  }).strict();
  var getUvLayoutParamsSchema = external_exports.object({
    cubes: external_exports.array(external_exports.string().min(1)).max(256).optional(),
    /** Include pairwise overlap records (default true). */
    include_overlaps: external_exports.boolean().optional(),
    /** Explicit face pairs whose shared texels are intentional. */
    allowed_overlaps: external_exports.array(external_exports.object({
      a: faceEnum,
      b: faceEnum,
      cube_a: external_exports.string().min(1),
      cube_b: external_exports.string().min(1)
    }).strict()).max(256).optional()
  }).strict();
  var getUvMapParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    cubes: external_exports.array(external_exports.string().min(1)).max(256).optional(),
    max_edge: external_exports.number().int().positive().max(1024).optional(),
    labels: external_exports.boolean().optional()
  }).strict();
  var resizeTextureParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    width: external_exports.number().int().positive().max(4096),
    height: external_exports.number().int().positive().max(4096),
    /** Scale every cube UV with the bitmap (default true). */
    rescale_uvs: external_exports.boolean().optional()
  }).strict();
  var shadeModelBaseParamsSchema = external_exports.object({
    cubes: external_exports.array(external_exports.string().min(1)).optional(),
    texture: external_exports.string().optional(),
    base: external_exports.string().min(1).optional(),
    /** First regex match wins: [{ match: "head", color: "#C68642" }, ...] */
    regions: external_exports.array(external_exports.object({
      match: external_exports.string().min(1),
      color: external_exports.string().min(1)
    }).strict()).optional(),
    top_light: external_exports.number().min(0).max(1).optional(),
    bottom_dark: external_exports.number().min(0).max(1).optional(),
    noise: external_exports.number().min(0).max(1).optional(),
    blur: external_exports.number().min(0).max(1).optional(),
    edge_darken: external_exports.number().min(0).max(1).optional(),
    /** Reproducible pseudo-random mottle seed. */
    seed: external_exports.number().int().optional(),
    /** Crisp disables gradients and blur for strict pixel art. */
    crisp: external_exports.boolean().optional()
  }).strict();
  var paintOpSchema = external_exports.object({
    type: external_exports.enum(["fill", "rect", "ellipse", "line"]),
    x: external_exports.number().optional(),
    y: external_exports.number().optional(),
    width: external_exports.number().positive().optional(),
    height: external_exports.number().positive().optional(),
    x2: external_exports.number().optional(),
    y2: external_exports.number().optional(),
    color: external_exports.string().min(1)
  }).strict();
  var pixelPointSchema = external_exports.object({
    x: external_exports.number().int().nonnegative(),
    y: external_exports.number().int().nonnegative()
  }).strict();
  var pixelStrokeSchema = external_exports.object({
    cube: external_exports.string().min(1),
    face: faceEnum,
    color: external_exports.string().min(1),
    /** Face-local pixel path. Consecutive points are joined deterministically. */
    points: external_exports.array(pixelPointSchema).min(1).max(4096),
    size: external_exports.number().int().positive().max(32).optional(),
    shape: external_exports.enum(["square", "circle"]).optional()
  }).strict();
  var paintPixelBatchParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    strokes: external_exports.array(pixelStrokeSchema).min(1).max(256),
    /** Keep every brush stamp inside its target face (default true). */
    clip_to_face: external_exports.boolean().optional()
  }).strict().superRefine((value, ctx) => {
    const points = value.strokes.reduce((sum, stroke) => sum + stroke.points.length, 0);
    if (points > 16384) {
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        path: ["strokes"],
        message: "A batch may contain at most 16384 brush points"
      });
    }
  });
  var paintFaceFeaturesParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    faces: external_exports.array(external_exports.object({
      cube: external_exports.string().min(1),
      face: faceEnum,
      ops: external_exports.array(paintOpSchema).min(1)
    }).strict()).min(1)
  }).strict();
  var getTextureParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    /** Longest edge cap for returned image (default 256). */
    max_edge: external_exports.number().int().positive().max(1024).optional()
  }).strict();
  var faceTargetSchema = external_exports.object({
    cube: external_exports.string().min(1),
    face: faceEnum
  }).strict();
  var paintFaceGridParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    expected_revision: external_exports.string().min(1).optional(),
    faces: external_exports.array(faceTargetSchema.extend({
      /** One Unicode code point per face-local texel. */
      rows: external_exports.array(external_exports.string()).min(1).max(4096)
    })).min(1).max(256),
    /** Symbol to CSS color; null means exact transparent erase. */
    palette: external_exports.record(external_exports.string(), external_exports.string().min(1).nullable())
  }).strict();
  var getFaceGridParamsSchema = faceTargetSchema.extend({ texture: external_exports.string().optional() }).strict();
  var editTexturePixelsParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    expected_revision: external_exports.string().min(1).optional(),
    face: faceTargetSchema.optional(),
    pixels: external_exports.array(external_exports.object({
      x: external_exports.number().int().nonnegative(),
      y: external_exports.number().int().nonnegative(),
      color: external_exports.string().min(1).nullable()
    }).strict()).min(1).max(16384)
  }).strict();
  var replaceTextureColorParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    expected_revision: external_exports.string().min(1).optional(),
    face: faceTargetSchema.optional(),
    from: external_exports.string().min(1),
    to: external_exports.string().min(1).nullable(),
    tolerance: external_exports.number().int().min(0).max(255).optional()
  }).strict();
  var copyFacePixelsParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    expected_revision: external_exports.string().min(1).optional(),
    source: faceTargetSchema,
    target: faceTargetSchema,
    flip_x: external_exports.boolean().optional(),
    flip_y: external_exports.boolean().optional(),
    rotation: external_exports.enum(["0", "90", "180", "270"]).optional()
  }).strict();
  var analyzeTexturePaletteParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    face: faceTargetSchema.optional(),
    max_colors: external_exports.number().int().positive().max(256).optional()
  }).strict();
  var getTextureRegionParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    face: faceTargetSchema.optional(),
    rect: external_exports.tuple([
      external_exports.number().int().nonnegative(),
      external_exports.number().int().nonnegative(),
      external_exports.number().int().positive(),
      external_exports.number().int().positive()
    ]).optional(),
    scale: external_exports.number().int().positive().max(64).optional(),
    grid: external_exports.boolean().optional(),
    checkerboard: external_exports.boolean().optional()
  }).strict().refine((value) => !(value.face && value.rect), {
    message: "Choose face or rect, not both"
  });
  var importTexturePngParamsSchema = external_exports.object({
    path: external_exports.string().min(1).regex(/\.png$/i, "path must end in .png"),
    texture: external_exports.string().optional(),
    name: external_exports.string().min(1).optional(),
    resize_project: external_exports.boolean().optional(),
    expected_revision: external_exports.string().min(1).optional()
  }).strict();
  var getTextureRevisionParamsSchema = external_exports.object({ texture: external_exports.string().optional() }).strict();
  var floodFillTextureParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    expected_revision: external_exports.string().min(1).optional(),
    face: faceTargetSchema.optional(),
    x: external_exports.number().int().nonnegative(),
    y: external_exports.number().int().nonnegative(),
    color: external_exports.string().min(1).nullable(),
    tolerance: external_exports.number().int().min(0).max(255).optional(),
    diagonal: external_exports.boolean().optional(),
    max_pixels: external_exports.number().int().positive().max(65536).optional()
  }).strict();
  var transformTextureRegionParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    expected_revision: external_exports.string().min(1).optional(),
    face: faceTargetSchema.optional(),
    rect: external_exports.tuple([
      external_exports.number().int().nonnegative(),
      external_exports.number().int().nonnegative(),
      external_exports.number().int().positive(),
      external_exports.number().int().positive()
    ]).optional(),
    operation: external_exports.enum([
      "flip_x",
      "flip_y",
      "rotate_180",
      "rotate_90",
      "rotate_270"
    ])
  }).strict().refine((value) => Boolean(value.face) !== Boolean(value.rect), {
    message: "Choose exactly one of face or rect"
  });
  var auditTextureQualityParamsSchema = external_exports.object({
    texture: external_exports.string().optional(),
    faces: external_exports.array(faceTargetSchema).max(256).optional(),
    palette_limit: external_exports.number().int().positive().max(256).optional(),
    min_base_ratio: external_exports.number().min(0).max(1).optional(),
    glass: external_exports.boolean().optional()
  }).strict();
  var exportTexturePngParamsSchema = external_exports.object({
    path: external_exports.string().min(1).regex(/\.png$/i, "path must end in .png"),
    texture: external_exports.string().optional(),
    overwrite: external_exports.boolean().optional()
  }).strict();

  // ../shared/dist/contracts-management.js
  var faceEnum2 = external_exports.enum(["north", "south", "east", "west", "up", "down"]);
  var getElementsParamsSchema = external_exports.object({ refs: external_exports.array(external_exports.string().min(1)).max(256).optional() }).strict();
  var elementUpdateSchema = external_exports.object({
    ref: external_exports.string().min(1),
    name: external_exports.string().min(1).optional(),
    parent: external_exports.string().min(1).optional(),
    from: vec3Schema.optional(),
    to: vec3Schema.optional(),
    origin: vec3Schema.optional(),
    rotation: vec3Schema.optional(),
    inflate: external_exports.number().optional(),
    visibility: external_exports.boolean().optional()
  }).strict();
  var updateElementsParamsSchema = external_exports.object({
    updates: external_exports.array(elementUpdateSchema).min(1).max(256),
    undo_label: external_exports.string().min(1).optional(),
    /** preserve keeps current UVs; auto remaps cubes whose dimensions changed. */
    uv_policy: external_exports.enum(["preserve", "auto"]).optional()
  }).strict();
  var transformElementsParamsSchema = external_exports.object({
    refs: external_exports.array(external_exports.string().min(1)).min(1).max(256),
    translate: vec3Schema.optional(),
    scale: vec3Schema.optional(),
    pivot: vec3Schema.optional(),
    rotate: vec3Schema.optional(),
    uv_policy: external_exports.enum(["preserve", "auto"]).optional(),
    undo_label: external_exports.string().min(1).optional()
  }).strict().refine((value) => value.translate || value.scale || value.rotate, {
    message: "Provide translate, scale, or rotate"
  });
  var arrayCubesParamsSchema = external_exports.object({
    sources: external_exports.array(external_exports.string().min(1)).min(1).max(64),
    count: external_exports.number().int().min(1).max(128),
    offset: vec3Schema,
    name_pattern: external_exports.string().min(1).optional(),
    uv_policy: external_exports.enum(["share", "auto"]).optional(),
    parent: external_exports.string().min(1).optional()
  }).strict();
  var measureModelParamsSchema = external_exports.object({ refs: external_exports.array(external_exports.string().min(1)).max(256).optional() }).strict();
  var auditSymmetryParamsSchema = external_exports.object({
    pairs: external_exports.array(external_exports.object({ left: external_exports.string().min(1), right: external_exports.string().min(1) }).strict()).min(1).max(128),
    axis: external_exports.enum(["x", "y", "z"]).optional(),
    pivot: external_exports.number().optional(),
    tolerance: external_exports.number().nonnegative().max(16).optional()
  }).strict();
  var setFaceUvParamsSchema = external_exports.object({
    entries: external_exports.array(external_exports.object({
      cube: external_exports.string().min(1),
      face: faceEnum2,
      uv: external_exports.tuple([external_exports.number(), external_exports.number(), external_exports.number(), external_exports.number()]),
      rotation: external_exports.union([
        external_exports.literal(0),
        external_exports.literal(90),
        external_exports.literal(180),
        external_exports.literal(270)
      ]).optional()
    }).strict()).min(1).max(1536)
  }).strict();
  var assignTextureParamsSchema = external_exports.object({
    texture: external_exports.string().min(1),
    cubes: external_exports.array(external_exports.string().min(1)).min(1).max(256),
    faces: external_exports.array(faceEnum2).min(1).optional()
  }).strict();
  var setProjectMetaParamsSchema = external_exports.object({
    name: external_exports.string().min(1).optional(),
    geometry_name: external_exports.string().min(1).optional(),
    texture_width: external_exports.number().int().positive().max(4096).optional(),
    texture_height: external_exports.number().int().positive().max(4096).optional()
  }).strict().refine((value) => Object.keys(value).length > 0, {
    message: "At least one project field is required"
  });
  var deleteAnimationParamsSchema = external_exports.object({ name: external_exports.string().min(1) }).strict();

  // ../shared/dist/contracts-advanced.js
  var faceTargetSchema2 = external_exports.object({
    cube: external_exports.string().min(1),
    face: external_exports.enum(["north", "south", "east", "west", "up", "down"])
  }).strict();
  var radialArrayCubesParamsSchema = external_exports.object({
    sources: external_exports.array(external_exports.string().min(1)).min(1).max(32),
    count: external_exports.number().int().min(2).max(128),
    axis: external_exports.enum(["x", "y", "z"]).optional(),
    pivot: vec3Schema,
    angle: external_exports.number().min(-360).max(360).optional(),
    rotate_cubes: external_exports.boolean().optional(),
    name_pattern: external_exports.string().min(1).optional(),
    uv_policy: external_exports.enum(["share", "auto"]).optional(),
    parent: external_exports.string().min(1).optional()
  }).strict();
  var duplicateHierarchyParamsSchema = external_exports.object({
    root: external_exports.string().min(1),
    name_suffix: external_exports.string().min(1).optional(),
    translate: vec3Schema.optional(),
    parent: external_exports.string().min(1).optional(),
    uv_policy: external_exports.enum(["share", "auto"]).optional()
  }).strict();
  var transformUvIslandsParamsSchema = external_exports.object({
    faces: external_exports.array(faceTargetSchema2).min(1).max(256),
    translate: external_exports.tuple([external_exports.number(), external_exports.number()]).optional(),
    scale: external_exports.tuple([external_exports.number().positive(), external_exports.number().positive()]).optional(),
    pivot: external_exports.tuple([external_exports.number(), external_exports.number()]).optional(),
    rotate: external_exports.enum(["0", "90", "180", "270"]).optional(),
    clamp_to_texture: external_exports.boolean().optional()
  }).strict().refine((value) => value.translate || value.scale || value.rotate, {
    message: "Provide translate, scale, or rotate"
  });
  var auditMaterialSetParamsSchema = external_exports.object({
    channels: external_exports.object({
      base: external_exports.string().min(1),
      emissive: external_exports.string().min(1).optional(),
      normal: external_exports.string().min(1).optional(),
      specular: external_exports.string().min(1).optional()
    }).strict(),
    require_power_of_two: external_exports.boolean().optional(),
    naming_prefix: external_exports.string().min(1).optional()
  }).strict();
  var ensureMaterialSetParamsSchema = external_exports.object({
    prefix: external_exports.string().min(1),
    width: external_exports.number().int().positive().max(1024),
    height: external_exports.number().int().positive().max(1024),
    channels: external_exports.array(external_exports.enum(["base", "emissive", "normal", "specular"])).min(1).max(4),
    fills: external_exports.object({
      base: external_exports.string().min(1).optional(),
      emissive: external_exports.string().min(1).optional(),
      normal: external_exports.string().min(1).optional(),
      specular: external_exports.string().min(1).optional()
    }).strict().optional()
  }).strict();
  var inspectAnimationParamsSchema = external_exports.object({ name: external_exports.string().min(1) }).strict();
  var transformAnimationKeysParamsSchema = external_exports.object({
    name: external_exports.string().min(1),
    bones: external_exports.array(external_exports.string().min(1)).min(1).max(128).optional(),
    time_scale: external_exports.number().positive().max(100).optional(),
    time_offset: external_exports.number().min(-3600).max(3600).optional(),
    value_scale: vec3Schema.optional(),
    mirror_axis: external_exports.enum(["x", "y", "z"]).optional()
  }).strict().refine((value) => value.time_scale !== void 0 || value.time_offset !== void 0 || value.value_scale !== void 0 || value.mirror_axis !== void 0, { message: "Provide at least one key transform" });
  var analyzeViewSilhouetteParamsSchema = external_exports.object({
    views: external_exports.array(external_exports.enum(["iso", "north", "south", "east", "west", "up", "down"])).min(1).max(7).optional(),
    max_edge: external_exports.number().int().min(64).max(512).optional(),
    alpha_threshold: external_exports.number().int().min(0).max(255).optional(),
    luminance_threshold: external_exports.number().int().min(0).max(255).optional()
  }).strict();

  // ../shared/dist/guides.js
  var GUIDE_MODELING = `
# Modeling (Minecraft / Blockbench 5.1+)

## Mandatory workflow (do not skip)
1. get_guide(modeling) then create_project(format).
2. Entities: scaffold_biped FIRST (correct pivots). Blocks: apply_geometry_batch.
3. check_model immediately. Fix every error before texturing.
4. Use measure_model instead of hand-calculating extents; it accounts for cube and parent rotations. Use transform_elements for relative edits, array_cubes/radial_array_cubes for bounded repetition, and duplicate_hierarchy for rig variants; audit_symmetry for explicit left/right pairs.
5. When cube dimensions change, choose uv_policy preserve or auto deliberately. Re-run get_uv_layout before painting. Use transform_uv_islands for intentional island-level layout edits.
6. Texturing: pack_box_uv \u2192 shade_model_base \u2192 paint_face_features. (scaffold_biped already packs in the project UV mode.)
7. capture_views only after check_model is clean (max_edge 256). Use analyze_view_silhouette for numeric multi-view bounds and small-preview coverage.

## UV mode (do not mix blindly)
- Read uv_mode from health / get_project_summary first.
- java_block \u2192 per-face (face). Bedrock / skin / geckolib-style \u2192 box.
- Geometry tools + pack_box_uv / auto_uv_cubes follow Project/Format; override only with mode box|face.
- Never force box UV on a java_block project (and vice versa) unless you mean to.

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

1. ensure_texture (64 entities / 16 blocks), then pack_box_uv. Subset packing preserves other islands by default; auto-resize uses power-of-two atlases.
2. get_uv_layout before painting. Require summary.out_of_bounds=0 and review every overlap; compare density across related faces.
3. get_uv_map to visually verify island placement, face orientation, flips, and rotation. transform_uv_islands can translate/scale/quarter-turn selected islands without repacking the atlas.
4. Optional fast base: shade_model_base(seed, crisp:true, noise:0, blur:0). For authored work, call get_texture_revision before a long edit and pass expected_revision to precision mutations so stale plans cannot overwrite newer paint.
5. Author exact face-sized grids with paint_face_grid; get_face_grid returns lossless RGBA plus the same snapshot revision for read-modify-write.
6. Use paint_face_features / paint_pixel_batch for accents, edit_texture_pixels for surgical RGBA edits, replace_texture_color for palette revisions, and copy_face_pixels for mirrored parts.
7. Use flood_fill_texture only with a face or a conservative max_pixels; use transform_texture_region for lossless flips/turns. Run analyze_texture_palette and audit_texture_quality (glass:true for transparent materials).
8. Prefer 4\u20138 intentional colors and a 60\u201380% stable material base. Inspect get_texture_region(face, scale:8+, grid:true), get_uv_map, and model views. Fix findings and re-check_model.
9. PNG import/export requires propose_scoped_directory and stays inside that user-approved folder. Use resize_texture when bitmap and UVs must scale together. ensure_material_set creates base/emissive/normal/specular sheets; audit_material_set checks their dimensions and naming before export.
`.trim();
  var GUIDE_ANIMATION = `
# Animation

1. Rig first (scaffold_biped / create_limb). Never keyframe loose cubes.
2. Idle: tiny body bob + head sway. Walk: opposite-phase limbs, few keys.
3. inspect_animation reads exact key data before revision. transform_animation_keys handles bounded retiming, value scale, and axis-aware mirroring.
4. upsert_animation(replace:true) for full replacement. Then check_model + capture_views.
`.trim();
  var GUIDE_JAVA_BLOCK = `
# java_block

- Per-face UV (uv_mode=face). Geometry + pack_box_uv use face packing, not box UV.
- Prefer geometry inside 0..16. One 16\xD716 (or packed) texture.
- apply_geometry_batch for multi-cube shapes in one undo.
- check_model before export.
`.trim();
  var GUIDE_GECKOLIB = `
# geckolib_model

- Requires GeckoLib plugin (capability geckolib).
- Typically box UV; scaffold_biped / pack_box_uv follow project mode.
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
    list_formats: {
      description: "List model formats currently registered in Blockbench, including plugin formats.",
      mutates: false,
      params: checkModelParamsSchema
    },
    get_project_summary: {
      description: "Compact outliner + counts. Prefer over screenshots for situational awareness.",
      mutates: false,
      params: external_exports.object({}).strict(),
      result: projectSummarySchema
    },
    get_elements: {
      description: "Read exact cube/group geometry, hierarchy, visibility, UV rectangles, rotations, and texture references.",
      mutates: false,
      params: getElementsParamsSchema
    },
    measure_model: {
      description: "Measure model or subtree bounds, size, center, cube count, and summed volume.",
      mutates: false,
      params: measureModelParamsSchema
    },
    audit_symmetry: {
      description: "Compare explicit left/right cube or group pairs across an axis and report coordinate error.",
      mutates: false,
      params: auditSymmetryParamsSchema
    },
    analyze_view_silhouette: {
      description: "Capture views and return deterministic silhouette bounds, coverage, and preview images for visual QA.",
      mutates: false,
      params: analyzeViewSilhouetteParamsSchema
    },
    list_textures: {
      description: "List project textures with UUID, name, and bitmap dimensions.",
      mutates: false,
      params: external_exports.object({}).strict()
    },
    list_animations: {
      description: "List project animations with name, length, and loop mode.",
      mutates: false,
      params: external_exports.object({}).strict()
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
        topic: external_exports.enum([
          "modeling",
          "texturing",
          "animation",
          "java_block",
          "geckolib"
        ]).optional()
      }).strict()
    },
    create_project: {
      description: "Create java_block or geckolib_model project (closes nothing silently \u2014 requires format).",
      mutates: true,
      params: createProjectParamsSchema
    },
    set_project_meta: {
      description: "Update project name, geometry identifier, or texture resolution in one undo.",
      mutates: true,
      params: setProjectMetaParamsSchema
    },
    apply_geometry_batch: {
      description: "Create/delete groups+cubes in ONE undo. All-or-nothing. Prefer for multi-part shapes.",
      mutates: true,
      params: applyGeometryBatchParamsSchema
    },
    update_elements: {
      description: "Batch rename, transform, resize, reparent, or show/hide existing cubes and groups in ONE undo.",
      mutates: true,
      params: updateElementsParamsSchema
    },
    transform_elements: {
      description: "Translate, scale, and rotate multiple cubes/groups around one pivot in a single undo.",
      mutates: true,
      params: transformElementsParamsSchema
    },
    array_cubes: {
      description: "Create a bounded linear array of cubes with shared or auto-remapped UVs in one undo.",
      mutates: true,
      params: arrayCubesParamsSchema
    },
    radial_array_cubes: {
      description: "Create a bounded radial array of cubes around a pivot with shared or regenerated UVs.",
      mutates: true,
      params: radialArrayCubesParamsSchema
    },
    duplicate_hierarchy: {
      description: "Deep-copy one group subtree while preserving hierarchy, cube properties, and explicit UV policy.",
      mutates: true,
      params: duplicateHierarchyParamsSchema
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
      description: "Auto-UV cubes. mode auto|box|face (default auto from Project/Format: java_block\u2192face, Bedrock\u2192box). Prefer pack_box_uv for unique islands.",
      mutates: true,
      params: autoUvCubesParamsSchema
    },
    get_uv_layout: {
      description: "Inspect the atlas as semantic face islands: UV rect, flips, rotation, model-face texel size/density, bounds, and overlaps.",
      mutates: false,
      params: getUvLayoutParamsSchema
    },
    get_uv_map: {
      description: "Render the selected texture with UV island borders and optional cube.face labels as a native MCP image preview.",
      mutates: false,
      params: getUvMapParamsSchema
    },
    get_face_grid: {
      description: "Read exact face-local texels as RGBA rows while honoring rotated and flipped UVs.",
      mutates: false,
      params: getFaceGridParamsSchema
    },
    get_texture_region: {
      description: "Return a nearest-neighbor zoom of one face or atlas region with checkerboard and pixel grid.",
      mutates: false,
      params: getTextureRegionParamsSchema
    },
    analyze_texture_palette: {
      description: "Count exact RGBA colors and transparency for a texture or one face.",
      mutates: false,
      params: analyzeTexturePaletteParamsSchema
    },
    get_texture_revision: {
      description: "Return a deterministic bitmap revision token for conflict-safe read-modify-write workflows.",
      mutates: false,
      params: getTextureRevisionParamsSchema
    },
    audit_texture_quality: {
      description: "Audit per-face palette size, dominant base ratio, isolated pixels, flat fills, and optional glass alpha structure.",
      mutates: false,
      params: auditTextureQualityParamsSchema
    },
    set_face_uv: {
      description: "Set exact per-face UV rectangles and optional quarter-turn rotation for multiple cube faces in ONE undo.",
      mutates: true,
      params: setFaceUvParamsSchema
    },
    transform_uv_islands: {
      description: "Translate, scale, or quarter-turn selected UV faces around a shared pivot in one undo.",
      mutates: true,
      params: transformUvIslandsParamsSchema
    },
    pack_box_uv: {
      description: "Pack unique UV islands before shade/paint. Auto-detects box vs per-face (java_block\u2192face). Optional mode box|face|auto; auto_resize grows atlas.",
      mutates: true,
      params: packBoxUvParamsSchema
    },
    resize_texture: {
      description: "Resize a texture with nearest-neighbor sampling and optionally rescale all UV coordinates in ONE undo.",
      mutates: true,
      params: resizeTextureParamsSchema
    },
    shade_model_base: {
      description: "BEST texture base: assign texture, region colors by name regex, soft face lighting + mottle + blur (sosadly-style). Then paint features.",
      mutates: true,
      params: shadeModelBaseParamsSchema
    },
    mirror_elements: {
      description: "Mirror named groups/cubes across an axis with smart rename.",
      mutates: true,
      params: mirrorElementsParamsSchema
    },
    paint_face_feature: {
      description: "Paint one rect/ellipse/fill in face-local UV space. Prefer paint_face_features for batches.",
      mutates: true,
      params: paintFaceFeatureParamsSchema
    },
    paint_face_features: {
      description: "Batch face-local paint ops (fill/rect/ellipse/line) in ONE undo \u2014 eyes, mouth, trim across many faces.",
      mutates: true,
      params: paintFaceFeaturesParamsSchema
    },
    paint_pixel_batch: {
      description: "Batch pixel brush paths in face-local UV space. Square/circle brushes, clipped to each face by default, in ONE undo.",
      mutates: true,
      params: paintPixelBatchParamsSchema
    },
    paint_face_grid: {
      description: "Write palette-indexed face-sized texel grids exactly, including transparent erase, in one undo.",
      mutates: true,
      params: paintFaceGridParamsSchema
    },
    edit_texture_pixels: {
      description: "Set or erase exact atlas or face-local RGBA pixels in one undo.",
      mutates: true,
      params: editTexturePixelsParamsSchema
    },
    replace_texture_color: {
      description: "Replace or erase a color globally or on one face with bounded RGBA tolerance.",
      mutates: true,
      params: replaceTextureColorParamsSchema
    },
    copy_face_pixels: {
      description: "Copy face pixels to another face with optional mirror and quarter-turn rotation.",
      mutates: true,
      params: copyFacePixelsParamsSchema
    },
    flood_fill_texture: {
      description: "Flood-fill a bounded face-local or atlas region with tolerance, transparency, and pixel caps.",
      mutates: true,
      params: floodFillTextureParamsSchema
    },
    transform_texture_region: {
      description: "Flip or quarter-turn a full face or bounded atlas region without resampling.",
      mutates: true,
      params: transformTextureRegionParamsSchema
    },
    import_texture_png: {
      description: "Import a PNG only from the user-approved scoped directory into a texture.",
      mutates: true,
      params: importTexturePngParamsSchema
    },
    export_texture_png: {
      description: "Export a texture as original-resolution PNG inside the user-approved scoped directory.",
      mutates: true,
      params: exportTexturePngParamsSchema
    },
    get_texture: {
      description: "Inspect the texture sheet as a compact PNG data_url (default max_edge 256).",
      mutates: false,
      params: getTextureParamsSchema
    },
    assign_texture: {
      description: "Assign an existing texture to cubes, optionally limited to selected faces, in ONE undo.",
      mutates: true,
      params: assignTextureParamsSchema
    },
    audit_material_set: {
      description: "Validate base/emissive/normal/specular texture channel dimensions, power-of-two sizes, and naming.",
      mutates: false,
      params: auditMaterialSetParamsSchema
    },
    ensure_material_set: {
      description: "Create or reuse a bounded base/emissive/normal/specular texture set with channel-appropriate fills.",
      mutates: true,
      params: ensureMaterialSetParamsSchema
    },
    inspect_animation: {
      description: "Read exact bone animation channels, key times, and vector values for safe iterative editing.",
      mutates: false,
      params: inspectAnimationParamsSchema
    },
    upsert_animation: {
      description: "Create/replace a real bone animation clip with rotation/position/scale keys and linear/catmullrom/step interpolation.",
      mutates: true,
      params: upsertAnimationParamsSchema
    },
    transform_animation_keys: {
      description: "Retiming, value scaling, and axis-aware mirroring for bounded animation bone keyframes in one undo.",
      mutates: true,
      params: transformAnimationKeysParamsSchema
    },
    delete_animation: {
      description: "Delete one animation by name in a single undo step.",
      mutates: true,
      params: deleteAnimationParamsSchema
    },
    propose_scoped_directory: {
      description: "Ask user to allow session file access under an absolute directory.",
      mutates: false,
      params: external_exports.object({ path: external_exports.string().min(1) }).strict()
    },
    save_project: {
      description: "Compile the open project as a real .bbmodel inside the confirmed scoped directory. overwrite must be explicit.",
      mutates: true,
      params: external_exports.object({
        path: external_exports.string().min(1).regex(/\.bbmodel$/i, "path must end in .bbmodel"),
        overwrite: external_exports.boolean().optional()
      }).strict()
    },
    export_model: {
      description: "Compile the open model through its active format codec into the confirmed scoped directory. overwrite must be explicit.",
      mutates: true,
      params: external_exports.object({
        path: external_exports.string().min(1),
        overwrite: external_exports.boolean().optional()
      }).strict()
    }
  };
  var COMMAND_NAMES = Object.keys(COMMAND_SPECS);

  // ../shared/dist/uv-mode.js
  var UV_MODES = ["box", "face"];
  var uvModeSchema = external_exports.enum(UV_MODES);
  function resolveUvModeFromHints(h) {
    if (h.explicit === "box" || h.explicit === "face")
      return h.explicit;
    const flags = h.cubeBoxFlags ?? [];
    if (flags.length > 0) {
      const boxN = flags.filter(Boolean).length;
      if (boxN === flags.length)
        return "box";
      if (boxN === 0)
        return "face";
    }
    if (typeof h.projectBoxUv === "boolean") {
      return h.projectBoxUv ? "box" : "face";
    }
    if (typeof h.formatBoxUv === "boolean") {
      return h.formatBoxUv ? "box" : "face";
    }
    const id = (h.formatId ?? "").toLowerCase();
    if (id === "java_block" || id.includes("java_block") || id === "optifine_entity" || id.includes("optifine")) {
      return "face";
    }
    if (id.includes("bedrock") || id === "skin" || id.includes("geckolib") || id === "modded_entity") {
      return "box";
    }
    return "face";
  }

  // ../shared/dist/index.js
  var PLUGIN_VERSION = "0.6.1";

  // src/config.ts
  function readPluginConfig() {
    const portRaw = settings?.mcp_port?.value;
    const secretRaw = settings?.mcp_secret?.value;
    const autoRaw = settings?.mcp_autostart?.value;
    const port = typeof portRaw === "number" ? portRaw : typeof portRaw === "string" ? Number(portRaw) : DEFAULTS.mcpPort;
    return {
      port: Number.isFinite(port) ? port : DEFAULTS.mcpPort,
      secret: typeof secretRaw === "string" && secretRaw.length > 0 ? secretRaw : "dev-local-secret",
      autostart: autoRaw !== false
    };
  }
  function registerPluginSettings() {
    Settings.add?.("mcp_port", {
      value: DEFAULTS.mcpPort,
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
        const createdAnimations = [];
        const liveEls = [];
        const liveTex = [];
        const liveAnimations = [];
        const initAspects = { ...aspects };
        if (Array.isArray(initAspects.elements)) {
          initAspects.elements = resolveUndoElements(
            initAspects.elements
          );
        }
        if (Array.isArray(initAspects.textures)) {
          initAspects.textures = resolveUndoTextures(
            initAspects.textures
          );
        }
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
            },
            addAnimations: (animations2) => {
              createdAnimations.push(...animations2);
              for (const animation of animations2) {
                if (animation && typeof animation === "object" && "uuid" in animation) {
                  liveAnimations.push(animation);
                }
              }
            }
          };
          const result = fn(track);
          const finish = { ...initAspects };
          const els = liveEls.length ? liveEls : resolveLive(createdEls);
          const texs = liveTex.length ? liveTex : resolveLiveTextures(createdTex);
          const animations = liveAnimations.length ? liveAnimations : resolveLiveAnimations(createdAnimations);
          if (els.length) finish.elements = els;
          else delete finish.elements;
          if (texs.length) finish.textures = texs;
          else delete finish.textures;
          if (animations.length) finish.animations = animations;
          else if (Array.isArray(finish.animations) && finish.animations.length === 0) {
            delete finish.animations;
          }
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
  function resolveUndoElements(values) {
    const native = values.filter(hasUndoCopy);
    const refs = values.filter(isElementRef);
    return [...native, ...resolveLive(refs)].filter(uniqueIdentity);
  }
  function resolveUndoTextures(values) {
    const native = values.filter(hasUndoCopy);
    const refs = values.filter(isElementRef);
    return [...native, ...resolveLiveTextures(refs)].filter(uniqueIdentity);
  }
  function hasUndoCopy(value) {
    return Boolean(
      value && typeof value === "object" && "getUndoCopy" in value && typeof value.getUndoCopy === "function"
    );
  }
  function isElementRef(value) {
    return Boolean(value && typeof value === "object" && "uuid" in value);
  }
  function uniqueIdentity(value, index, values) {
    return values.indexOf(value) === index;
  }
  function resolveLiveTextures(refs) {
    const Texture2 = globalThis.Texture;
    return refs.map((r) => Texture2?.all.find((t) => t.uuid === r.uuid)).filter(Boolean);
  }
  function resolveLiveAnimations(refs) {
    const Animation = globalThis.Animation;
    return refs.map(
      (ref) => Animation?.all.find(
        (animation) => animation.uuid === ref.uuid || animation.name === ref.name
      )
    ).filter(Boolean);
  }

  // src/host/texture-port.ts
  function textureApi() {
    const T = globalThis.Texture;
    if (!T)
      throw new CommandError("E_BLOCKBENCH_ERROR", "Texture API unavailable");
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
          tex.edit(
            (canvas2) => {
              const ctx2 = canvas2.getContext("2d") ?? tex.ctx;
              if (!ctx2) {
                throw new CommandError(
                  "E_BLOCKBENCH_ERROR",
                  "Texture canvas has no 2d context"
                );
              }
              paint(ctx2, canvas2);
            },
            { edit_name: editName }
          );
          tex.updateChangesAfterEdit?.();
          return;
        }
        const canvas = tex.canvas;
        const ctx = canvas?.getContext("2d") ?? tex.ctx;
        if (!canvas || !ctx) {
          throw new CommandError(
            "E_BLOCKBENCH_ERROR",
            "Texture.edit unavailable"
          );
        }
        paint(ctx, canvas);
        tex.updateChangesAfterEdit?.();
      },
      applyToCube(cubeUuid, faces = true) {
        const Cube2 = globalThis.Cube;
        const cube = Cube2?.all.find((c) => c.uuid === cubeUuid);
        if (!cube) throw new CommandError("E_NOT_FOUND", `Cube ${cubeUuid}`);
        cube.applyTexture(tex, faces);
      },
      toDataURL(maxEdge = 256) {
        const src = tex.canvas ?? (() => {
          throw new CommandError(
            "E_BLOCKBENCH_ERROR",
            "Texture has no canvas for export"
          );
        })();
        const w = src.width || tex.width;
        const h = src.height || tex.height;
        const scale = Math.min(1, maxEdge / Math.max(w, h, 1));
        if (scale >= 0.999) return src.toDataURL("image/png");
        const out = document.createElement("canvas");
        out.width = Math.max(1, Math.round(w * scale));
        out.height = Math.max(1, Math.round(h * scale));
        const ctx = out.getContext("2d");
        if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(src, 0, 0, out.width, out.height);
        return out.toDataURL("image/png");
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
        tex.width = opts.width;
        tex.height = opts.height;
        tex.add(false);
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
    north: {
      id: "north",
      projection: "orthogonal",
      position: [0, 16, -64],
      target: [0, 16, 0]
    },
    south: {
      id: "south",
      projection: "orthogonal",
      position: [0, 16, 64],
      target: [0, 16, 0]
    },
    east: {
      id: "east",
      projection: "orthogonal",
      position: [64, 16, 0],
      target: [0, 16, 0]
    },
    west: {
      id: "west",
      projection: "orthogonal",
      position: [-64, 16, 0],
      target: [0, 16, 0]
    },
    up: {
      id: "up",
      projection: "orthogonal",
      position: [0, 64, 0],
      target: [0, 16, 0]
    },
    down: {
      id: "down",
      projection: "orthogonal",
      position: [0, -64, 0],
      target: [0, 16, 0]
    },
    iso: {
      id: "isometric",
      projection: "orthogonal",
      position: [40, 40, 40],
      target: [0, 16, 0]
    }
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
                const image = new Image();
                image.onload = () => resolve({
                  dataUrl: url,
                  width: image.naturalWidth || size,
                  height: image.naturalHeight || size
                });
                image.onerror = () => resolve({ dataUrl: url, width: size, height: size });
                image.src = url;
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

  // src/paint/uv-mode.ts
  function resolveUvMode(opts) {
    const cubes = opts?.cubes;
    return resolveUvModeFromHints({
      explicit: opts?.explicit,
      projectBoxUv: typeof Project?.box_uv === "boolean" ? Project.box_uv : null,
      formatBoxUv: typeof Format?.box_uv === "boolean" ? Format.box_uv : null,
      formatId: currentFormatId() ?? Format?.id ?? null,
      cubeBoxFlags: cubes?.map((c) => Boolean(c.box_uv))
    });
  }
  function cubeExtent(cube) {
    return {
      w: Math.max(1, Math.ceil(Math.abs(cube.to[0] - cube.from[0]))),
      h: Math.max(1, Math.ceil(Math.abs(cube.to[1] - cube.from[1]))),
      d: Math.max(1, Math.ceil(Math.abs(cube.to[2] - cube.from[2])))
    };
  }
  var FACE_DIRS = ["north", "east", "south", "west", "up", "down"];
  function faceFootprint(w, h, d, face) {
    if (face === "up" || face === "down") return { fw: w, fh: d };
    if (face === "east" || face === "west") return { fw: d, fh: h };
    return { fw: w, fh: h };
  }
  function shelfPlace(shelf, fw, fh, texW, pad) {
    if (shelf.x + fw + pad > texW && shelf.x > 0) {
      shelf.x = 0;
      shelf.y += shelf.rowH + pad;
      shelf.rowH = 0;
    }
    const x = shelf.x;
    const y = shelf.y;
    shelf.x += fw + pad;
    shelf.rowH = Math.max(shelf.rowH, fh);
    shelf.maxX = Math.max(shelf.maxX, shelf.x);
    shelf.maxY = Math.max(shelf.maxY, shelf.y + shelf.rowH);
    return { x, y };
  }
  function applyPackedUvs(cubes, opts) {
    const pad = opts.padding ?? 1;
    const startY = opts.startY ?? 0;
    const shelf = { x: 0, y: startY, rowH: 0, maxX: 0, maxY: startY };
    if (opts.mode === "box") {
      const items = cubes.map((c) => {
        const { w, h, d } = cubeExtent(c);
        return { c, fw: 2 * (w + d), fh: h + d };
      }).sort((a, b) => b.fh - a.fh || b.fw - a.fw);
      for (const it of items) {
        const { x, y } = shelfPlace(shelf, it.fw, it.fh, opts.texW, pad);
        it.c.box_uv = true;
        it.c.uv_offset = [x, y];
        it.c.autouv = 0;
        it.c.mapAutoUV?.();
      }
    } else {
      const items = [];
      for (const c of cubes) {
        const { w, h, d } = cubeExtent(c);
        c.box_uv = false;
        c.autouv = 0;
        for (const face of FACE_DIRS) {
          const { fw, fh } = faceFootprint(w, h, d, face);
          items.push({ c, face, fw, fh });
        }
      }
      items.sort((a, b) => b.fh - a.fh || b.fw - a.fw);
      for (const it of items) {
        const { x, y } = shelfPlace(shelf, it.fw, it.fh, opts.texW, pad);
        const face = it.c.faces?.[it.face];
        if (!face) continue;
        face.uv = [x, y, x + it.fw, y + it.fh];
      }
    }
    return {
      used: [shelf.maxX, shelf.maxY],
      packed: cubes.length
    };
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
      geometry_name: Project?.geometry_name,
      texture_width: Project?.texture_width,
      texture_height: Project?.texture_height,
      uv_mode: resolveUvMode({ cubes: [...Cube.all] }),
      cubes: Cube.all.length,
      groups: Group.all.length,
      textures: Texture.all.length,
      animations: bbAnimation()?.all?.length ?? 0,
      outliner
    };
  }

  // src/check/aabb.ts
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

  // src/paint/uv-layout.ts
  var FACE_NAMES = [
    "north",
    "south",
    "east",
    "west",
    "up",
    "down"
  ];
  function expectedSize(cube, face) {
    const { w, h, d } = cubeExtent(cube);
    if (face === "up" || face === "down") return [w, d];
    if (face === "east" || face === "west") return [d, h];
    return [w, h];
  }
  function textureRef(value) {
    if (value === null || value === void 0 || value === false) return null;
    if (typeof value === "string" || typeof value === "number")
      return String(value);
    const record = value;
    return typeof record.uuid === "string" ? record.uuid : typeof record.name === "string" ? record.name : "assigned";
  }
  function collectUvIslands(cubes) {
    requireProject();
    const list = cubes?.length ? cubes.map(requireCube) : [...Cube.all];
    const textureWidth = Project?.texture_width ?? 16;
    const textureHeight = Project?.texture_height ?? 16;
    const islands = [];
    for (const cube of list) {
      for (const faceName of FACE_NAMES) {
        const face = cube.faces?.[faceName];
        if (!face?.uv) continue;
        const uv = [...face.uv];
        const bounds = [
          Math.min(uv[0], uv[2]),
          Math.min(uv[1], uv[3]),
          Math.max(uv[0], uv[2]),
          Math.max(uv[1], uv[3])
        ];
        const pixelSize = [
          bounds[2] - bounds[0],
          bounds[3] - bounds[1]
        ];
        const expected = expectedSize(cube, faceName);
        islands.push({
          cube: cube.name,
          cube_uuid: cube.uuid,
          face: faceName,
          uv,
          bounds,
          pixel_size: pixelSize,
          expected_size: expected,
          density: [pixelSize[0] / expected[0], pixelSize[1] / expected[1]],
          flip_x: uv[2] < uv[0],
          flip_y: uv[3] < uv[1],
          rotation: face.rotation ?? 0,
          texture: textureRef(face.texture),
          out_of_bounds: bounds[0] < 0 || bounds[1] < 0 || bounds[2] > textureWidth || bounds[3] > textureHeight
        });
      }
    }
    return islands;
  }
  function intersects(a, b) {
    return Math.min(a.bounds[2], b.bounds[2]) - Math.max(a.bounds[0], b.bounds[0]) > 0 && Math.min(a.bounds[3], b.bounds[3]) - Math.max(a.bounds[1], b.bounds[1]) > 0;
  }
  function getUvLayout(opts) {
    const islands = collectUvIslands(opts.cubes);
    const allowed = new Set(
      (opts.allowed_overlaps ?? []).map(
        ({ cube_a, a, cube_b, b }) => [`${cube_a}.${a}`, `${cube_b}.${b}`].sort().join("|")
      )
    );
    const overlaps2 = [];
    if (opts.include_overlaps !== false) {
      for (let i = 0; i < islands.length; i += 1) {
        for (let j = i + 1; j < islands.length; j += 1) {
          if (!intersects(islands[i], islands[j])) continue;
          const a = `${islands[i].cube}.${islands[i].face}`;
          const b = `${islands[j].cube}.${islands[j].face}`;
          overlaps2.push({
            a,
            b,
            intentional: allowed.has([a, b].sort().join("|"))
          });
        }
      }
    }
    const used = islands.length ? [
      Math.min(...islands.map((island) => island.bounds[0])),
      Math.min(...islands.map((island) => island.bounds[1])),
      Math.max(...islands.map((island) => island.bounds[2])),
      Math.max(...islands.map((island) => island.bounds[3]))
    ] : [0, 0, 0, 0];
    return {
      texture_size: [Project?.texture_width ?? 16, Project?.texture_height ?? 16],
      islands,
      overlaps: overlaps2,
      summary: {
        islands: islands.length,
        out_of_bounds: islands.filter((island) => island.out_of_bounds).length,
        overlaps: overlaps2.length,
        unintended_overlaps: overlaps2.filter((overlap) => !overlap.intentional).length,
        used
      }
    };
  }
  async function getUvMap(opts) {
    requireProject();
    const host = getHost();
    const texture2 = opts.texture ? host.textures.find(opts.texture) : host.textures.defaultOrFirst();
    if (opts.texture && !texture2) {
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    }
    const width = Project?.texture_width ?? texture2?.width ?? 16;
    const height = Project?.texture_height ?? texture2?.height ?? 16;
    const scale = Math.min(opts.max_edge ?? 512, 1024) / Math.max(width, height, 1);
    const out = document.createElement("canvas");
    out.width = Math.max(1, Math.round(width * scale));
    out.height = Math.max(1, Math.round(height * scale));
    const ctx = out.getContext("2d");
    if (!ctx) throw new Error("No 2d context for UV map");
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#20242b";
    ctx.fillRect(0, 0, out.width, out.height);
    if (texture2) {
      const image = new Image();
      let loaded = false;
      await new Promise((resolve) => {
        image.onload = () => {
          loaded = true;
          resolve();
        };
        image.onerror = () => resolve();
        image.src = texture2.toDataURL(Math.max(width, height));
      });
      if (loaded) ctx.drawImage(image, 0, 0, out.width, out.height);
    }
    const islands = collectUvIslands(opts.cubes);
    ctx.lineWidth = Math.max(1, scale / 4);
    ctx.font = `${Math.max(8, Math.round(scale * 2))}px monospace`;
    for (let i = 0; i < islands.length; i += 1) {
      const island = islands[i];
      const hue = i * 137.508 % 360;
      ctx.strokeStyle = `hsl(${hue} 90% 65%)`;
      ctx.strokeRect(
        island.bounds[0] * scale,
        island.bounds[1] * scale,
        island.pixel_size[0] * scale,
        island.pixel_size[1] * scale
      );
      if (opts.labels !== false && scale >= 2) {
        ctx.fillStyle = `hsl(${hue} 90% 75%)`;
        ctx.fillText(
          `${island.cube}.${island.face}`,
          island.bounds[0] * scale + 2,
          island.bounds[1] * scale + 10
        );
      }
    }
    return {
      width: out.width,
      height: out.height,
      mime: "image/png",
      data_url: out.toDataURL("image/png"),
      islands: islands.length
    };
  }

  // src/geometry/spatial.ts
  function rotate(point, pivot, rotation) {
    let [x, y, z] = [
      point[0] - pivot[0],
      point[1] - pivot[1],
      point[2] - pivot[2]
    ];
    for (let axis = 0; axis < 3; axis += 1) {
      const radians = (rotation[axis] ?? 0) * Math.PI / 180;
      if (radians === 0) continue;
      const c = Math.cos(radians);
      const s = Math.sin(radians);
      if (axis === 0) [y, z] = [y * c - z * s, y * s + z * c];
      else if (axis === 1) [x, z] = [x * c + z * s, -x * s + z * c];
      else [x, y] = [x * c - y * s, x * s + y * c];
    }
    return [x + pivot[0], y + pivot[1], z + pivot[2]];
  }
  function parentGroups(cube) {
    const groups = [];
    let parent = cube.parent;
    while (parent && parent !== "root" && typeof parent !== "string") {
      groups.push(parent);
      parent = parent.parent;
    }
    return groups;
  }
  function cubeWorldCorners(cube) {
    const lo = cube.from.map(
      (value, i) => Math.min(value, cube.to[i]) - (cube.inflate ?? 0)
    );
    const hi = cube.from.map(
      (value, i) => Math.max(value, cube.to[i]) + (cube.inflate ?? 0)
    );
    const points = [];
    for (const x of [lo[0], hi[0]])
      for (const y of [lo[1], hi[1]])
        for (const z of [lo[2], hi[2]]) points.push([x, y, z]);
    return points.map((point) => {
      let next = rotate(point, cube.origin, cube.rotation);
      for (const group of parentGroups(cube)) {
        next = rotate(next, group.origin, group.rotation);
      }
      return next;
    });
  }
  function boundsOfPoints(points) {
    if (!points.length) return { min: [0, 0, 0], max: [0, 0, 0] };
    return {
      min: [0, 1, 2].map(
        (i) => Math.min(...points.map((point) => point[i]))
      ),
      max: [0, 1, 2].map(
        (i) => Math.max(...points.map((point) => point[i]))
      )
    };
  }
  function cubeWorldBounds(cube) {
    return boundsOfPoints(cubeWorldCorners(cube));
  }
  function geometricCubeVolume(cube) {
    return [0, 1, 2].reduce(
      (volume2, i) => volume2 * Math.max(
        0,
        Math.abs(cube.to[i] - cube.from[i]) + (cube.inflate ?? 0) * 2
      ),
      1
    );
  }

  // src/check/rules.ts
  function runCheckModel(opts = {}) {
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
    const aabbs = Cube.all.map((c) => ({ cube: c, box: cubeWorldBounds(c) }));
    for (const { cube, box } of aabbs) {
      if (geometricCubeVolume(cube) <= 0) {
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
      const textureWidth = Project?.texture_width ?? 16;
      const textureHeight = Project?.texture_height ?? 16;
      const uvOutside = Object.entries(cube.faces ?? {}).filter(([, face]) => {
        const uv = face?.uv;
        return Array.isArray(uv) && uv.length >= 4 && (Math.min(uv[0], uv[2]) < 0 || Math.min(uv[1], uv[3]) < 0 || Math.max(uv[0], uv[2]) > textureWidth || Math.max(uv[1], uv[3]) > textureHeight);
      });
      if (uvOutside.length > 0) {
        findings.push({
          severity: "error",
          code: "UV_OUT_OF_BOUNDS",
          element: cube.name,
          message: `Cube "${cube.name}" has ${uvOutside.length} face UV(s) outside ${textureWidth}\xD7${textureHeight}.`
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
    const uvLayout = getUvLayout({
      include_overlaps: true,
      allowed_overlaps: opts.allowed_uv_overlaps?.map(({ a, b }) => ({
        cube_a: a.cube,
        a: a.face,
        cube_b: b.cube,
        b: b.face
      }))
    });
    if (uvLayout.summary.unintended_overlaps > 0) {
      const unintended = uvLayout.overlaps.filter((pair) => !pair.intentional);
      const examples = unintended.slice(0, 3).map((pair) => `${pair.a}\u2194${pair.b}`).join(", ");
      findings.push({
        severity: "warn",
        code: "UV_OVERLAP",
        message: `${unintended.length} unintended overlapping UV face pair(s) detected${examples ? `: ${examples}` : ""}. Review get_uv_layout before painting.`
      });
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
    const views = params.views ?? [
      ...captureViewsDefaults.views
    ];
    const maxEdge = params.max_edge ?? captureViewsDefaults.max_edge;
    const format = params.format ?? captureViewsDefaults.format;
    const quality = (params.quality ?? captureViewsDefaults.quality) / 100;
    const out = [];
    for (const view of views) {
      const raw = await host.preview.capture(view, maxEdge);
      const compressed = await compress(raw, format, quality, maxEdge);
      const mime = compressed.dataUrl.startsWith("data:image/jpeg") ? "image/jpeg" : "image/png";
      const b64 = compressed.dataUrl.split(",")[1] ?? "";
      out.push({
        view,
        visible_face: view === "iso" ? null : view,
        width: compressed.width,
        height: compressed.height,
        bytes: Math.floor(b64.length * 3 / 4),
        mime,
        data_url: compressed.dataUrl
      });
    }
    return { views: out };
  }
  function compress(source, format, quality, maxEdge) {
    if (format === "png" && source.dataUrl.startsWith("data:image/png")) {
      return Promise.resolve(source);
    }
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const width = img.naturalWidth || source.width;
        const height = img.naturalHeight || source.height;
        const scale = Math.min(1, maxEdge / Math.max(width, height, 1));
        canvas.width = Math.max(1, Math.round(width * scale));
        canvas.height = Math.max(1, Math.round(height * scale));
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(source);
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve({
          dataUrl: format === "jpeg" ? canvas.toDataURL("image/jpeg", quality) : canvas.toDataURL("image/png"),
          width: canvas.width,
          height: canvas.height
        });
      };
      img.onerror = () => resolve(source);
      img.src = source.dataUrl;
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
    const boxUv = resolveUvMode() === "box";
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
          box_uv: boxUv
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
      autouv: 1,
      box_uv: resolveUvMode() === "box"
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
    const uvMode = resolveUvMode();
    const label = `scaffold_biped scale=${s} uv=${uvMode}`;
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
      const mk = (name, parent, from, size, origin, inflate = 0) => cubeOn(name, parent, from, size, origin, skin.uuid, uvMode === "box", inflate);
      const root = bone(`${prefix}root`, [0, 0, 0], "root");
      push(root, "group");
      const body = bone(`${prefix}body`, [0, 24 * s, 0], root);
      push(body, "group");
      push(mk(`${prefix}body_cube`, body, [-4 * s, 12 * s, -2 * s], [8 * s, 12 * s, 4 * s], [0, 24 * s, 0]), "cube");
      const head = bone(`${prefix}head`, [0, 24 * s, 0], body);
      push(head, "group");
      push(mk(`${prefix}head_cube`, head, [-4 * s, 24 * s, -4 * s], [8 * s, 8 * s, 8 * s], [0, 24 * s, 0]), "cube");
      const armR = bone(`${prefix}arm_right`, [-6 * s, 22 * s, 0], body);
      const armL = bone(`${prefix}arm_left`, [6 * s, 22 * s, 0], body);
      push(armR, "group");
      push(armL, "group");
      push(mk(`${prefix}arm_right_cube`, armR, [-8 * s, 12 * s, -2 * s], [4 * s, 12 * s, 4 * s], [-6 * s, 22 * s, 0]), "cube");
      push(mk(`${prefix}arm_left_cube`, armL, [4 * s, 12 * s, -2 * s], [4 * s, 12 * s, 4 * s], [6 * s, 22 * s, 0]), "cube");
      const legR = bone(`${prefix}leg_right`, [-2 * s, 12 * s, 0], body);
      const legL = bone(`${prefix}leg_left`, [2 * s, 12 * s, 0], body);
      push(legR, "group");
      push(legL, "group");
      push(mk(`${prefix}leg_right_cube`, legR, [-4 * s, 0, -2 * s], [4 * s, 12 * s, 4 * s], [-2 * s, 12 * s, 0]), "cube");
      push(mk(`${prefix}leg_left_cube`, legL, [0, 0, -2 * s], [4 * s, 12 * s, 4 * s], [2 * s, 12 * s, 0]), "cube");
      if (opts.include_outer_layers) {
        push(
          mk(`${prefix}hat`, head, [-4.5 * s, 23.5 * s, -4.5 * s], [9 * s, 9 * s, 9 * s], [0, 24 * s, 0], 0.25 * s),
          "cube"
        );
      }
      const cubes = Cube.all.filter((c) => c.name.startsWith(prefix) || !prefix);
      applyPackedUvs(cubes, { mode: uvMode, texW: texSize, padding: 1 });
      for (const c of cubes) skin.applyToCube(c.uuid, true);
      refreshView(created);
      const check = runCheckModel();
      return { ok: true, undo_label: label, mode: uvMode, created, check };
    });
  }
  function bone(name, origin, parent) {
    const g = new Group({ name, origin: [...origin], rotation: [0, 0, 0] }).init().addTo(parent);
    g.createUniqueName?.();
    return g;
  }
  function cubeOn(name, parent, from, size, origin, textureUuid, boxUv, inflate = 0) {
    const to = [from[0] + size[0], from[1] + size[1], from[2] + size[2]];
    const c = new Cube({
      name,
      from: [...from],
      to,
      origin: [...origin],
      inflate,
      autouv: 1,
      box_uv: boxUv
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

  // src/texture/get.ts
  function getTexture(opts) {
    requireProject();
    const host = getHost();
    const tex = opts.texture ? host.textures.find(opts.texture) : host.textures.defaultOrFirst();
    if (opts.texture && !tex) {
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    }
    if (!tex) throw new CommandError("E_NOT_FOUND", "No texture in project");
    const maxEdge = opts.max_edge ?? 256;
    const dataUrl = tex.toDataURL(maxEdge);
    return {
      name: tex.name,
      uuid: tex.uuid,
      width: tex.width,
      height: tex.height,
      max_edge: maxEdge,
      mime: "image/png",
      data_url: dataUrl
    };
  }

  // src/paint/face-space.ts
  function resolveFaceSpace(cube, faceName) {
    const face = cube.faces?.[faceName];
    const uv = [...face?.uv ?? [0, 0, 1, 1]];
    const rawRotation = face?.rotation ?? 0;
    const rotation = [0, 90, 180, 270].includes(rawRotation) ? rawRotation : 0;
    const atlasWidth = Math.max(1, Math.round(Math.abs(uv[2] - uv[0])));
    const atlasHeight = Math.max(1, Math.round(Math.abs(uv[3] - uv[1])));
    const quarterTurn = rotation === 90 || rotation === 270;
    return {
      width: quarterTurn ? atlasHeight : atlasWidth,
      height: quarterTurn ? atlasWidth : atlasHeight,
      uv,
      rotation
    };
  }
  function rotate2(u, v, rotation) {
    if (rotation === 90) return [1 - v, u];
    if (rotation === 180) return [1 - u, 1 - v];
    if (rotation === 270) return [v, 1 - u];
    return [u, v];
  }
  function faceLocalToAtlas(space, x, y) {
    const [u, v] = rotate2(
      (x + 0.5) / space.width,
      (y + 0.5) / space.height,
      space.rotation
    );
    return [
      Math.floor(space.uv[0] + (space.uv[2] - space.uv[0]) * u),
      Math.floor(space.uv[1] + (space.uv[3] - space.uv[1]) * v)
    ];
  }
  function atlasPoint(space, x, y) {
    const [u, v] = rotate2(x / space.width, y / space.height, space.rotation);
    return [
      space.uv[0] + (space.uv[2] - space.uv[0]) * u,
      space.uv[1] + (space.uv[3] - space.uv[1]) * v
    ];
  }
  function paintFaceLocal(atlas, space, paint) {
    const local = document.createElement("canvas");
    local.width = space.width;
    local.height = space.height;
    const localCtx = local.getContext("2d");
    if (!localCtx) return;
    localCtx.imageSmoothingEnabled = false;
    paint(localCtx);
    const pixels = localCtx.getImageData(0, 0, local.width, local.height).data;
    for (let y = 0; y < local.height; y += 1) {
      for (let x = 0; x < local.width; x += 1) {
        const index = (y * local.width + x) * 4;
        if (pixels[index + 3] === 0) continue;
        const corners = [
          atlasPoint(space, x, y),
          atlasPoint(space, x + 1, y),
          atlasPoint(space, x, y + 1),
          atlasPoint(space, x + 1, y + 1)
        ];
        const minX = Math.floor(Math.min(...corners.map((point) => point[0])));
        const minY = Math.floor(Math.min(...corners.map((point) => point[1])));
        const maxX = Math.ceil(Math.max(...corners.map((point) => point[0])));
        const maxY = Math.ceil(Math.max(...corners.map((point) => point[1])));
        atlas.fillStyle = `rgba(${pixels[index]},${pixels[index + 1]},${pixels[index + 2]},${pixels[index + 3] / 255})`;
        atlas.fillRect(
          minX,
          minY,
          Math.max(1, maxX - minX),
          Math.max(1, maxY - minY)
        );
      }
    }
  }

  // src/paint/face-batch.ts
  function applyOp(ctx, faceW, faceH, op) {
    ctx.fillStyle = op.color;
    ctx.strokeStyle = op.color;
    if (op.type === "fill") {
      ctx.fillRect(0, 0, faceW, faceH);
      return;
    }
    if (op.type === "line") {
      const x1 = op.x ?? 0;
      const y1 = op.y ?? 0;
      const x2 = op.x2 ?? op.x ?? 0;
      const y2 = op.y2 ?? op.y ?? 0;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = Math.max(1, op.width ?? 1);
      ctx.stroke();
      return;
    }
    const x = op.x ?? 0;
    const y = op.y ?? 0;
    const w = op.width ?? 1;
    const h = op.height ?? 1;
    if (op.type === "rect") {
      ctx.fillRect(x, y, w, h);
      return;
    }
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  function paintFaceFeatures(opts) {
    requireProject();
    if (!opts.faces?.length) {
      throw new CommandError("E_INVALID_PARAM", "faces[] required");
    }
    const host = getHost();
    const tex = opts.texture ? host.textures.find(opts.texture) : host.textures.defaultOrFirst();
    if (opts.texture && !tex) {
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    }
    if (!tex) throw new CommandError("E_NOT_FOUND", "No texture available");
    const jobs = opts.faces.map((item) => {
      const cube = requireCube(item.cube);
      const face = cube.faces?.[item.face];
      if (!face) {
        throw new CommandError(
          "E_INVALID_PARAM",
          `Face not found: ${item.cube}.${item.face}`
        );
      }
      return {
        cube,
        faceName: item.face,
        space: resolveFaceSpace(cube, item.face),
        ops: item.ops
      };
    });
    return host.undo.run(
      { textures: [], bitmap: true, uv_only: true },
      "paint_face_features",
      (track) => {
        track.addTextures([tex]);
        for (const job of jobs) {
          tex.applyToCube(job.cube.uuid, [job.faceName]);
        }
        tex.edit((ctx) => {
          ctx.imageSmoothingEnabled = false;
          for (const job of jobs) {
            paintFaceLocal(ctx, job.space, (local) => {
              for (const op of job.ops)
                applyOp(local, job.space.width, job.space.height, op);
            });
          }
        }, "paint_face_features");
        refreshView(jobs.map((j) => ({ uuid: j.cube.uuid, name: j.cube.name })));
        return {
          ok: true,
          undo_label: "paint_face_features",
          painted: jobs.length
        };
      }
    );
  }
  function paintFaceFeature(opts) {
    const op = opts.feature === "fill" ? { type: "fill", color: opts.color } : {
      type: opts.feature,
      x: opts.x,
      y: opts.y,
      width: opts.width,
      height: opts.height,
      color: opts.color
    };
    paintFaceFeatures({
      texture: opts.texture,
      faces: [{ cube: opts.cube, face: opts.face, ops: [op] }]
    });
    return { ok: true, undo_label: "paint_face_feature" };
  }

  // src/paint/color.ts
  function clamp8(n) {
    return Math.max(0, Math.min(255, Math.round(n)));
  }
  function parseHex(color2) {
    const s = color2.trim();
    const m = /^#?([0-9a-f]{6})$/i.exec(s);
    if (!m) return [154, 154, 154];
    const n = parseInt(m[1], 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  function shadeHex(color2, factor) {
    const [r, g, b] = parseHex(color2);
    const rr = clamp8(r * factor);
    const gg = clamp8(g * factor);
    const bb = clamp8(b * factor);
    return `#${(1 << 24 | rr << 16 | gg << 8 | bb).toString(16).slice(1)}`;
  }
  function regionColorFor(name, regions, base) {
    if (!regions?.length) return base;
    for (const rule of regions) {
      try {
        if (new RegExp(rule.match, "i").test(name)) return rule.color;
      } catch {
      }
    }
    return base;
  }
  function blurRect(ctx, rx, ry, rw, rh, amt) {
    if (rw < 2 || rh < 2 || amt <= 0) return;
    const src = ctx.getImageData(rx, ry, rw, rh);
    const s = src.data;
    const out = ctx.createImageData(rw, rh);
    const d = out.data;
    for (let y = 0; y < rh; y++) {
      for (let x = 0; x < rw; x++) {
        let R = 0;
        let G = 0;
        let B = 0;
        let A = 0;
        let N = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const xx = x + dx;
            const yy = y + dy;
            if (xx < 0 || yy < 0 || xx >= rw || yy >= rh) continue;
            const i = (yy * rw + xx) * 4;
            R += s[i];
            G += s[i + 1];
            B += s[i + 2];
            A += s[i + 3];
            N++;
          }
        }
        const o = (y * rw + x) * 4;
        d[o] = clamp8(s[o] * (1 - amt) + R / N * amt);
        d[o + 1] = clamp8(s[o + 1] * (1 - amt) + G / N * amt);
        d[o + 2] = clamp8(s[o + 2] * (1 - amt) + B / N * amt);
        d[o + 3] = clamp8(s[o + 3] * (1 - amt) + A / N * amt);
      }
    }
    ctx.putImageData(out, rx, ry);
  }

  // src/paint/shade-base.ts
  function facePixelRect(face, scale) {
    const uv = face.uv;
    if (!uv || uv.length < 4) return null;
    const x0 = Math.min(uv[0], uv[2]) * scale;
    const y0 = Math.min(uv[1], uv[3]) * scale;
    const x1 = Math.max(uv[0], uv[2]) * scale;
    const y1 = Math.max(uv[1], uv[3]) * scale;
    const w = Math.max(1, Math.round(x1 - x0));
    const h = Math.max(1, Math.round(y1 - y0));
    return { x: Math.round(x0), y: Math.round(y0), w, h };
  }
  function shadeModelBase(opts) {
    requireProject();
    const list = opts.cubes && opts.cubes.length > 0 ? opts.cubes.map((n) => requireCube(n)) : [...Cube.all];
    if (!list.length) throw new CommandError("E_NOT_FOUND", "No cubes to shade.");
    const host = getHost();
    const tex = opts.texture ? host.textures.find(opts.texture) : host.textures.defaultOrFirst();
    if (opts.texture && !tex) {
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    }
    if (!tex)
      throw new CommandError(
        "E_NOT_FOUND",
        "No texture \u2014 call ensure_texture first."
      );
    const base = opts.base ?? "#9c9c9c";
    const mottle = opts.noise ?? 0.06;
    const blurAmt = opts.blur ?? 0.45;
    const topLight = opts.top_light ?? 0.12;
    const bottomDark = opts.bottom_dark ?? 0.22;
    const edgeDark = opts.edge_darken ?? 0;
    let randomState = (opts.seed ?? 2654435769) >>> 0;
    const random = () => {
      randomState = Math.imul(randomState, 1664525) + 1013904223 >>> 0;
      return randomState / 4294967296;
    };
    const faceMul = {
      up: 1 + topLight,
      down: 1 - bottomDark,
      north: 0.95,
      south: 1,
      east: 1.06,
      west: 0.88
    };
    const Project2 = globalThis.Project;
    const scale = tex.width / (Project2?.texture_width || tex.width || 64);
    return host.undo.run(
      { elements: list, textures: [], bitmap: true, uv_only: true },
      "shade_model_base",
      (track) => {
        track.addTextures([tex]);
        const jobs = [];
        for (const cube of list) {
          const col = regionColorFor(cube.name, opts.regions, base);
          tex.applyToCube(cube.uuid, true);
          for (const dir of Object.keys(cube.faces ?? {})) {
            const face = cube.faces[dir];
            if (!face) continue;
            const r = facePixelRect(face, scale);
            if (!r) continue;
            jobs.push({
              ...r,
              base: col,
              mul: faceMul[dir] ?? 1
            });
          }
        }
        tex.edit((ctx) => {
          ctx.imageSmoothingEnabled = false;
          for (const job of jobs) {
            if (opts.crisp === true) {
              ctx.fillStyle = shadeHex(job.base, job.mul);
            } else {
              const g = ctx.createLinearGradient(0, job.y, 0, job.y + job.h);
              g.addColorStop(0, shadeHex(job.base, job.mul * 1.1));
              g.addColorStop(1, shadeHex(job.base, job.mul * 0.84));
              ctx.fillStyle = g;
            }
            ctx.fillRect(job.x, job.y, job.w, job.h);
            if (edgeDark > 0 && job.w > 2 && job.h > 2) {
              ctx.fillStyle = shadeHex(job.base, job.mul * (1 - edgeDark));
              ctx.fillRect(job.x, job.y, job.w, 1);
              ctx.fillRect(job.x, job.y + job.h - 1, job.w, 1);
              ctx.fillRect(job.x, job.y, 1, job.h);
              ctx.fillRect(job.x + job.w - 1, job.y, 1, job.h);
            }
          }
          if (mottle > 0) {
            for (const job of jobs) {
              const count = Math.max(1, Math.floor(job.w * job.h * 0.1));
              for (let i = 0; i < count; i++) {
                const px = job.x + (random() * job.w | 0);
                const py = job.y + (random() * job.h | 0);
                ctx.fillStyle = shadeHex(
                  job.base,
                  job.mul * (1 - mottle + random() * mottle * 2)
                );
                ctx.fillRect(
                  px,
                  py,
                  1,
                  opts.crisp === true || random() < 0.5 ? 1 : 2
                );
              }
            }
          }
          if (blurAmt > 0 && opts.crisp !== true) {
            for (const job of jobs)
              blurRect(ctx, job.x, job.y, job.w, job.h, blurAmt);
          }
        }, "shade_model_base");
        refreshView(list.map((c) => ({ uuid: c.uuid, name: c.name })));
        return {
          ok: true,
          undo_label: "shade_model_base",
          textured: list.length,
          faces: jobs.length
        };
      }
    );
  }

  // src/paint/pack-uv.ts
  function nextPowerOfTwo(value) {
    let result = 1;
    while (result < value) result *= 2;
    return result;
  }
  function packBoxUv(opts) {
    requireProject();
    const list = opts.cubes && opts.cubes.length > 0 ? opts.cubes.map((n) => requireCube(n)) : [...Cube.all];
    if (list.length === 0) {
      throw new CommandError("E_NOT_FOUND", "No cubes to pack UV.");
    }
    const mode = resolveUvMode({
      explicit: opts.mode ?? "auto",
      cubes: list
    });
    const pad = opts.padding ?? 1;
    let texW = Project?.texture_width ?? 64;
    let texH = Project?.texture_height ?? 64;
    const host = getHost();
    const texture2 = opts.texture ? host.textures.find(opts.texture) : host.textures.defaultOrFirst();
    if (opts.texture && !texture2) {
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    }
    const selected = new Set(list.map((cube) => cube.uuid));
    const fixed = opts.preserve_others === false ? [] : collectUvIslands().filter((island) => !selected.has(island.cube_uuid));
    const startY = fixed.length ? Math.ceil(Math.max(...fixed.map((island) => island.bounds[3])) + pad) : 0;
    return host.undo.run(
      {
        elements: list,
        textures: texture2 ? [texture2] : [],
        bitmap: Boolean(texture2),
        uv_only: true,
        uv_mode: true
      },
      "pack_box_uv",
      (track) => {
        if (texture2) track.addTextures([texture2]);
        const { used, packed } = applyPackedUvs(list, {
          mode,
          texW,
          padding: pad,
          startY
        });
        if (opts.auto_resize === false && (used[0] > texW || used[1] > texH)) {
          throw new CommandError(
            "E_INVALID_PARAM",
            `Packed UV extent ${used[0]}\xD7${used[1]} exceeds atlas ${texW}\xD7${texH}; enable auto_resize or use fewer/smaller islands`
          );
        }
        if (opts.auto_resize !== false) {
          let needW = Math.max(texW, used[0]);
          let needH = Math.max(texH, used[1]);
          if (opts.power_of_two !== false) {
            needW = nextPowerOfTwo(needW);
            needH = nextPowerOfTwo(needH);
          }
          const maxSize = opts.max_size ?? 1024;
          if (needW > maxSize || needH > maxSize) {
            throw new CommandError(
              "E_INVALID_PARAM",
              `Packed atlas needs ${needW}\xD7${needH}, exceeding max_size ${maxSize}`
            );
          }
          if (needW !== texW || needH !== texH) {
            texW = needW;
            texH = needH;
            if (Project) {
              Project.texture_width = texW;
              Project.texture_height = texH;
            }
            texture2?.edit((ctx, canvas) => {
              if (canvas.width >= texW && canvas.height >= texH) return;
              const prev = document.createElement("canvas");
              prev.width = canvas.width;
              prev.height = canvas.height;
              prev.getContext("2d")?.drawImage(canvas, 0, 0);
              canvas.width = Math.max(canvas.width, texW);
              canvas.height = Math.max(canvas.height, texH);
              ctx.imageSmoothingEnabled = false;
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(prev, 0, 0);
            }, "pack_box_uv resize");
          }
        }
        for (const c of list) texture2?.applyToCube(c.uuid, true);
        refreshView(list.map((c) => ({ uuid: c.uuid, name: c.name })));
        return {
          ok: true,
          undo_label: "pack_box_uv",
          mode,
          packed,
          used,
          texture_size: [texW, texH]
        };
      }
    );
  }

  // src/paint/face-feature.ts
  function autoUvCubes(opts) {
    requireProject();
    const list = opts.cubes && opts.cubes.length > 0 ? opts.cubes.map((n) => requireCube(n)) : [...Cube.all];
    if (list.length === 0) {
      throw new CommandError("E_NOT_FOUND", "No cubes to UV.");
    }
    const mode = resolveUvMode({
      explicit: opts.mode ?? "auto",
      cubes: list
    });
    const host = getHost();
    return host.undo.run(
      { elements: list, uv_only: true },
      "auto_uv_cubes",
      () => {
        const updated = [];
        for (const cube of list) {
          cube.box_uv = mode === "box";
          cube.autouv = 1;
          cube.mapAutoUV?.();
          updated.push(cube.uuid);
        }
        refreshView(list.map((c) => ({ uuid: c.uuid, name: c.name })));
        return { ok: true, undo_label: "auto_uv_cubes", mode, updated };
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
    const boxUv = resolveUvMode() === "box";
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
            box_uv: boxUv
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
  function requireModule(name) {
    const req = globalThis.require;
    if (typeof req !== "function") {
      throw new CommandError("E_BLOCKBENCH_ERROR", "Node modules unavailable");
    }
    return req(name);
  }
  function fsApi() {
    const fs = requireModule("fs");
    if (!fs?.existsSync || !fs.readFileSync || !fs.writeFileSync) {
      throw new CommandError(
        "E_BLOCKBENCH_ERROR",
        "Filesystem not available (use Blockbench desktop app)."
      );
    }
    return fs;
  }
  function scopedTarget(session2, path) {
    if (!session2.scopedDirectory) {
      throw new CommandError(
        "E_SCOPE_DENIED",
        "Call propose_scoped_directory first and get user approval."
      );
    }
    const paths = requireModule("path");
    if (!paths.isAbsolute(path)) {
      throw new CommandError(
        "E_SCOPE_DENIED",
        "Destination path must be absolute"
      );
    }
    const root = paths.resolve(session2.scopedDirectory);
    const target = paths.resolve(path);
    const relative = paths.relative(root, target);
    if (relative === ".." || relative.startsWith(`..\\`) || relative.startsWith("../") || paths.isAbsolute(relative)) {
      throw new CommandError(
        "E_SCOPE_DENIED",
        `Export path must be inside scoped directory: ${root}`
      );
    }
    return target;
  }
  function readScopedBinary(session2, path) {
    const target = scopedTarget(session2, path);
    const fs = fsApi();
    if (!fs.existsSync(target))
      throw new CommandError("E_NOT_FOUND", `File not found: ${target}`);
    return fs.readFileSync(target);
  }
  function writeScopedBinary(session2, path, data, overwrite) {
    const target = scopedTarget(session2, path);
    const fs = fsApi();
    if (fs.existsSync(target) && overwrite !== true) {
      throw new CommandError(
        "E_SCOPE_DENIED",
        "File exists; pass overwrite:true"
      );
    }
    fs.writeFileSync(target, data);
    return { path: target, bytes: data.byteLength };
  }
  function serialize(content) {
    if (typeof content === "string" || content instanceof ArrayBuffer || content instanceof Uint8Array) {
      return content;
    }
    if (content === void 0 || content === null) {
      throw new CommandError("E_BLOCKBENCH_ERROR", "Codec returned no content");
    }
    return JSON.stringify(content, null, 2);
  }
  function compileTo(session2, opts, codec, label) {
    requireProject();
    const target = scopedTarget(session2, opts.path);
    const fs = fsApi();
    if (fs.existsSync(target) && opts.overwrite !== true) {
      throw new CommandError(
        "E_SCOPE_DENIED",
        "File exists; pass overwrite:true"
      );
    }
    if (typeof codec?.compile !== "function") {
      throw new CommandError(
        "E_UNSUPPORTED_FORMAT",
        `${label} codec is unavailable`
      );
    }
    const data = serialize(codec.compile());
    fs.writeFileSync(target, data);
    const bytes = typeof data === "string" ? new TextEncoder().encode(data).byteLength : data.byteLength;
    return { path: target, bytes, codec: label };
  }
  function proposeScopedDirectory(session2, path) {
    const paths = requireModule("path");
    if (!paths.isAbsolute(path)) {
      throw new CommandError(
        "E_INVALID_PARAM",
        "Scoped directory must be absolute"
      );
    }
    const resolved = paths.resolve(path);
    const ok = typeof window !== "undefined" && window.confirm(
      `Allow MCP file access for this session?

${resolved}

Only this folder will be writable/readable by AI tools.`
    );
    if (!ok)
      throw new CommandError(
        "E_SCOPE_DENIED",
        "User denied scoped directory access."
      );
    session2.scopedDirectory = resolved;
    return { scoped_directory: resolved, confirmed: true };
  }
  function saveProject(session2, opts) {
    const codec = globalThis.Codecs?.project;
    return compileTo(session2, opts, codec, "project");
  }
  function exportModel(session2, opts) {
    const format = globalThis.Format;
    return compileTo(session2, opts, format?.codec, format?.id ?? "format");
  }

  // src/bb/undo.ts
  function withUndo(aspects, label, fn) {
    return getHost().undo.run(aspects, label, (track) => {
      if (fn.length >= 1) return fn(track);
      return fn();
    });
  }

  // src/commands/animation.ts
  function animationApi() {
    const api = globalThis.Animation;
    if (!api || !Array.isArray(api.all)) {
      throw new CommandError(
        "E_UNSUPPORTED_FORMAT",
        "Animations are not available in this format/plugin set."
      );
    }
    return api;
  }
  function upsertAnimation(opts) {
    requireProject();
    const Api = animationApi();
    const existing = Api.all.find((animation) => animation.name === opts.name);
    if (existing && opts.replace !== true) {
      throw new CommandError(
        "E_INVALID_PARAM",
        `Animation "${opts.name}" exists; pass replace:true`
      );
    }
    const bones = Object.entries(opts.bones ?? {}).map(([ref, channels2]) => ({
      group: requireGroup(ref),
      channels: channels2
    }));
    const label = `upsert_animation ${opts.name}`;
    return withUndo(
      { animations: existing ? [existing] : [], keyframes: [] },
      label,
      (track) => {
        if (existing) {
          if (typeof existing.remove === "function") existing.remove(false);
          else Api.all.splice(Api.all.indexOf(existing), 1);
        }
        const animation = new Api({
          name: opts.name,
          length: opts.length,
          loop: opts.loop ?? "loop"
        });
        animation.add?.(false);
        track.addAnimations([animation]);
        animation.setLength?.(opts.length);
        let keyframes = 0;
        for (const { group, channels: channels2 } of bones) {
          const animator = animation.getBoneAnimator?.(group);
          if (!animator) {
            throw new CommandError(
              "E_BLOCKBENCH_ERROR",
              `Cannot create animator for bone: ${group.name}`
            );
          }
          for (const channel of ["rotation", "position", "scale"]) {
            for (const key of channels2[channel] ?? []) {
              animator.addKeyframe({
                channel,
                time: key.time,
                interpolation: key.interpolation ?? "linear",
                data_points: [
                  { x: key.value[0], y: key.value[1], z: key.value[2] }
                ]
              });
              keyframes += 1;
            }
          }
        }
        return {
          ok: true,
          undo_label: label,
          name: opts.name,
          keyframes
        };
      }
    );
  }

  // src/paint/pixel-batch.ts
  function walkLine(a, b, visit) {
    let x = a.x;
    let y = a.y;
    const dx = Math.abs(b.x - a.x);
    const sx = a.x < b.x ? 1 : -1;
    const dy = -Math.abs(b.y - a.y);
    const sy = a.y < b.y ? 1 : -1;
    let error = dx + dy;
    for (; ; ) {
      visit(x, y);
      if (x === b.x && y === b.y) return;
      const twice = error * 2;
      if (twice >= dy) {
        error += dy;
        x += sx;
      }
      if (twice <= dx) {
        error += dx;
        y += sy;
      }
    }
  }
  function stamp(ctx, x, y, size, shape) {
    const offset = Math.floor(size / 2);
    if (shape === "square") {
      ctx.fillRect(x - offset, y - offset, size, size);
      return;
    }
    const center2 = (size - 1) / 2;
    const radiusSquared = (size / 2) ** 2;
    for (let py = 0; py < size; py += 1) {
      for (let px = 0; px < size; px += 1) {
        const dx = px - center2;
        const dy = py - center2;
        if (dx * dx + dy * dy <= radiusSquared) {
          ctx.fillRect(x - offset + px, y - offset + py, 1, 1);
        }
      }
    }
  }
  function paintPixelBatch(opts) {
    requireProject();
    if (!opts.strokes?.length) {
      throw new CommandError("E_INVALID_PARAM", "strokes[] required");
    }
    const host = getHost();
    const tex = opts.texture ? host.textures.find(opts.texture) : host.textures.defaultOrFirst();
    if (opts.texture && !tex) {
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    }
    if (!tex) throw new CommandError("E_NOT_FOUND", "No texture available");
    const jobs = opts.strokes.map((stroke) => {
      const cube = requireCube(stroke.cube);
      const face = cube.faces?.[stroke.face];
      if (!face) {
        throw new CommandError(
          "E_INVALID_PARAM",
          `Face not found: ${stroke.cube}.${stroke.face}`
        );
      }
      return {
        ...stroke,
        cube,
        space: resolveFaceSpace(cube, stroke.face),
        size: stroke.size ?? 1,
        shape: stroke.shape ?? "square"
      };
    });
    let stamps = 0;
    return host.undo.run(
      { textures: [], bitmap: true, uv_only: true },
      "paint_pixel_batch",
      (track) => {
        track.addTextures([tex]);
        for (const job of jobs) tex.applyToCube(job.cube.uuid, [job.face]);
        tex.edit((ctx) => {
          ctx.imageSmoothingEnabled = false;
          for (const job of jobs) {
            paintFaceLocal(ctx, job.space, (local) => {
              if (opts.clip_to_face !== false) {
                local.beginPath();
                local.rect(0, 0, job.space.width, job.space.height);
                local.clip();
              }
              local.fillStyle = job.color;
              const draw = (x, y) => {
                stamp(local, x, y, job.size, job.shape);
                stamps += 1;
              };
              draw(job.points[0].x, job.points[0].y);
              for (let i = 1; i < job.points.length; i += 1) {
                const previous = job.points[i - 1];
                const current = job.points[i];
                let first = true;
                walkLine(previous, current, (x, y) => {
                  if (first) {
                    first = false;
                    return;
                  }
                  draw(x, y);
                });
              }
            });
          }
        }, "paint_pixel_batch");
        refreshView(
          jobs.map((job) => ({ uuid: job.cube.uuid, name: job.cube.name }))
        );
        return {
          ok: true,
          undo_label: "paint_pixel_batch",
          strokes: jobs.length,
          stamps
        };
      }
    );
  }

  // src/texture/resize.ts
  function resizeTexture(opts) {
    requireProject();
    const host = getHost();
    const texture2 = opts.texture ? host.textures.find(opts.texture) : host.textures.defaultOrFirst();
    if (opts.texture && !texture2) {
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    }
    if (!texture2) throw new CommandError("E_NOT_FOUND", "No texture available");
    const oldWidth = Project?.texture_width ?? texture2.width;
    const oldHeight = Project?.texture_height ?? texture2.height;
    const scaleX = opts.width / oldWidth;
    const scaleY = opts.height / oldHeight;
    return host.undo.run(
      {
        textures: [texture2],
        bitmap: true,
        elements: [...Cube.all],
        uv_only: true,
        uv_mode: true
      },
      "resize_texture",
      () => {
        texture2.edit((ctx, canvas) => {
          const previous = document.createElement("canvas");
          previous.width = canvas.width;
          previous.height = canvas.height;
          previous.getContext("2d")?.drawImage(canvas, 0, 0);
          canvas.width = opts.width;
          canvas.height = opts.height;
          ctx.imageSmoothingEnabled = false;
          ctx.clearRect(0, 0, opts.width, opts.height);
          ctx.drawImage(previous, 0, 0, opts.width, opts.height);
        }, "resize_texture");
        if (opts.rescale_uvs !== false) {
          for (const cube of Cube.all) {
            if (cube.uv_offset)
              cube.uv_offset = [
                cube.uv_offset[0] * scaleX,
                cube.uv_offset[1] * scaleY
              ];
            for (const face of Object.values(cube.faces ?? {})) {
              if (!face.uv) continue;
              face.uv = [
                face.uv[0] * scaleX,
                face.uv[1] * scaleY,
                face.uv[2] * scaleX,
                face.uv[3] * scaleY
              ];
            }
          }
        }
        if (Project) {
          Project.texture_width = opts.width;
          Project.texture_height = opts.height;
        }
        refreshView([...Cube.all]);
        return {
          ok: true,
          undo_label: "resize_texture",
          size: [opts.width, opts.height],
          uv_scale: [scaleX, scaleY]
        };
      }
    );
  }

  // src/paint/texture-revision.ts
  function resolveTexture(ref) {
    const host = getHost();
    const texture2 = ref ? host.textures.find(ref) : host.textures.defaultOrFirst();
    if (!texture2) {
      throw new CommandError(
        "E_NOT_FOUND",
        ref ? `Texture not found: ${ref}` : "No texture available"
      );
    }
    return texture2;
  }
  async function revisionCanvas(texture2) {
    const image = new Image();
    await new Promise((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new CommandError("E_BLOCKBENCH_ERROR", "Texture decode failed"));
      image.src = texture2.toDataURL(Math.max(texture2.width, texture2.height));
    });
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    canvas.getContext("2d")?.drawImage(image, 0, 0);
    return canvas;
  }
  function revisionFromPixels(data, width, height) {
    let hash = 2166136261;
    const mix = (value) => {
      hash ^= value;
      hash = Math.imul(hash, 16777619) >>> 0;
    };
    for (const value of data) mix(value);
    for (const value of [width & 255, width >>> 8, height & 255, height >>> 8])
      mix(value);
    return `fnv1a32:${hash.toString(16).padStart(8, "0")}`;
  }
  async function textureRevision(texture2) {
    const canvas = await revisionCanvas(texture2);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    return revisionFromPixels(
      ctx.getImageData(0, 0, canvas.width, canvas.height).data,
      canvas.width,
      canvas.height
    );
  }
  async function assertTextureRevision(texture2, expected) {
    if (!expected) return;
    const actual = await textureRevision(texture2);
    if (actual !== expected) {
      throw new CommandError(
        "E_PARTIAL_FORBIDDEN",
        "Texture changed since it was read; refresh and retry",
        { expected, actual }
      );
    }
  }
  async function getTextureRevision(opts) {
    const texture2 = resolveTexture(opts.texture);
    return {
      texture: texture2.name,
      uuid: texture2.uuid,
      width: texture2.width,
      height: texture2.height,
      revision: await textureRevision(texture2)
    };
  }

  // src/paint/texture-pixels.ts
  function texture(ref) {
    const host = getHost();
    const hit = ref ? host.textures.find(ref) : host.textures.defaultOrFirst();
    if (!hit) {
      throw new CommandError(
        "E_NOT_FOUND",
        ref ? `Texture not found: ${ref}` : "No texture available"
      );
    }
    return hit;
  }
  function faceSpace(ref) {
    const cube = requireCube(ref.cube);
    if (!cube.faces?.[ref.face]) {
      throw new CommandError(
        "E_NOT_FOUND",
        `Face not found: ${ref.cube}.${ref.face}`
      );
    }
    return { cube, space: resolveFaceSpace(cube, ref.face) };
  }
  function parseColor(value) {
    if (typeof CSS !== "undefined" && !CSS.supports("color", value)) {
      throw new CommandError("E_INVALID_PARAM", `Invalid CSS color: ${value}`);
    }
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "#000000";
    ctx.fillStyle = value;
    ctx.fillRect(0, 0, 1, 1);
    const p = ctx.getImageData(0, 0, 1, 1).data;
    return [p[0], p[1], p[2], p[3]];
  }
  function rgbaHex(rgba) {
    return `#${rgba.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
  }
  function setPixel(data, x, y, rgba) {
    if (x < 0 || y < 0 || x >= data.width || y >= data.height) return false;
    const i = (y * data.width + x) * 4;
    data.data.set(rgba, i);
    return true;
  }
  function pixel(data, x, y) {
    if (x < 0 || y < 0 || x >= data.width || y >= data.height)
      return [0, 0, 0, 0];
    const i = (y * data.width + x) * 4;
    return [data.data[i], data.data[i + 1], data.data[i + 2], data.data[i + 3]];
  }
  async function loadCanvas(tex) {
    const image = new Image();
    await new Promise((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new CommandError("E_BLOCKBENCH_ERROR", "Texture decode failed"));
      image.src = tex.toDataURL(Math.max(tex.width, tex.height));
    });
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    canvas.getContext("2d")?.drawImage(image, 0, 0);
    return canvas;
  }
  function assertGrid(rows, space) {
    const grid = rows.map((row) => Array.from(row));
    if (grid.length !== space.height || grid.some((row) => row.length !== space.width)) {
      throw new CommandError(
        "E_INVALID_PARAM",
        `Grid must be exactly ${space.width}\xD7${space.height} face-local texels`
      );
    }
    return grid;
  }
  async function paintFaceGrid(opts) {
    requireProject();
    const tex = texture(opts.texture);
    await assertTextureRevision(tex, opts.expected_revision);
    const palette = /* @__PURE__ */ new Map();
    for (const [symbol, color2] of Object.entries(opts.palette)) {
      if (Array.from(symbol).length !== 1) {
        throw new CommandError(
          "E_INVALID_PARAM",
          `Palette key must be one symbol: ${symbol}`
        );
      }
      palette.set(symbol, color2 === null ? [0, 0, 0, 0] : parseColor(color2));
    }
    const jobs = opts.faces.map((item) => {
      const target = faceSpace(item);
      return {
        ...target,
        face: item.face,
        grid: assertGrid(item.rows, target.space)
      };
    });
    let count = 0;
    const result = getHost().undo.run(
      {
        elements: jobs.map((j) => j.cube),
        textures: [tex],
        bitmap: true,
        uv_only: true
      },
      "paint_face_grid",
      (track) => {
        track.addTextures([tex]);
        for (const job of jobs) tex.applyToCube(job.cube.uuid, [job.face]);
        tex.edit((ctx, canvas) => {
          const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
          for (const job of jobs) {
            for (let y = 0; y < job.space.height; y += 1) {
              for (let x = 0; x < job.space.width; x += 1) {
                const symbol = job.grid[y][x];
                const color2 = palette.get(symbol);
                if (!color2)
                  throw new CommandError(
                    "E_INVALID_PARAM",
                    `Unknown palette symbol: ${symbol}`
                  );
                const [ax, ay] = faceLocalToAtlas(job.space, x, y);
                if (!setPixel(image, ax, ay, color2)) {
                  throw new CommandError(
                    "E_INVALID_PARAM",
                    `Mapped pixel outside atlas: ${ax},${ay}`
                  );
                }
                count += 1;
              }
            }
          }
          ctx.putImageData(image, 0, 0);
        }, "paint_face_grid");
        refreshView(jobs.map((j) => j.cube));
        return {
          ok: true,
          undo_label: "paint_face_grid",
          faces: jobs.length,
          pixels: count
        };
      }
    );
    return { ...result, revision: await textureRevision(tex) };
  }
  async function getFaceGrid(opts) {
    requireProject();
    const tex = texture(opts.texture);
    const { space } = faceSpace(opts);
    const canvas = await loadCanvas(tex);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const rows = [];
    for (let y = 0; y < space.height; y += 1) {
      const row = [];
      for (let x = 0; x < space.width; x += 1) {
        const [ax, ay] = faceLocalToAtlas(space, x, y);
        row.push(rgbaHex(pixel(image, ax, ay)));
      }
      rows.push(row);
    }
    return {
      cube: opts.cube,
      face: opts.face,
      width: space.width,
      height: space.height,
      rows,
      revision: revisionFromPixels(image.data, image.width, image.height)
    };
  }
  async function editTexturePixels(opts) {
    requireProject();
    const tex = texture(opts.texture);
    await assertTextureRevision(tex, opts.expected_revision);
    const target = opts.face ? faceSpace(opts.face) : void 0;
    const colors = opts.pixels.map((p) => ({
      ...p,
      rgba: p.color === null ? [0, 0, 0, 0] : parseColor(p.color)
    }));
    let changed = 0;
    const result = getHost().undo.run(
      { textures: [tex], bitmap: true },
      "edit_texture_pixels",
      (track) => {
        track.addTextures([tex]);
        tex.edit((ctx, canvas) => {
          const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
          for (const p of colors) {
            if (target && (p.x >= target.space.width || p.y >= target.space.height)) {
              throw new CommandError(
                "E_INVALID_PARAM",
                `Face-local pixel outside ${target.space.width}\xD7${target.space.height}: ${p.x},${p.y}`
              );
            }
            const [x, y] = target ? faceLocalToAtlas(target.space, p.x, p.y) : [p.x, p.y];
            if (!setPixel(image, x, y, p.rgba))
              throw new CommandError(
                "E_INVALID_PARAM",
                `Pixel outside target: ${p.x},${p.y}`
              );
            changed += 1;
          }
          ctx.putImageData(image, 0, 0);
        }, "edit_texture_pixels");
        if (target) refreshView([target.cube]);
        else getHost().canvas.updateAll();
        return { ok: true, undo_label: "edit_texture_pixels", changed };
      }
    );
    return { ...result, revision: await textureRevision(tex) };
  }
  async function replaceTextureColor(opts) {
    requireProject();
    const tex = texture(opts.texture);
    await assertTextureRevision(tex, opts.expected_revision);
    const target = opts.face ? faceSpace(opts.face) : void 0;
    const from = parseColor(opts.from);
    const to = opts.to === null ? [0, 0, 0, 0] : parseColor(opts.to);
    const tolerance = opts.tolerance ?? 0;
    let replaced = 0;
    const matches = (p) => p.every((value, i) => Math.abs(value - from[i]) <= tolerance);
    const result = getHost().undo.run(
      { textures: [tex], bitmap: true },
      "replace_texture_color",
      (track) => {
        track.addTextures([tex]);
        tex.edit((ctx, canvas) => {
          const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const visit = (x, y) => {
            if (!matches(pixel(image, x, y))) return;
            setPixel(image, x, y, to);
            replaced += 1;
          };
          if (target) {
            for (let y = 0; y < target.space.height; y += 1)
              for (let x = 0; x < target.space.width; x += 1)
                visit(...faceLocalToAtlas(target.space, x, y));
          } else {
            for (let y = 0; y < image.height; y += 1)
              for (let x = 0; x < image.width; x += 1) visit(x, y);
          }
          ctx.putImageData(image, 0, 0);
        }, "replace_texture_color");
        getHost().canvas.updateAll();
        return {
          ok: true,
          undo_label: "replace_texture_color",
          replaced
        };
      }
    );
    return { ...result, revision: await textureRevision(tex) };
  }
  async function copyFacePixels(opts) {
    requireProject();
    const tex = texture(opts.texture);
    await assertTextureRevision(tex, opts.expected_revision);
    const source = faceSpace(opts.source);
    const target = faceSpace(opts.target);
    const rotation = Number(opts.rotation ?? "0");
    const turns = rotation === 90 || rotation === 270;
    const expectedW = turns ? source.space.height : source.space.width;
    const expectedH = turns ? source.space.width : source.space.height;
    if (target.space.width !== expectedW || target.space.height !== expectedH) {
      throw new CommandError(
        "E_INVALID_PARAM",
        `Target face must be ${expectedW}\xD7${expectedH} after rotation`
      );
    }
    const canvas = await loadCanvas(tex);
    const sourceCtx = canvas.getContext("2d");
    if (!sourceCtx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    const snapshot = sourceCtx.getImageData(0, 0, canvas.width, canvas.height);
    const colors = [];
    for (let y = 0; y < source.space.height; y += 1) {
      const row = [];
      for (let x = 0; x < source.space.width; x += 1)
        row.push(pixel(snapshot, ...faceLocalToAtlas(source.space, x, y)));
      colors.push(row);
    }
    const result = getHost().undo.run(
      { textures: [tex], bitmap: true },
      "copy_face_pixels",
      (track) => {
        track.addTextures([tex]);
        tex.applyToCube(target.cube.uuid, [opts.target.face]);
        tex.edit((ctx, output) => {
          const image = ctx.getImageData(0, 0, output.width, output.height);
          for (let sy = 0; sy < source.space.height; sy += 1) {
            for (let sx = 0; sx < source.space.width; sx += 1) {
              const fx = opts.flip_x ? source.space.width - 1 - sx : sx;
              const fy = opts.flip_y ? source.space.height - 1 - sy : sy;
              let tx = fx;
              let ty = fy;
              if (rotation === 90) {
                tx = source.space.height - 1 - fy;
                ty = fx;
              } else if (rotation === 180) {
                tx = source.space.width - 1 - fx;
                ty = source.space.height - 1 - fy;
              } else if (rotation === 270) {
                tx = fy;
                ty = source.space.width - 1 - fx;
              }
              setPixel(
                image,
                ...faceLocalToAtlas(target.space, tx, ty),
                colors[sy][sx]
              );
            }
          }
          ctx.putImageData(image, 0, 0);
        }, "copy_face_pixels");
        refreshView([target.cube]);
        return {
          ok: true,
          undo_label: "copy_face_pixels",
          pixels: source.space.width * source.space.height
        };
      }
    );
    return { ...result, revision: await textureRevision(tex) };
  }

  // src/paint/texture-inspect.ts
  function hex(data, i) {
    return `#${[data[i], data[i + 1], data[i + 2], data[i + 3]].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
  }
  async function analyzeTexturePalette(opts) {
    requireProject();
    const tex = texture(opts.texture);
    const canvas = await loadCanvas(tex);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const counts = /* @__PURE__ */ new Map();
    let total = 0;
    let transparent = 0;
    const visit = (x, y) => {
      const i = (y * image.width + x) * 4;
      const color2 = hex(image.data, i);
      counts.set(color2, (counts.get(color2) ?? 0) + 1);
      total += 1;
      if (image.data[i + 3] === 0) transparent += 1;
    };
    if (opts.face) {
      const { space } = faceSpace(opts.face);
      for (let y = 0; y < space.height; y += 1)
        for (let x = 0; x < space.width; x += 1)
          visit(...faceLocalToAtlas(space, x, y));
    } else {
      for (let y = 0; y < image.height; y += 1)
        for (let x = 0; x < image.width; x += 1) visit(x, y);
    }
    const colors = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, opts.max_colors ?? 32).map(([color2, count]) => ({
      color: color2,
      count,
      percent: total ? count / total : 0
    }));
    return {
      total_pixels: total,
      unique_colors: counts.size,
      transparent_pixels: transparent,
      colors
    };
  }
  async function getTextureRegion(opts) {
    requireProject();
    const tex = texture(opts.texture);
    const canvas = await loadCanvas(tex);
    const faceTarget = opts.face ? faceSpace(opts.face) : void 0;
    let rect = opts.rect ?? [
      0,
      0,
      canvas.width,
      canvas.height
    ];
    if (faceTarget) {
      const { space } = faceTarget;
      const points = [];
      for (let y2 = 0; y2 < space.height; y2 += 1)
        for (let x2 = 0; x2 < space.width; x2 += 1)
          points.push(faceLocalToAtlas(space, x2, y2));
      const minX = Math.min(...points.map((p) => p[0]));
      const minY = Math.min(...points.map((p) => p[1]));
      rect = [
        minX,
        minY,
        Math.max(...points.map((p) => p[0])) - minX + 1,
        Math.max(...points.map((p) => p[1])) - minY + 1
      ];
    }
    const [x, y, w, h] = rect;
    if (x + w > canvas.width || y + h > canvas.height)
      throw new CommandError("E_INVALID_PARAM", "Region exceeds texture bounds");
    const scale = opts.scale ?? 8;
    const outputWidth = faceTarget ? faceTarget.space.width : w;
    const outputHeight = faceTarget ? faceTarget.space.height : h;
    const out = document.createElement("canvas");
    out.width = outputWidth * scale;
    out.height = outputHeight * scale;
    const ctx = out.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    if (opts.checkerboard !== false) {
      for (let py = 0; py < outputHeight; py += 1)
        for (let px = 0; px < outputWidth; px += 1) {
          ctx.fillStyle = (px + py) % 2 ? "#9aa0a6" : "#d5d8dc";
          ctx.fillRect(px * scale, py * scale, scale, scale);
        }
    }
    ctx.imageSmoothingEnabled = false;
    if (faceTarget) {
      for (let py = 0; py < faceTarget.space.height; py += 1) {
        for (let px = 0; px < faceTarget.space.width; px += 1) {
          const [ax, ay] = faceLocalToAtlas(faceTarget.space, px, py);
          ctx.drawImage(
            canvas,
            ax,
            ay,
            1,
            1,
            px * scale,
            py * scale,
            scale,
            scale
          );
        }
      }
    } else {
      ctx.drawImage(canvas, x, y, w, h, 0, 0, out.width, out.height);
    }
    if (opts.grid !== false && scale >= 4) {
      ctx.strokeStyle = "rgba(0,0,0,.35)";
      ctx.lineWidth = 1;
      for (let px = 0; px <= outputWidth; px += 1) {
        ctx.beginPath();
        ctx.moveTo(px * scale + 0.5, 0);
        ctx.lineTo(px * scale + 0.5, out.height);
        ctx.stroke();
      }
      for (let py = 0; py <= outputHeight; py += 1) {
        ctx.beginPath();
        ctx.moveTo(0, py * scale + 0.5);
        ctx.lineTo(out.width, py * scale + 0.5);
        ctx.stroke();
      }
    }
    return {
      width: out.width,
      height: out.height,
      source: rect,
      mime: "image/png",
      data_url: out.toDataURL("image/png")
    };
  }

  // src/texture/png-io.ts
  function base64(bytes) {
    let binary = "";
    for (let i = 0; i < bytes.length; i += 32768)
      binary += String.fromCharCode(...bytes.subarray(i, i + 32768));
    return btoa(binary);
  }
  function decodeDataUrl(url) {
    const encoded = url.split(",", 2)[1];
    if (!encoded)
      throw new CommandError("E_BLOCKBENCH_ERROR", "Invalid texture data URL");
    const binary = atob(encoded);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
    return out;
  }
  async function decodePng(bytes) {
    const image = new Image();
    await new Promise((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new CommandError("E_INVALID_PARAM", "PNG decode failed"));
      image.src = `data:image/png;base64,${base64(bytes)}`;
    });
    return image;
  }
  async function importTexturePng(session2, opts) {
    requireProject();
    const bytes = readScopedBinary(session2, opts.path);
    const image = await decodePng(bytes);
    const host = getHost();
    const existing = opts.texture ? host.textures.find(opts.texture) : void 0;
    if (opts.texture && !existing)
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    if (existing) await assertTextureRevision(existing, opts.expected_revision);
    const oldWidth = Project?.texture_width;
    const oldHeight = Project?.texture_height;
    const result = host.undo.run(
      { textures: existing ? [existing] : [], bitmap: true, uv_mode: true },
      "import_texture_png",
      (track) => {
        const target = existing ?? host.textures.ensure({
          name: opts.name ?? "imported_texture",
          width: image.width,
          height: image.height,
          fill: "rgba(0,0,0,0)"
        });
        track.addTextures([target]);
        target.edit((ctx, canvas) => {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.imageSmoothingEnabled = false;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0);
        }, "import_texture_png");
        if (opts.resize_project !== false && Project) {
          Project.texture_width = image.width;
          Project.texture_height = image.height;
        } else if (Project) {
          if (oldWidth !== void 0) Project.texture_width = oldWidth;
          if (oldHeight !== void 0) Project.texture_height = oldHeight;
        }
        host.canvas.updateAll();
        return {
          ok: true,
          undo_label: "import_texture_png",
          name: target.name,
          uuid: target.uuid,
          size: [image.width, image.height],
          bytes: bytes.byteLength
        };
      }
    );
    const imported = host.textures.find(result.uuid);
    if (!imported)
      throw new CommandError(
        "E_BLOCKBENCH_ERROR",
        "Imported texture disappeared"
      );
    return { ...result, revision: await textureRevision(imported) };
  }
  function exportTexturePng(session2, opts) {
    requireProject();
    const texture2 = texture(opts.texture);
    const bytes = decodeDataUrl(
      texture2.toDataURL(Math.max(texture2.width, texture2.height))
    );
    const result = writeScopedBinary(session2, opts.path, bytes, opts.overwrite);
    return {
      ok: true,
      ...result,
      name: texture2.name,
      size: [texture2.width, texture2.height]
    };
  }

  // src/paint/texture-ops.ts
  function color(value) {
    if (value === null) return [0, 0, 0, 0];
    if (typeof CSS !== "undefined" && !CSS.supports("color", value))
      throw new CommandError("E_INVALID_PARAM", `Invalid CSS color: ${value}`);
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    ctx.fillStyle = value;
    ctx.fillRect(0, 0, 1, 1);
    const p = ctx.getImageData(0, 0, 1, 1).data;
    return [p[0], p[1], p[2], p[3]];
  }
  function read(data, x, y) {
    const i = (y * data.width + x) * 4;
    return [data.data[i], data.data[i + 1], data.data[i + 2], data.data[i + 3]];
  }
  function write(data, x, y, p) {
    data.data.set(p, (y * data.width + x) * 4);
  }
  function close(a, b, tolerance) {
    return a.every((v, i) => Math.abs(v - b[i]) <= tolerance);
  }
  async function floodFillTexture(opts) {
    requireProject();
    const texture2 = texture(opts.texture);
    await assertTextureRevision(texture2, opts.expected_revision);
    const face = opts.face ? faceSpace(opts.face) : void 0;
    const width = face?.space.width ?? texture2.width;
    const height = face?.space.height ?? texture2.height;
    if (opts.x >= width || opts.y >= height)
      throw new CommandError(
        "E_INVALID_PARAM",
        `Seed outside ${width}\xD7${height}`
      );
    const target = color(opts.color);
    const tolerance = opts.tolerance ?? 0;
    const cap = opts.max_pixels ?? 65536;
    let filled = 0;
    const result = getHost().undo.run(
      { textures: [texture2], bitmap: true },
      "flood_fill_texture",
      (track) => {
        track.addTextures([texture2]);
        texture2.edit((ctx, canvas) => {
          const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const atlas = (x, y) => face ? faceLocalToAtlas(face.space, x, y) : [x, y];
          const start = read(image, ...atlas(opts.x, opts.y));
          if (close(start, target, 0)) return;
          const queue = [[opts.x, opts.y]];
          const seen = new Uint8Array(width * height);
          const neighbors = opts.diagonal ? [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [-1, 1],
            [1, -1],
            [-1, -1]
          ] : [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
          ];
          for (let head = 0; head < queue.length; head += 1) {
            const [x, y] = queue[head];
            if (x < 0 || y < 0 || x >= width || y >= height) continue;
            const key = y * width + x;
            if (seen[key]) continue;
            seen[key] = 1;
            const point = atlas(x, y);
            if (!close(read(image, ...point), start, tolerance)) continue;
            write(image, ...point, target);
            filled += 1;
            if (filled > cap)
              throw new CommandError(
                "E_INVALID_PARAM",
                `Flood fill exceeds max_pixels ${cap}`
              );
            for (const [dx, dy] of neighbors) queue.push([x + dx, y + dy]);
          }
          ctx.putImageData(image, 0, 0);
        }, "flood_fill_texture");
        getHost().canvas.updateAll();
        return { ok: true, undo_label: "flood_fill_texture", filled };
      }
    );
    return { ...result, revision: await textureRevision(texture2) };
  }
  async function transformTextureRegion(opts) {
    requireProject();
    const texture2 = texture(opts.texture);
    await assertTextureRevision(texture2, opts.expected_revision);
    const face = opts.face ? faceSpace(opts.face) : void 0;
    const rect = opts.rect ?? [0, 0, face.space.width, face.space.height];
    const [rx, ry, w, h] = rect;
    if (face && (rx !== 0 || ry !== 0))
      throw new CommandError(
        "E_INVALID_PARAM",
        "Face transforms use the full face"
      );
    if ((opts.operation === "rotate_90" || opts.operation === "rotate_270") && w !== h)
      throw new CommandError(
        "E_INVALID_PARAM",
        "Quarter-turn region must be square"
      );
    const result = getHost().undo.run(
      { textures: [texture2], bitmap: true },
      "transform_texture_region",
      (track) => {
        track.addTextures([texture2]);
        texture2.edit((ctx, canvas) => {
          if (!face && (rx + w > canvas.width || ry + h > canvas.height))
            throw new CommandError(
              "E_INVALID_PARAM",
              "Region exceeds texture bounds"
            );
          const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const atlas = (x, y) => face ? faceLocalToAtlas(face.space, x, y) : [rx + x, ry + y];
          const source = [];
          for (let y = 0; y < h; y += 1) {
            const row = [];
            for (let x = 0; x < w; x += 1) row.push(read(image, ...atlas(x, y)));
            source.push(row);
          }
          for (let y = 0; y < h; y += 1)
            for (let x = 0; x < w; x += 1) {
              let sx = x;
              let sy = y;
              if (opts.operation === "flip_x") sx = w - 1 - x;
              else if (opts.operation === "flip_y") sy = h - 1 - y;
              else if (opts.operation === "rotate_180") {
                sx = w - 1 - x;
                sy = h - 1 - y;
              } else if (opts.operation === "rotate_90") {
                sx = y;
                sy = h - 1 - x;
              } else {
                sx = w - 1 - y;
                sy = x;
              }
              write(image, ...atlas(x, y), source[sy][sx]);
            }
          ctx.putImageData(image, 0, 0);
        }, "transform_texture_region");
        getHost().canvas.updateAll();
        return {
          ok: true,
          undo_label: "transform_texture_region",
          pixels: w * h
        };
      }
    );
    return { ...result, revision: await textureRevision(texture2) };
  }

  // src/paint/texture-quality.ts
  function rgbaKey(data, index) {
    return `${data[index]},${data[index + 1]},${data[index + 2]},${data[index + 3]}`;
  }
  async function auditTextureQuality(opts) {
    requireProject();
    const texture2 = texture(opts.texture);
    const canvas = await loadCanvas(texture2);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const refs = opts.faces ?? Cube.all.flatMap(
      (cube) => FACE_NAMES.filter((face) => cube.faces?.[face]).map((face) => ({
        cube: cube.uuid,
        face
      }))
    );
    const findings = [];
    for (const ref of refs) {
      const { cube, space } = faceSpace(ref);
      const label = `${cube.name}.${ref.face}`;
      const colors = /* @__PURE__ */ new Map();
      const alpha = [];
      let isolated = 0;
      let transparent = 0;
      for (let y = 0; y < space.height; y += 1) {
        const row = [];
        for (let x = 0; x < space.width; x += 1) {
          const [ax, ay] = faceLocalToAtlas(space, x, y);
          const i = (ay * image.width + ax) * 4;
          const key = rgbaKey(image.data, i);
          colors.set(key, (colors.get(key) ?? 0) + 1);
          row.push(image.data[i + 3]);
          if (image.data[i + 3] === 0) transparent += 1;
        }
        alpha.push(row);
      }
      const pixels = space.width * space.height;
      const dominant = Math.max(...colors.values());
      const baseRatio = dominant / pixels;
      const paletteLimit = opts.palette_limit ?? 8;
      if (transparent === pixels) {
        findings.push({
          severity: "error",
          code: "EMPTY_FACE_TEXTURE",
          face: label,
          message: "Face is fully transparent and will not be visible."
        });
      } else if (!opts.glass && transparent > 0) {
        findings.push({
          severity: "info",
          code: "PARTIAL_TRANSPARENCY",
          face: label,
          message: `${(transparent / pixels * 100).toFixed(1)}% of texels are fully transparent; verify holes are intentional.`
        });
      }
      if (colors.size > paletteLimit) {
        findings.push({
          severity: "warn",
          code: "PALETTE_EXCESS",
          face: label,
          message: `${colors.size} exact RGBA colors exceed palette_limit ${paletteLimit}.`
        });
      }
      if (baseRatio < (opts.min_base_ratio ?? 0.6)) {
        findings.push({
          severity: "warn",
          code: "WEAK_BASE_COLOR",
          face: label,
          message: `Dominant color covers only ${(baseRatio * 100).toFixed(1)}%; material may read as noisy.`
        });
      }
      for (let y = 0; y < space.height; y += 1) {
        for (let x = 0; x < space.width; x += 1) {
          if (alpha[y][x] === 0) continue;
          let neighbors = 0;
          for (const [dx, dy] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
          ]) {
            if (alpha[y + dy]?.[x + dx] > 0) neighbors += 1;
          }
          if (neighbors === 0) isolated += 1;
        }
      }
      if (isolated > Math.max(1, pixels * 0.02)) {
        findings.push({
          severity: "info",
          code: "ISOLATED_PIXELS",
          face: label,
          message: `${isolated} opaque pixels have no orthogonal neighbor; verify intentional sparkles/details.`
        });
      }
      if (colors.size === 1) {
        findings.push({
          severity: "info",
          code: "FLAT_FACE",
          face: label,
          message: "Face is a uniform fill; verify that flat material is intentional."
        });
      }
      if (opts.glass) {
        let edgeAlpha = 0;
        let edgeCount = 0;
        let centerAlpha = 0;
        let centerCount = 0;
        let opaque = 0;
        for (let y = 0; y < space.height; y += 1)
          for (let x = 0; x < space.width; x += 1) {
            const value = alpha[y][x];
            if (value >= 230) opaque += 1;
            if (x === 0 || y === 0 || x === space.width - 1 || y === space.height - 1) {
              edgeAlpha += value;
              edgeCount += 1;
            } else {
              centerAlpha += value;
              centerCount += 1;
            }
          }
        const edgeMean = edgeAlpha / Math.max(1, edgeCount);
        const centerMean = centerAlpha / Math.max(1, centerCount);
        if (edgeMean <= centerMean)
          findings.push({
            severity: "warn",
            code: "GLASS_EDGE_WEAK",
            face: label,
            message: "Glass edges are not more opaque than the center; hollow form may disappear."
          });
        if (opaque / pixels > 0.35)
          findings.push({
            severity: "warn",
            code: "GLASS_TOO_OPAQUE",
            face: label,
            message: `${(opaque / pixels * 100).toFixed(1)}% of texels are near-opaque.`
          });
      }
    }
    return {
      texture: texture2.name,
      revision: await textureRevision(texture2),
      faces: refs.length,
      findings,
      summary: {
        errors: findings.filter((f) => f.severity === "error").length,
        warns: findings.filter((f) => f.severity === "warn").length,
        infos: findings.filter((f) => f.severity === "info").length
      }
    };
  }

  // src/geometry/transform.ts
  function rotatePoint(point, pivot, rotation) {
    let [x, y, z] = [
      point[0] - pivot[0],
      point[1] - pivot[1],
      point[2] - pivot[2]
    ];
    for (const [axis, degrees] of rotation.entries()) {
      if (degrees === 0) continue;
      const r = degrees * Math.PI / 180;
      const c = Math.cos(r);
      const s = Math.sin(r);
      if (axis === 0) [y, z] = [y * c - z * s, y * s + z * c];
      else if (axis === 1) [x, z] = [x * c + z * s, -x * s + z * c];
      else [x, y] = [x * c - y * s, x * s + y * c];
    }
    return [x + pivot[0], y + pivot[1], z + pivot[2]];
  }
  function transformElements(opts) {
    requireProject();
    const elements = opts.refs.map((ref) => {
      const element = findElement(ref);
      if (!element)
        throw new CommandError("E_NOT_FOUND", `Element not found: ${ref}`);
      return element;
    });
    const translate = opts.translate ?? [0, 0, 0];
    const scale = opts.scale ?? [1, 1, 1];
    const rotate3 = opts.rotate ?? [0, 0, 0];
    if (scale.some((value) => value <= 0))
      throw new CommandError(
        "E_INVALID_PARAM",
        "Scale components must be positive; use mirror_elements for reflection"
      );
    const pivot = opts.pivot ?? [0, 0, 0];
    const label = opts.undo_label ?? "transform_elements";
    return getHost().undo.run({ outliner: true, elements }, label, () => {
      for (const element of elements) {
        const transform = (point) => {
          const scaled = point.map(
            (value, i) => pivot[i] + (value - pivot[i]) * scale[i]
          );
          const rotated2 = rotatePoint(scaled, pivot, rotate3);
          return rotated2.map((value, i) => value + translate[i]);
        };
        if (element instanceof Cube) {
          const center2 = element.from.map(
            (value, i) => (value + element.to[i]) / 2
          );
          const nextCenter = transform(center2);
          const halfSize = element.from.map(
            (value, i) => Math.abs(element.to[i] - value) * Math.abs(scale[i]) / 2
          );
          element.from = nextCenter.map(
            (value, i) => value - halfSize[i]
          );
          element.to = nextCenter.map((value, i) => value + halfSize[i]);
          element.origin = transform(element.origin);
          element.rotation = element.rotation.map(
            (value, i) => value + rotate3[i]
          );
          if (opts.uv_policy === "auto") {
            element.autouv = 1;
            element.mapAutoUV?.();
          }
        } else {
          element.origin = transform(element.origin);
          element.rotation = element.rotation.map(
            (value, i) => value + rotate3[i]
          );
        }
      }
      refreshView(elements);
      return {
        ok: true,
        undo_label: label,
        updated: elements.map((e) => e.uuid)
      };
    });
  }

  // src/geometry/array.ts
  function copyFaces(source, target) {
    for (const [name, face] of Object.entries(source.faces ?? {})) {
      const output = target.faces?.[name];
      if (!output || !face) continue;
      if (face.uv) output.uv = [...face.uv];
      output.rotation = face.rotation ?? 0;
      output.texture = face.texture;
    }
  }
  function arrayCubes(opts) {
    requireProject();
    const sources = opts.sources.map(requireCube);
    const host = getHost();
    const parent = opts.parent ? parentOf(opts.parent) : void 0;
    return host.undo.run(
      { outliner: true, elements: [] },
      "array_cubes",
      (track) => {
        const created = [];
        for (let index = 1; index <= opts.count; index += 1)
          for (const source of sources) {
            const delta = opts.offset.map((value) => value * index);
            const name = (opts.name_pattern ?? "{name}_{index}").replace(/\{name\}/g, source.name).replace(/\{index\}/g, String(index));
            const targetParent = parent ?? (!source.parent || source.parent === "root" || typeof source.parent === "string" ? "root" : source.parent);
            const cube = new Cube({
              name,
              from: source.from.map((v, i) => v + delta[i]),
              to: source.to.map((v, i) => v + delta[i]),
              origin: source.origin.map((v, i) => v + delta[i]),
              rotation: [...source.rotation],
              inflate: source.inflate ?? 0,
              box_uv: source.box_uv,
              mirror_uv: source.mirror_uv,
              autouv: opts.uv_policy === "auto" ? 1 : 0,
              uv_offset: source.uv_offset ? [...source.uv_offset] : void 0
            }).init().addTo(targetParent);
            if (opts.uv_policy === "auto") cube.mapAutoUV?.();
            else copyFaces(source, cube);
            const row = { uuid: cube.uuid, name: cube.name, type: "cube" };
            created.push(row);
            track.addElements([
              cube
            ]);
          }
        refreshView(created);
        return { ok: true, undo_label: "array_cubes", created };
      }
    );
  }

  // src/geometry/measure.ts
  function cubeBounds(cube) {
    return cubeWorldBounds(cube);
  }
  function descendantCubes(group) {
    const out = [];
    const visit = (child) => {
      if (child instanceof Cube) out.push(child);
      else
        for (const nested of child.children ?? []) visit(nested);
    };
    for (const child of group.children ?? []) visit(child);
    return out;
  }
  function measureModel(opts) {
    requireProject();
    const refs = opts.refs?.length ? opts.refs.map((ref) => {
      const element = findElement(ref);
      if (!element)
        throw new CommandError("E_NOT_FOUND", `Element not found: ${ref}`);
      return element;
    }) : [...Cube.all];
    const rows = refs.map((element) => {
      const cubes = element instanceof Cube ? [element] : descendantCubes(element);
      const boxes2 = cubes.map(cubeBounds);
      const min2 = [0, 1, 2].map(
        (i) => boxes2.length ? Math.min(...boxes2.map((b) => b.min[i])) : element.origin[i]
      );
      const max2 = [0, 1, 2].map(
        (i) => boxes2.length ? Math.max(...boxes2.map((b) => b.max[i])) : element.origin[i]
      );
      return {
        ref: element.uuid,
        name: element.name,
        type: element instanceof Cube ? "cube" : "group",
        cubes: cubes.length,
        min: min2,
        max: max2,
        size: min2.map((v, i) => max2[i] - v),
        center: min2.map((v, i) => (v + max2[i]) / 2),
        volume: cubes.reduce((sum, cube) => sum + geometricCubeVolume(cube), 0)
      };
    });
    const boxes = rows.filter((r) => r.cubes > 0);
    const uniqueCubes = /* @__PURE__ */ new Map();
    for (const element of refs) {
      const cubes = element instanceof Cube ? [element] : descendantCubes(element);
      for (const cube of cubes) uniqueCubes.set(cube.uuid, cube);
    }
    const min = [0, 1, 2].map(
      (i) => boxes.length ? Math.min(...boxes.map((r) => r.min[i])) : 0
    );
    const max = [0, 1, 2].map(
      (i) => boxes.length ? Math.max(...boxes.map((r) => r.max[i])) : 0
    );
    return {
      bounds: {
        min,
        max,
        size: min.map((v, i) => max[i] - v),
        center: min.map((v, i) => (v + max[i]) / 2)
      },
      cubes: uniqueCubes.size,
      total_volume: [...uniqueCubes.values()].reduce(
        (sum, cube) => sum + geometricCubeVolume(cube),
        0
      ),
      elements: rows
    };
  }
  function auditSymmetry(opts) {
    requireProject();
    const axis = opts.axis ?? "x";
    const ai = axis === "x" ? 0 : axis === "y" ? 1 : 2;
    const pivot = opts.pivot ?? 0;
    const tolerance = opts.tolerance ?? 1e-3;
    const pairs = opts.pairs.map((pair) => {
      const left = findElement(pair.left);
      const right = findElement(pair.right);
      if (!left || !right)
        throw new CommandError(
          "E_NOT_FOUND",
          `Symmetry pair missing: ${pair.left}/${pair.right}`
        );
      if (left instanceof Cube !== right instanceof Cube)
        throw new CommandError(
          "E_INVALID_PARAM",
          "Symmetry pair types must match"
        );
      const points = (element) => element instanceof Cube ? {
        min: cubeBounds(element).min,
        max: cubeBounds(element).max,
        origin: [...element.origin]
      } : {
        min: [...element.origin],
        max: [...element.origin],
        origin: [...element.origin]
      };
      const a = points(left);
      const b = points(right);
      const expectedMin = [...a.min];
      const expectedMax = [...a.max];
      const expectedOrigin = [...a.origin];
      expectedMin[ai] = pivot * 2 - a.max[ai];
      expectedMax[ai] = pivot * 2 - a.min[ai];
      expectedOrigin[ai] = pivot * 2 - a.origin[ai];
      const errors = [0, 1, 2].flatMap((i) => [
        Math.abs(expectedMin[i] - b.min[i]),
        Math.abs(expectedMax[i] - b.max[i]),
        Math.abs(expectedOrigin[i] - b.origin[i])
      ]);
      const max_error = Math.max(...errors);
      return {
        left: left.name,
        right: right.name,
        max_error,
        passed: max_error <= tolerance,
        expected: { min: expectedMin, max: expectedMax, origin: expectedOrigin },
        actual: b
      };
    });
    return {
      axis,
      pivot,
      pairs,
      summary: {
        passed: pairs.filter((p) => p.passed).length,
        failed: pairs.filter((p) => !p.passed).length
      }
    };
  }

  // src/geometry/advanced-array.ts
  function copyFaces2(source, target) {
    for (const [name, face] of Object.entries(source.faces ?? {})) {
      const output = target.faces?.[name];
      if (!output || !face) continue;
      if (face.uv) output.uv = [...face.uv];
      output.rotation = face.rotation ?? 0;
      output.texture = face.texture;
    }
  }
  function rotated(point, pivot, axis, degrees) {
    const out = point.map((value, i) => value - pivot[i]);
    const a = (axis + 1) % 3;
    const b = (axis + 2) % 3;
    const radians = degrees * Math.PI / 180;
    const av = out[a] * Math.cos(radians) - out[b] * Math.sin(radians);
    const bv = out[a] * Math.sin(radians) + out[b] * Math.cos(radians);
    out[a] = av;
    out[b] = bv;
    return out.map((value, i) => value + pivot[i]);
  }
  function cloneCube(source, parent, name, transform, rotation, uvPolicy) {
    const center2 = source.from.map((value, i) => (value + source.to[i]) / 2);
    const nextCenter = transform(center2);
    const half = source.from.map(
      (value, i) => Math.abs(source.to[i] - value) / 2
    );
    const cube = new Cube({
      name,
      from: nextCenter.map((value, i) => value - half[i]),
      to: nextCenter.map((value, i) => value + half[i]),
      origin: transform(source.origin),
      rotation,
      inflate: source.inflate ?? 0,
      box_uv: source.box_uv,
      mirror_uv: source.mirror_uv,
      uv_offset: source.uv_offset ? [...source.uv_offset] : void 0,
      autouv: uvPolicy === "auto" ? 1 : 0
    }).init().addTo(parent);
    if (uvPolicy === "auto") cube.mapAutoUV?.();
    else copyFaces2(source, cube);
    return cube;
  }
  function radialArrayCubes(opts) {
    requireProject();
    const sources = opts.sources.map(requireCube);
    const axis = opts.axis === "x" ? 0 : opts.axis === "z" ? 2 : 1;
    const total = opts.angle ?? 360;
    const targetParent = opts.parent ? parentOf(opts.parent) : void 0;
    const host = getHost();
    return host.undo.run({ outliner: true }, "radial_array_cubes", (track) => {
      const created = [];
      for (let index = 1; index < opts.count; index += 1) {
        const degrees = total * index / opts.count;
        for (const source of sources) {
          const parent = targetParent ?? (!source.parent || source.parent === "root" || typeof source.parent === "string" ? "root" : source.parent);
          const rotation = [...source.rotation];
          if (opts.rotate_cubes !== false) rotation[axis] += degrees;
          const name = (opts.name_pattern ?? "{name}_{index}").replace(/\{name\}/g, source.name).replace(/\{index\}/g, String(index));
          const cube = cloneCube(
            source,
            parent,
            name,
            (point) => rotated(point, opts.pivot, axis, degrees),
            rotation,
            opts.uv_policy ?? "share"
          );
          created.push({ uuid: cube.uuid, name: cube.name, type: "cube" });
          track.addElements([cube]);
        }
      }
      refreshView(created);
      return { ok: true, undo_label: "radial_array_cubes", created };
    });
  }
  function duplicateHierarchy(opts) {
    requireProject();
    const sourceRoot = requireGroup(opts.root);
    const suffix = opts.name_suffix ?? "_copy";
    const delta = opts.translate ?? [0, 0, 0];
    const targetParent = opts.parent ? parentOf(opts.parent) : "root";
    return getHost().undo.run(
      { outliner: true },
      "duplicate_hierarchy",
      (track) => {
        const created = [];
        const copyGroup = (source, parent) => {
          const group = new Group({
            name: `${source.name}${suffix}`,
            origin: source.origin.map((value, i) => value + delta[i]),
            rotation: [...source.rotation]
          }).init().addTo(parent);
          created.push({ uuid: group.uuid, name: group.name, type: "group" });
          track.addElements([group]);
          for (const child of source.children ?? []) {
            if (child instanceof Group) copyGroup(child, group);
            else {
              const cube = cloneCube(
                child,
                group,
                `${child.name}${suffix}`,
                (point) => point.map((value, i) => value + delta[i]),
                [...child.rotation],
                opts.uv_policy ?? "share"
              );
              created.push({ uuid: cube.uuid, name: cube.name, type: "cube" });
              track.addElements([cube]);
            }
          }
          return group;
        };
        copyGroup(sourceRoot, targetParent);
        refreshView(created);
        return { ok: true, undo_label: "duplicate_hierarchy", created };
      }
    );
  }

  // src/paint/uv-transform.ts
  function transformUvIslands(opts) {
    requireProject();
    const entries = opts.faces.map((target) => {
      const cube = requireCube(target.cube);
      const face = cube.faces?.[target.face];
      if (!face?.uv)
        throw new CommandError(
          "E_INVALID_PARAM",
          `Face has no UV: ${target.cube}.${target.face}`
        );
      return { cube, face };
    });
    const cubes = [...new Set(entries.map((entry) => entry.cube))];
    const points = entries.flatMap(({ face }) => [
      [face.uv[0], face.uv[1]],
      [face.uv[2], face.uv[3]]
    ]);
    const pivot = opts.pivot ?? [
      (Math.min(...points.map((point) => point[0])) + Math.max(...points.map((point) => point[0]))) / 2,
      (Math.min(...points.map((point) => point[1])) + Math.max(...points.map((point) => point[1]))) / 2
    ];
    const translate = opts.translate ?? [0, 0];
    const scale = opts.scale ?? [1, 1];
    const quarterTurns = Number(opts.rotate ?? "0") / 90;
    const transform = (point) => {
      let x = (point[0] - pivot[0]) * scale[0];
      let y = (point[1] - pivot[1]) * scale[1];
      for (let turn = 0; turn < quarterTurns; turn += 1) [x, y] = [-y, x];
      return [x + pivot[0] + translate[0], y + pivot[1] + translate[1]];
    };
    const next = entries.map(({ cube, face }) => ({
      cube,
      face,
      a: transform([face.uv[0], face.uv[1]]),
      b: transform([face.uv[2], face.uv[3]])
    }));
    const width = Project?.texture_width ?? 16;
    const height = Project?.texture_height ?? 16;
    if (opts.clamp_to_texture !== false && next.some(
      ({ a, b }) => [a, b].some(([x, y]) => x < 0 || y < 0 || x > width || y > height)
    )) {
      throw new CommandError(
        "E_INVALID_PARAM",
        `Transformed UV would leave ${width}\xD7${height} texture bounds`
      );
    }
    return getHost().undo.run(
      { elements: cubes, uv_only: true },
      "transform_uv_islands",
      () => {
        for (const { cube, face, a, b } of next) {
          cube.box_uv = false;
          face.uv = [a[0], a[1], b[0], b[1]];
          face.rotation = ((face.rotation ?? 0) + Number(opts.rotate ?? "0")) % 360;
        }
        refreshView(cubes);
        return {
          ok: true,
          undo_label: "transform_uv_islands",
          updated: cubes.map((cube) => cube.uuid)
        };
      }
    );
  }

  // src/texture/material-set.ts
  function auditMaterialSet(opts) {
    requireProject();
    const host = getHost();
    const entries = Object.entries(opts.channels).map(([channel, ref]) => {
      const texture2 = host.textures.find(ref);
      if (!texture2)
        throw new CommandError("E_NOT_FOUND", `Texture not found: ${ref}`);
      return { channel, texture: texture2 };
    });
    const base = entries.find((entry) => entry.channel === "base").texture;
    const findings = [];
    const powerOfTwo = (value) => (value & value - 1) === 0;
    for (const { channel, texture: texture2 } of entries) {
      if (texture2.width !== base.width || texture2.height !== base.height) {
        findings.push({
          severity: "error",
          code: "MATERIAL_SIZE_MISMATCH",
          message: `${channel} ${texture2.name} is ${texture2.width}\xD7${texture2.height}; base is ${base.width}\xD7${base.height}`
        });
      }
      if (opts.require_power_of_two !== false && (!powerOfTwo(texture2.width) || !powerOfTwo(texture2.height))) {
        findings.push({
          severity: "warn",
          code: "MATERIAL_NOT_POWER_OF_TWO",
          message: `${channel} ${texture2.name} is not power-of-two`
        });
      }
      if (opts.naming_prefix && !texture2.name.startsWith(opts.naming_prefix)) {
        findings.push({
          severity: "warn",
          code: "MATERIAL_NAME_MISMATCH",
          message: `${channel} ${texture2.name} does not start with ${opts.naming_prefix}`
        });
      }
    }
    return {
      channels: Object.fromEntries(
        entries.map(({ channel, texture: texture2 }) => [
          channel,
          {
            uuid: texture2.uuid,
            name: texture2.name,
            width: texture2.width,
            height: texture2.height
          }
        ])
      ),
      findings,
      summary: {
        channels: entries.length,
        errors: findings.filter((finding) => finding.severity === "error").length,
        warns: findings.filter((finding) => finding.severity === "warn").length
      }
    };
  }
  function ensureMaterialSet(opts) {
    requireProject();
    const defaults = {
      base: "#808080ff",
      emissive: "#000000ff",
      normal: "#8080ffff",
      specular: "#000000ff"
    };
    const host = getHost();
    return host.undo.run(
      { textures: [], bitmap: true },
      "ensure_material_set",
      (track) => {
        const textures = [...new Set(opts.channels)].map((channel) => {
          const texture2 = host.textures.ensure({
            name: `${opts.prefix}_${channel}`,
            width: opts.width,
            height: opts.height,
            fill: opts.fills?.[channel] ?? defaults[channel]
          });
          track.addTextures([texture2]);
          return {
            channel,
            uuid: texture2.uuid,
            name: texture2.name,
            width: texture2.width,
            height: texture2.height
          };
        });
        return { ok: true, undo_label: "ensure_material_set", textures };
      }
    );
  }

  // src/views/silhouette.ts
  function loadImage(dataUrl) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Cannot decode captured view"));
      image.src = dataUrl;
    });
  }
  async function analyzeViewSilhouette(opts) {
    const captures = await captureViews({
      views: opts.views,
      max_edge: opts.max_edge ?? 256,
      format: "png"
    });
    const rows = [];
    for (const view of captures.views) {
      const image = await loadImage(view.data_url);
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth || view.width;
      canvas.height = image.naturalHeight || view.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("No 2d context for silhouette analysis");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const alphaThreshold = opts.alpha_threshold ?? 8;
      const luminanceThreshold = opts.luminance_threshold ?? 245;
      let minX = canvas.width;
      let minY = canvas.height;
      let maxX = -1;
      let maxY = -1;
      let foreground = 0;
      for (let y = 0; y < canvas.height; y += 1)
        for (let x = 0; x < canvas.width; x += 1) {
          const offset = (y * canvas.width + x) * 4;
          const alpha = pixels[offset + 3];
          const luminance = pixels[offset] * 0.2126 + pixels[offset + 1] * 0.7152 + pixels[offset + 2] * 0.0722;
          if (alpha <= alphaThreshold || luminance >= luminanceThreshold)
            continue;
          foreground += 1;
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      const bounds = foreground ? [minX, minY, maxX + 1, maxY + 1] : [0, 0, 0, 0];
      rows.push({
        view: view.view,
        visible_face: view.visible_face,
        width: canvas.width,
        height: canvas.height,
        bounds,
        silhouette_size: [bounds[2] - bounds[0], bounds[3] - bounds[1]],
        foreground_pixels: foreground,
        coverage: foreground / Math.max(1, canvas.width * canvas.height),
        data_url: view.data_url
      });
    }
    return { views: rows };
  }

  // src/commands/animation-edit.ts
  function findAnimation(name) {
    requireProject();
    const all = globalThis.Animation?.all;
    const animation = all?.find((item) => item.name === name);
    if (!animation)
      throw new CommandError("E_NOT_FOUND", `Animation not found: ${name}`);
    return animation;
  }
  function channels(animator) {
    return ["rotations", "position", "scale"].flatMap((name) => {
      const keys = animator[name];
      return Array.isArray(keys) ? [[name, keys]] : [];
    });
  }
  function inspectAnimation(opts) {
    const animation = findAnimation(opts.name);
    const bones = Object.entries(animation.animators ?? {}).map(
      ([id, animator]) => ({
        id,
        name: animator.group?.name ?? id,
        channels: Object.fromEntries(
          channels(animator).map(([name, keys]) => [
            name,
            keys.map((key) => ({
              time: key.time,
              value: key.data_points?.[0] ? [
                key.data_points[0].x,
                key.data_points[0].y,
                key.data_points[0].z
              ] : null
            }))
          ])
        )
      })
    );
    return {
      name: animation.name,
      length: animation.length,
      loop: animation.loop,
      bones,
      summary: {
        bones: bones.length,
        keyframes: bones.reduce(
          (sum, bone2) => sum + Object.values(bone2.channels).reduce((n, keys) => n + keys.length, 0),
          0
        )
      }
    };
  }
  function transformAnimationKeys(opts) {
    const animation = findAnimation(opts.name);
    const wanted = opts.bones ? new Set(opts.bones) : null;
    const selected = Object.entries(animation.animators ?? {}).filter(
      ([id, animator]) => !wanted || wanted.has(id) || animator.group?.name && wanted.has(animator.group.name)
    );
    if (wanted && !selected.length)
      throw new CommandError("E_NOT_FOUND", "No requested animation bones found");
    return withUndo(
      { animations: [animation], keyframes: [] },
      `transform_animation_keys ${opts.name}`,
      () => {
        let updated = 0;
        const axis = opts.mirror_axis === "x" ? 0 : opts.mirror_axis === "y" ? 1 : 2;
        for (const [, animator] of selected) {
          for (const [channel, keys] of channels(animator)) {
            for (const key of keys) {
              key.time = Math.max(
                0,
                key.time * (opts.time_scale ?? 1) + (opts.time_offset ?? 0)
              );
              for (const point of key.data_points ?? []) {
                const values = [point.x, point.y, point.z];
                for (let i = 0; i < 3; i += 1)
                  values[i] *= opts.value_scale?.[i] ?? 1;
                if (opts.mirror_axis) {
                  if (channel === "position") values[axis] *= -1;
                  else if (channel === "rotations") {
                    for (let i = 0; i < 3; i += 1)
                      if (i !== axis) values[i] *= -1;
                  }
                }
                [point.x, point.y, point.z] = values;
              }
              updated += 1;
            }
          }
        }
        if (opts.time_scale !== void 0 || opts.time_offset !== void 0) {
          animation.length = Math.max(
            1e-3,
            animation.length * (opts.time_scale ?? 1) + (opts.time_offset ?? 0)
          );
        }
        return {
          ok: true,
          undo_label: `transform_animation_keys ${opts.name}`,
          updated_keyframes: updated
        };
      }
    );
  }

  // src/bb/inspect.ts
  function parentUuid(parent) {
    if (!parent || parent === "root") return null;
    return typeof parent === "string" ? parent : parent.uuid;
  }
  function textureRef2(value) {
    if (value === null || value === void 0 || value === false) return null;
    if (typeof value === "string" || typeof value === "number")
      return String(value);
    if (typeof value === "object") {
      const record = value;
      if (typeof record.uuid === "string") return record.uuid;
      if (typeof record.name === "string") return record.name;
    }
    return "assigned";
  }
  function listFormats() {
    const formats = globalThis.Formats;
    if (!formats) return [];
    return Object.entries(formats).map(([key, value]) => ({
      id: value.id ?? key,
      name: value.name ?? value.id ?? key,
      box_uv: typeof value.box_uv === "boolean" ? value.box_uv : null
    })).sort((a, b) => a.id.localeCompare(b.id));
  }
  function getElements(opts) {
    requireProject();
    const wanted = opts.refs?.length ? new Set(opts.refs) : null;
    const includes = (element) => !wanted || wanted.has(element.uuid) || wanted.has(element.name);
    return {
      groups: Group.all.filter(includes).map((group) => ({
        uuid: group.uuid,
        name: group.name,
        parent: parentUuid(group.parent),
        origin: [...group.origin],
        rotation: [...group.rotation],
        visibility: group.visibility !== false,
        children: (group.children ?? []).map((child) => child.uuid)
      })),
      cubes: Cube.all.filter(includes).map((cube) => ({
        uuid: cube.uuid,
        name: cube.name,
        parent: parentUuid(cube.parent),
        from: [...cube.from],
        to: [...cube.to],
        origin: [...cube.origin],
        rotation: [...cube.rotation],
        inflate: cube.inflate ?? 0,
        visibility: cube.visibility !== false,
        box_uv: cube.box_uv ?? false,
        uv_offset: cube.uv_offset ? [...cube.uv_offset] : null,
        mirror_uv: cube.mirror_uv ?? false,
        faces: Object.fromEntries(
          Object.entries(cube.faces ?? {}).map(([name, face]) => [
            name,
            {
              uv: face.uv ? [...face.uv] : null,
              rotation: face.rotation ?? 0,
              texture: textureRef2(face.texture)
            }
          ])
        )
      }))
    };
  }
  function listTextures() {
    requireProject();
    return Texture.all.map((texture2) => ({
      uuid: texture2.uuid,
      name: texture2.name,
      width: texture2.width,
      height: texture2.height
    }));
  }
  function listAnimations() {
    requireProject();
    const api = globalThis.Animation;
    return (api?.all ?? []).map((animation) => {
      const animators = Object.values(animation.animators ?? {});
      return {
        name: animation.name,
        length: animation.length ?? 0,
        loop: animation.loop ?? "once",
        bones: animators.length,
        keyframes: animators.reduce(
          (sum, animator) => sum + (animator.rotations?.length ?? 0) + (animator.position?.length ?? 0) + (animator.scale?.length ?? 0),
          0
        )
      };
    });
  }

  // src/geometry/update.ts
  function isDescendant(candidate, ancestor) {
    let current = candidate.parent;
    while (current && current !== "root") {
      if (typeof current === "string") return current === ancestor.uuid;
      if (current.uuid === ancestor.uuid) return true;
      current = current.parent;
    }
    return false;
  }
  function updateElements(opts) {
    requireProject();
    const resolved = opts.updates.map((update) => {
      const element = findElement(update.ref);
      if (!element)
        throw new CommandError("E_NOT_FOUND", `Element not found: ${update.ref}`);
      const parent = update.parent === void 0 ? void 0 : parentOf(update.parent);
      if (parent !== void 0 && parent !== "root" && element instanceof Group) {
        if (parent.uuid === element.uuid || isDescendant(parent, element)) {
          throw new CommandError(
            "E_INVALID_PARAM",
            `Reparenting ${element.name} would create a cycle`
          );
        }
      }
      if (element instanceof Group && (update.from || update.to || update.inflate !== void 0)) {
        throw new CommandError(
          "E_INVALID_PARAM",
          `Group ${element.name} does not support from, to, or inflate`
        );
      }
      return { update, element, parent };
    });
    const elements = [...new Set(resolved.map((item) => item.element))];
    const label = opts.undo_label ?? "update_elements";
    return getHost().undo.run({ outliner: true, elements }, label, () => {
      for (const { update, element, parent } of resolved) {
        if (update.name !== void 0) element.name = update.name;
        if (update.origin !== void 0) element.origin = [...update.origin];
        if (update.rotation !== void 0)
          element.rotation = [...update.rotation];
        if (update.visibility !== void 0) {
          element.visibility = update.visibility;
        }
        if (element instanceof Cube) {
          const dimensionsChanged = update.from !== void 0 || update.to !== void 0;
          if (update.from !== void 0) element.from = [...update.from];
          if (update.to !== void 0) element.to = [...update.to];
          if (update.inflate !== void 0) element.inflate = update.inflate;
          if (dimensionsChanged && opts.uv_policy === "auto") {
            element.autouv = 1;
            element.mapAutoUV?.();
          }
        }
        if (parent !== void 0) element.addTo(parent);
      }
      refreshView(elements);
      return {
        ok: true,
        undo_label: label,
        updated: elements.map((e) => e.uuid)
      };
    });
  }
  function setFaceUv(opts) {
    requireProject();
    const entries = opts.entries.map((entry) => {
      const cube = requireCube(entry.cube);
      const face = cube.faces?.[entry.face];
      if (!face)
        throw new CommandError(
          "E_INVALID_PARAM",
          `Face not found: ${entry.cube}.${entry.face}`
        );
      return { entry, cube, face };
    });
    const cubes = [...new Set(entries.map((item) => item.cube))];
    return getHost().undo.run(
      { elements: cubes, uv_only: true },
      "set_face_uv",
      () => {
        for (const { entry, cube, face } of entries) {
          cube.box_uv = false;
          face.uv = [...entry.uv];
          if (entry.rotation !== void 0) {
            face.rotation = entry.rotation;
          }
        }
        refreshView(cubes);
        return {
          ok: true,
          undo_label: "set_face_uv",
          updated: cubes.map((cube) => cube.uuid)
        };
      }
    );
  }

  // src/commands/management.ts
  function setProjectMeta(opts) {
    requireProject();
    const project = Project;
    return getHost().undo.run({ uv_mode: true }, "set_project_meta", () => {
      const updated = [];
      if (opts.name !== void 0) {
        project.name = opts.name;
        updated.push("name");
      }
      if (opts.geometry_name !== void 0) {
        project.geometry_name = opts.geometry_name;
        updated.push("geometry_name");
      }
      if (opts.texture_width !== void 0) {
        project.texture_width = opts.texture_width;
        updated.push("texture_width");
      }
      if (opts.texture_height !== void 0) {
        project.texture_height = opts.texture_height;
        updated.push("texture_height");
      }
      getHost().canvas.updateAll();
      return { ok: true, undo_label: "set_project_meta", updated };
    });
  }
  function assignTexture(opts) {
    requireProject();
    const host = getHost();
    const texture2 = host.textures.find(opts.texture);
    if (!texture2)
      throw new CommandError("E_NOT_FOUND", `Texture not found: ${opts.texture}`);
    const cubes = opts.cubes.map(requireCube);
    return host.undo.run(
      { elements: cubes, uv_only: true },
      "assign_texture",
      () => {
        for (const cube of cubes)
          texture2.applyToCube(cube.uuid, opts.faces ?? true);
        refreshView(cubes);
        return {
          ok: true,
          undo_label: "assign_texture",
          updated: cubes.map((cube) => cube.uuid)
        };
      }
    );
  }
  function deleteAnimation(opts) {
    requireProject();
    const api = bbAnimation();
    const animation = api?.all.find((item) => item.name === opts.name);
    if (!api || !animation)
      throw new CommandError("E_NOT_FOUND", `Animation not found: ${opts.name}`);
    return getHost().undo.run(
      { animations: [animation] },
      `delete_animation ${opts.name}`,
      () => {
        const removable = animation;
        if (typeof removable.remove === "function") removable.remove(false);
        else api.all.splice(api.all.indexOf(animation), 1);
        return {
          ok: true,
          undo_label: `delete_animation ${opts.name}`,
          deleted: [opts.name]
        };
      }
    );
  }

  // src/dispatch.ts
  async function dispatchCommand(session2, command, params) {
    try {
      switch (command) {
        case "list_formats":
          return { formats: listFormats() };
        case "get_project_summary":
          return buildProjectSummary();
        case "get_elements":
          return getElements(params ?? {});
        case "measure_model":
          return measureModel(params ?? {});
        case "audit_symmetry":
          return auditSymmetry(params ?? {});
        case "analyze_view_silhouette":
          return await analyzeViewSilhouette(params ?? {});
        case "list_textures":
          return { textures: listTextures() };
        case "list_animations":
          return { animations: listAnimations() };
        case "check_model":
          return runCheckModel(params ?? {});
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
        case "set_project_meta":
          return setProjectMeta(params ?? {});
        case "apply_geometry_batch":
          return applyGeometryBatch(params ?? {});
        case "update_elements":
          return updateElements(params ?? {});
        case "transform_elements":
          return transformElements(params ?? {});
        case "array_cubes":
          return arrayCubes(params ?? {});
        case "radial_array_cubes":
          return radialArrayCubes(params ?? {});
        case "duplicate_hierarchy":
          return duplicateHierarchy(params ?? {});
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
        case "get_uv_layout":
          return getUvLayout(params ?? {});
        case "get_uv_map":
          return await getUvMap(params ?? {});
        case "get_face_grid":
          return await getFaceGrid(params ?? {});
        case "get_texture_region":
          return await getTextureRegion(params ?? {});
        case "analyze_texture_palette":
          return await analyzeTexturePalette(params ?? {});
        case "get_texture_revision":
          return await getTextureRevision(params ?? {});
        case "audit_texture_quality":
          return await auditTextureQuality(params ?? {});
        case "set_face_uv":
          return setFaceUv(params ?? {});
        case "transform_uv_islands":
          return transformUvIslands(params ?? {});
        case "pack_box_uv":
          return packBoxUv(params ?? {});
        case "resize_texture":
          return resizeTexture(params ?? {});
        case "shade_model_base":
          return shadeModelBase(params ?? {});
        case "mirror_elements":
          return mirrorElements(params ?? {});
        case "paint_face_feature":
          return paintFaceFeature(params ?? {});
        case "paint_face_features":
          return paintFaceFeatures(params ?? {});
        case "paint_pixel_batch":
          return paintPixelBatch(params ?? {});
        case "paint_face_grid":
          return paintFaceGrid(params ?? {});
        case "edit_texture_pixels":
          return editTexturePixels(params ?? {});
        case "replace_texture_color":
          return replaceTextureColor(params ?? {});
        case "copy_face_pixels":
          return await copyFacePixels(params ?? {});
        case "flood_fill_texture":
          return await floodFillTexture(params ?? {});
        case "transform_texture_region":
          return await transformTextureRegion(params ?? {});
        case "import_texture_png":
          return await importTexturePng(session2, params ?? {});
        case "export_texture_png":
          return exportTexturePng(session2, params ?? {});
        case "get_texture":
          return getTexture(params ?? {});
        case "assign_texture":
          return assignTexture(params ?? {});
        case "audit_material_set":
          return auditMaterialSet(params ?? {});
        case "ensure_material_set":
          return ensureMaterialSet(params ?? {});
        case "inspect_animation":
          return inspectAnimation(params ?? {});
        case "upsert_animation":
          return upsertAnimation(params ?? {});
        case "transform_animation_keys":
          return transformAnimationKeys(params ?? {});
        case "delete_animation":
          return deleteAnimation(params ?? {});
        case "propose_scoped_directory":
          return proposeScopedDirectory(
            session2,
            params.path
          );
        case "export_model":
          return exportModel(session2, params ?? {});
        case "save_project":
          return saveProject(session2, params ?? {});
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
  function withoutImageData(result) {
    if (!result || typeof result !== "object") return result;
    if (Array.isArray(result)) return result.map(withoutImageData);
    const clean = {};
    for (const [key, value] of Object.entries(result)) {
      if (key !== "data_url") clean[key] = withoutImageData(value);
    }
    return clean;
  }
  function attachImages(base, result) {
    if (!result || typeof result !== "object") return base;
    const images = [];
    const views = result.views;
    if (Array.isArray(views)) {
      for (const v of views) {
        if (!v || typeof v !== "object") continue;
        const dataUrl = v.data_url;
        if (!dataUrl?.startsWith("data:")) continue;
        const m = /^data:([^;]+);base64,(.+)$/.exec(dataUrl);
        if (!m) continue;
        images.push({ type: "image", data: m[2], mimeType: m[1] });
      }
    }
    const sheet = result.data_url;
    if (typeof sheet === "string" && sheet.startsWith("data:")) {
      const m = /^data:([^;]+);base64,(.+)$/.exec(sheet);
      if (m) images.push({ type: "image", data: m[2], mimeType: m[1] });
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
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false
        }
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
        uv_mode: resolveUvMode({ cubes: [...Cube.all] }),
        capabilities: getHost().probeCapabilities(),
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
      const hasImages = name === "capture_views" || name === "get_texture" || name === "get_uv_map" || name === "get_texture_region";
      const base = envelope(
        true,
        `OK: ${name}`,
        hasImages ? withoutImageData(result) : result
      );
      return hasImages ? attachImages(base, result) : base;
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
