
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NEXT_USER
 * 
 */
export type NEXT_USER = $Result.DefaultSelection<Prisma.$NEXT_USERPayload>
/**
 * Model NEXT_AUTH
 * 
 */
export type NEXT_AUTH = $Result.DefaultSelection<Prisma.$NEXT_AUTHPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Identity_type: {
  phone: 'phone',
  github: 'github'
};

export type Identity_type = (typeof Identity_type)[keyof typeof Identity_type]

}

export type Identity_type = $Enums.Identity_type

export const Identity_type: typeof $Enums.Identity_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NEXT_USERS
 * const nEXT_USERS = await prisma.nEXT_USER.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more NEXT_USERS
   * const nEXT_USERS = await prisma.nEXT_USER.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nEXT_USER`: Exposes CRUD operations for the **NEXT_USER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NEXT_USERS
    * const nEXT_USERS = await prisma.nEXT_USER.findMany()
    * ```
    */
  get nEXT_USER(): Prisma.NEXT_USERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nEXT_AUTH`: Exposes CRUD operations for the **NEXT_AUTH** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NEXT_AUTHS
    * const nEXT_AUTHS = await prisma.nEXT_AUTH.findMany()
    * ```
    */
  get nEXT_AUTH(): Prisma.NEXT_AUTHDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NEXT_USER: 'NEXT_USER',
    NEXT_AUTH: 'NEXT_AUTH',
    Post: 'Post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nEXT_USER" | "nEXT_AUTH" | "post"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NEXT_USER: {
        payload: Prisma.$NEXT_USERPayload<ExtArgs>
        fields: Prisma.NEXT_USERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NEXT_USERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NEXT_USERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>
          }
          findFirst: {
            args: Prisma.NEXT_USERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NEXT_USERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>
          }
          findMany: {
            args: Prisma.NEXT_USERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>[]
          }
          create: {
            args: Prisma.NEXT_USERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>
          }
          createMany: {
            args: Prisma.NEXT_USERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NEXT_USERCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>[]
          }
          delete: {
            args: Prisma.NEXT_USERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>
          }
          update: {
            args: Prisma.NEXT_USERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>
          }
          deleteMany: {
            args: Prisma.NEXT_USERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NEXT_USERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NEXT_USERUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>[]
          }
          upsert: {
            args: Prisma.NEXT_USERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_USERPayload>
          }
          aggregate: {
            args: Prisma.NEXT_USERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNEXT_USER>
          }
          groupBy: {
            args: Prisma.NEXT_USERGroupByArgs<ExtArgs>
            result: $Utils.Optional<NEXT_USERGroupByOutputType>[]
          }
          count: {
            args: Prisma.NEXT_USERCountArgs<ExtArgs>
            result: $Utils.Optional<NEXT_USERCountAggregateOutputType> | number
          }
        }
      }
      NEXT_AUTH: {
        payload: Prisma.$NEXT_AUTHPayload<ExtArgs>
        fields: Prisma.NEXT_AUTHFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NEXT_AUTHFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NEXT_AUTHFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>
          }
          findFirst: {
            args: Prisma.NEXT_AUTHFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NEXT_AUTHFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>
          }
          findMany: {
            args: Prisma.NEXT_AUTHFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>[]
          }
          create: {
            args: Prisma.NEXT_AUTHCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>
          }
          createMany: {
            args: Prisma.NEXT_AUTHCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NEXT_AUTHCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>[]
          }
          delete: {
            args: Prisma.NEXT_AUTHDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>
          }
          update: {
            args: Prisma.NEXT_AUTHUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>
          }
          deleteMany: {
            args: Prisma.NEXT_AUTHDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NEXT_AUTHUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NEXT_AUTHUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>[]
          }
          upsert: {
            args: Prisma.NEXT_AUTHUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NEXT_AUTHPayload>
          }
          aggregate: {
            args: Prisma.NEXT_AUTHAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNEXT_AUTH>
          }
          groupBy: {
            args: Prisma.NEXT_AUTHGroupByArgs<ExtArgs>
            result: $Utils.Optional<NEXT_AUTHGroupByOutputType>[]
          }
          count: {
            args: Prisma.NEXT_AUTHCountArgs<ExtArgs>
            result: $Utils.Optional<NEXT_AUTHCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    nEXT_USER?: NEXT_USEROmit
    nEXT_AUTH?: NEXT_AUTHOmit
    post?: PostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NEXT_USERCountOutputType
   */

  export type NEXT_USERCountOutputType = {
    NEXT_AUTH: number
    Post: number
  }

  export type NEXT_USERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NEXT_AUTH?: boolean | NEXT_USERCountOutputTypeCountNEXT_AUTHArgs
    Post?: boolean | NEXT_USERCountOutputTypeCountPostArgs
  }

  // Custom InputTypes
  /**
   * NEXT_USERCountOutputType without action
   */
  export type NEXT_USERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USERCountOutputType
     */
    select?: NEXT_USERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NEXT_USERCountOutputType without action
   */
  export type NEXT_USERCountOutputTypeCountNEXT_AUTHArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NEXT_AUTHWhereInput
  }

  /**
   * NEXT_USERCountOutputType without action
   */
  export type NEXT_USERCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NEXT_USER
   */

  export type AggregateNEXT_USER = {
    _count: NEXT_USERCountAggregateOutputType | null
    _avg: NEXT_USERAvgAggregateOutputType | null
    _sum: NEXT_USERSumAggregateOutputType | null
    _min: NEXT_USERMinAggregateOutputType | null
    _max: NEXT_USERMaxAggregateOutputType | null
  }

  export type NEXT_USERAvgAggregateOutputType = {
    id: number | null
  }

  export type NEXT_USERSumAggregateOutputType = {
    id: number | null
  }

  export type NEXT_USERMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    avatar: string | null
    Job: string | null
    Introduce: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NEXT_USERMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    avatar: string | null
    Job: string | null
    Introduce: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NEXT_USERCountAggregateOutputType = {
    id: number
    nickname: number
    avatar: number
    Job: number
    Introduce: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NEXT_USERAvgAggregateInputType = {
    id?: true
  }

  export type NEXT_USERSumAggregateInputType = {
    id?: true
  }

  export type NEXT_USERMinAggregateInputType = {
    id?: true
    nickname?: true
    avatar?: true
    Job?: true
    Introduce?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NEXT_USERMaxAggregateInputType = {
    id?: true
    nickname?: true
    avatar?: true
    Job?: true
    Introduce?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NEXT_USERCountAggregateInputType = {
    id?: true
    nickname?: true
    avatar?: true
    Job?: true
    Introduce?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NEXT_USERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NEXT_USER to aggregate.
     */
    where?: NEXT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_USERS to fetch.
     */
    orderBy?: NEXT_USEROrderByWithRelationInput | NEXT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NEXT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NEXT_USERS
    **/
    _count?: true | NEXT_USERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NEXT_USERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NEXT_USERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NEXT_USERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NEXT_USERMaxAggregateInputType
  }

  export type GetNEXT_USERAggregateType<T extends NEXT_USERAggregateArgs> = {
        [P in keyof T & keyof AggregateNEXT_USER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNEXT_USER[P]>
      : GetScalarType<T[P], AggregateNEXT_USER[P]>
  }




  export type NEXT_USERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NEXT_USERWhereInput
    orderBy?: NEXT_USEROrderByWithAggregationInput | NEXT_USEROrderByWithAggregationInput[]
    by: NEXT_USERScalarFieldEnum[] | NEXT_USERScalarFieldEnum
    having?: NEXT_USERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NEXT_USERCountAggregateInputType | true
    _avg?: NEXT_USERAvgAggregateInputType
    _sum?: NEXT_USERSumAggregateInputType
    _min?: NEXT_USERMinAggregateInputType
    _max?: NEXT_USERMaxAggregateInputType
  }

  export type NEXT_USERGroupByOutputType = {
    id: number
    nickname: string
    avatar: string | null
    Job: string | null
    Introduce: string | null
    createdAt: Date
    updatedAt: Date
    _count: NEXT_USERCountAggregateOutputType | null
    _avg: NEXT_USERAvgAggregateOutputType | null
    _sum: NEXT_USERSumAggregateOutputType | null
    _min: NEXT_USERMinAggregateOutputType | null
    _max: NEXT_USERMaxAggregateOutputType | null
  }

  type GetNEXT_USERGroupByPayload<T extends NEXT_USERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NEXT_USERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NEXT_USERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NEXT_USERGroupByOutputType[P]>
            : GetScalarType<T[P], NEXT_USERGroupByOutputType[P]>
        }
      >
    >


  export type NEXT_USERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    avatar?: boolean
    Job?: boolean
    Introduce?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    NEXT_AUTH?: boolean | NEXT_USER$NEXT_AUTHArgs<ExtArgs>
    Post?: boolean | NEXT_USER$PostArgs<ExtArgs>
    _count?: boolean | NEXT_USERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nEXT_USER"]>

  export type NEXT_USERSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    avatar?: boolean
    Job?: boolean
    Introduce?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nEXT_USER"]>

  export type NEXT_USERSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    avatar?: boolean
    Job?: boolean
    Introduce?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nEXT_USER"]>

  export type NEXT_USERSelectScalar = {
    id?: boolean
    nickname?: boolean
    avatar?: boolean
    Job?: boolean
    Introduce?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NEXT_USEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "avatar" | "Job" | "Introduce" | "createdAt" | "updatedAt", ExtArgs["result"]["nEXT_USER"]>
  export type NEXT_USERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NEXT_AUTH?: boolean | NEXT_USER$NEXT_AUTHArgs<ExtArgs>
    Post?: boolean | NEXT_USER$PostArgs<ExtArgs>
    _count?: boolean | NEXT_USERCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NEXT_USERIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NEXT_USERIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NEXT_USERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NEXT_USER"
    objects: {
      NEXT_AUTH: Prisma.$NEXT_AUTHPayload<ExtArgs>[]
      Post: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nickname: string
      avatar: string | null
      Job: string | null
      Introduce: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nEXT_USER"]>
    composites: {}
  }

  type NEXT_USERGetPayload<S extends boolean | null | undefined | NEXT_USERDefaultArgs> = $Result.GetResult<Prisma.$NEXT_USERPayload, S>

  type NEXT_USERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NEXT_USERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NEXT_USERCountAggregateInputType | true
    }

  export interface NEXT_USERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NEXT_USER'], meta: { name: 'NEXT_USER' } }
    /**
     * Find zero or one NEXT_USER that matches the filter.
     * @param {NEXT_USERFindUniqueArgs} args - Arguments to find a NEXT_USER
     * @example
     * // Get one NEXT_USER
     * const nEXT_USER = await prisma.nEXT_USER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NEXT_USERFindUniqueArgs>(args: SelectSubset<T, NEXT_USERFindUniqueArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NEXT_USER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NEXT_USERFindUniqueOrThrowArgs} args - Arguments to find a NEXT_USER
     * @example
     * // Get one NEXT_USER
     * const nEXT_USER = await prisma.nEXT_USER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NEXT_USERFindUniqueOrThrowArgs>(args: SelectSubset<T, NEXT_USERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NEXT_USER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_USERFindFirstArgs} args - Arguments to find a NEXT_USER
     * @example
     * // Get one NEXT_USER
     * const nEXT_USER = await prisma.nEXT_USER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NEXT_USERFindFirstArgs>(args?: SelectSubset<T, NEXT_USERFindFirstArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NEXT_USER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_USERFindFirstOrThrowArgs} args - Arguments to find a NEXT_USER
     * @example
     * // Get one NEXT_USER
     * const nEXT_USER = await prisma.nEXT_USER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NEXT_USERFindFirstOrThrowArgs>(args?: SelectSubset<T, NEXT_USERFindFirstOrThrowArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NEXT_USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_USERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NEXT_USERS
     * const nEXT_USERS = await prisma.nEXT_USER.findMany()
     * 
     * // Get first 10 NEXT_USERS
     * const nEXT_USERS = await prisma.nEXT_USER.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nEXT_USERWithIdOnly = await prisma.nEXT_USER.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NEXT_USERFindManyArgs>(args?: SelectSubset<T, NEXT_USERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NEXT_USER.
     * @param {NEXT_USERCreateArgs} args - Arguments to create a NEXT_USER.
     * @example
     * // Create one NEXT_USER
     * const NEXT_USER = await prisma.nEXT_USER.create({
     *   data: {
     *     // ... data to create a NEXT_USER
     *   }
     * })
     * 
     */
    create<T extends NEXT_USERCreateArgs>(args: SelectSubset<T, NEXT_USERCreateArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NEXT_USERS.
     * @param {NEXT_USERCreateManyArgs} args - Arguments to create many NEXT_USERS.
     * @example
     * // Create many NEXT_USERS
     * const nEXT_USER = await prisma.nEXT_USER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NEXT_USERCreateManyArgs>(args?: SelectSubset<T, NEXT_USERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NEXT_USERS and returns the data saved in the database.
     * @param {NEXT_USERCreateManyAndReturnArgs} args - Arguments to create many NEXT_USERS.
     * @example
     * // Create many NEXT_USERS
     * const nEXT_USER = await prisma.nEXT_USER.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NEXT_USERS and only return the `id`
     * const nEXT_USERWithIdOnly = await prisma.nEXT_USER.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NEXT_USERCreateManyAndReturnArgs>(args?: SelectSubset<T, NEXT_USERCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NEXT_USER.
     * @param {NEXT_USERDeleteArgs} args - Arguments to delete one NEXT_USER.
     * @example
     * // Delete one NEXT_USER
     * const NEXT_USER = await prisma.nEXT_USER.delete({
     *   where: {
     *     // ... filter to delete one NEXT_USER
     *   }
     * })
     * 
     */
    delete<T extends NEXT_USERDeleteArgs>(args: SelectSubset<T, NEXT_USERDeleteArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NEXT_USER.
     * @param {NEXT_USERUpdateArgs} args - Arguments to update one NEXT_USER.
     * @example
     * // Update one NEXT_USER
     * const nEXT_USER = await prisma.nEXT_USER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NEXT_USERUpdateArgs>(args: SelectSubset<T, NEXT_USERUpdateArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NEXT_USERS.
     * @param {NEXT_USERDeleteManyArgs} args - Arguments to filter NEXT_USERS to delete.
     * @example
     * // Delete a few NEXT_USERS
     * const { count } = await prisma.nEXT_USER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NEXT_USERDeleteManyArgs>(args?: SelectSubset<T, NEXT_USERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NEXT_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_USERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NEXT_USERS
     * const nEXT_USER = await prisma.nEXT_USER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NEXT_USERUpdateManyArgs>(args: SelectSubset<T, NEXT_USERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NEXT_USERS and returns the data updated in the database.
     * @param {NEXT_USERUpdateManyAndReturnArgs} args - Arguments to update many NEXT_USERS.
     * @example
     * // Update many NEXT_USERS
     * const nEXT_USER = await prisma.nEXT_USER.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NEXT_USERS and only return the `id`
     * const nEXT_USERWithIdOnly = await prisma.nEXT_USER.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NEXT_USERUpdateManyAndReturnArgs>(args: SelectSubset<T, NEXT_USERUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NEXT_USER.
     * @param {NEXT_USERUpsertArgs} args - Arguments to update or create a NEXT_USER.
     * @example
     * // Update or create a NEXT_USER
     * const nEXT_USER = await prisma.nEXT_USER.upsert({
     *   create: {
     *     // ... data to create a NEXT_USER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NEXT_USER we want to update
     *   }
     * })
     */
    upsert<T extends NEXT_USERUpsertArgs>(args: SelectSubset<T, NEXT_USERUpsertArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NEXT_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_USERCountArgs} args - Arguments to filter NEXT_USERS to count.
     * @example
     * // Count the number of NEXT_USERS
     * const count = await prisma.nEXT_USER.count({
     *   where: {
     *     // ... the filter for the NEXT_USERS we want to count
     *   }
     * })
    **/
    count<T extends NEXT_USERCountArgs>(
      args?: Subset<T, NEXT_USERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NEXT_USERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NEXT_USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_USERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NEXT_USERAggregateArgs>(args: Subset<T, NEXT_USERAggregateArgs>): Prisma.PrismaPromise<GetNEXT_USERAggregateType<T>>

    /**
     * Group by NEXT_USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_USERGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NEXT_USERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NEXT_USERGroupByArgs['orderBy'] }
        : { orderBy?: NEXT_USERGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NEXT_USERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNEXT_USERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NEXT_USER model
   */
  readonly fields: NEXT_USERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NEXT_USER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NEXT_USERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NEXT_AUTH<T extends NEXT_USER$NEXT_AUTHArgs<ExtArgs> = {}>(args?: Subset<T, NEXT_USER$NEXT_AUTHArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Post<T extends NEXT_USER$PostArgs<ExtArgs> = {}>(args?: Subset<T, NEXT_USER$PostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NEXT_USER model
   */
  interface NEXT_USERFieldRefs {
    readonly id: FieldRef<"NEXT_USER", 'Int'>
    readonly nickname: FieldRef<"NEXT_USER", 'String'>
    readonly avatar: FieldRef<"NEXT_USER", 'String'>
    readonly Job: FieldRef<"NEXT_USER", 'String'>
    readonly Introduce: FieldRef<"NEXT_USER", 'String'>
    readonly createdAt: FieldRef<"NEXT_USER", 'DateTime'>
    readonly updatedAt: FieldRef<"NEXT_USER", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NEXT_USER findUnique
   */
  export type NEXT_USERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_USER to fetch.
     */
    where: NEXT_USERWhereUniqueInput
  }

  /**
   * NEXT_USER findUniqueOrThrow
   */
  export type NEXT_USERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_USER to fetch.
     */
    where: NEXT_USERWhereUniqueInput
  }

  /**
   * NEXT_USER findFirst
   */
  export type NEXT_USERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_USER to fetch.
     */
    where?: NEXT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_USERS to fetch.
     */
    orderBy?: NEXT_USEROrderByWithRelationInput | NEXT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NEXT_USERS.
     */
    cursor?: NEXT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NEXT_USERS.
     */
    distinct?: NEXT_USERScalarFieldEnum | NEXT_USERScalarFieldEnum[]
  }

  /**
   * NEXT_USER findFirstOrThrow
   */
  export type NEXT_USERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_USER to fetch.
     */
    where?: NEXT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_USERS to fetch.
     */
    orderBy?: NEXT_USEROrderByWithRelationInput | NEXT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NEXT_USERS.
     */
    cursor?: NEXT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NEXT_USERS.
     */
    distinct?: NEXT_USERScalarFieldEnum | NEXT_USERScalarFieldEnum[]
  }

  /**
   * NEXT_USER findMany
   */
  export type NEXT_USERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_USERS to fetch.
     */
    where?: NEXT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_USERS to fetch.
     */
    orderBy?: NEXT_USEROrderByWithRelationInput | NEXT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NEXT_USERS.
     */
    cursor?: NEXT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_USERS.
     */
    skip?: number
    distinct?: NEXT_USERScalarFieldEnum | NEXT_USERScalarFieldEnum[]
  }

  /**
   * NEXT_USER create
   */
  export type NEXT_USERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * The data needed to create a NEXT_USER.
     */
    data: XOR<NEXT_USERCreateInput, NEXT_USERUncheckedCreateInput>
  }

  /**
   * NEXT_USER createMany
   */
  export type NEXT_USERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NEXT_USERS.
     */
    data: NEXT_USERCreateManyInput | NEXT_USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NEXT_USER createManyAndReturn
   */
  export type NEXT_USERCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * The data used to create many NEXT_USERS.
     */
    data: NEXT_USERCreateManyInput | NEXT_USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NEXT_USER update
   */
  export type NEXT_USERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * The data needed to update a NEXT_USER.
     */
    data: XOR<NEXT_USERUpdateInput, NEXT_USERUncheckedUpdateInput>
    /**
     * Choose, which NEXT_USER to update.
     */
    where: NEXT_USERWhereUniqueInput
  }

  /**
   * NEXT_USER updateMany
   */
  export type NEXT_USERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NEXT_USERS.
     */
    data: XOR<NEXT_USERUpdateManyMutationInput, NEXT_USERUncheckedUpdateManyInput>
    /**
     * Filter which NEXT_USERS to update
     */
    where?: NEXT_USERWhereInput
    /**
     * Limit how many NEXT_USERS to update.
     */
    limit?: number
  }

  /**
   * NEXT_USER updateManyAndReturn
   */
  export type NEXT_USERUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * The data used to update NEXT_USERS.
     */
    data: XOR<NEXT_USERUpdateManyMutationInput, NEXT_USERUncheckedUpdateManyInput>
    /**
     * Filter which NEXT_USERS to update
     */
    where?: NEXT_USERWhereInput
    /**
     * Limit how many NEXT_USERS to update.
     */
    limit?: number
  }

  /**
   * NEXT_USER upsert
   */
  export type NEXT_USERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * The filter to search for the NEXT_USER to update in case it exists.
     */
    where: NEXT_USERWhereUniqueInput
    /**
     * In case the NEXT_USER found by the `where` argument doesn't exist, create a new NEXT_USER with this data.
     */
    create: XOR<NEXT_USERCreateInput, NEXT_USERUncheckedCreateInput>
    /**
     * In case the NEXT_USER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NEXT_USERUpdateInput, NEXT_USERUncheckedUpdateInput>
  }

  /**
   * NEXT_USER delete
   */
  export type NEXT_USERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
    /**
     * Filter which NEXT_USER to delete.
     */
    where: NEXT_USERWhereUniqueInput
  }

  /**
   * NEXT_USER deleteMany
   */
  export type NEXT_USERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NEXT_USERS to delete
     */
    where?: NEXT_USERWhereInput
    /**
     * Limit how many NEXT_USERS to delete.
     */
    limit?: number
  }

  /**
   * NEXT_USER.NEXT_AUTH
   */
  export type NEXT_USER$NEXT_AUTHArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    where?: NEXT_AUTHWhereInput
    orderBy?: NEXT_AUTHOrderByWithRelationInput | NEXT_AUTHOrderByWithRelationInput[]
    cursor?: NEXT_AUTHWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NEXT_AUTHScalarFieldEnum | NEXT_AUTHScalarFieldEnum[]
  }

  /**
   * NEXT_USER.Post
   */
  export type NEXT_USER$PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * NEXT_USER without action
   */
  export type NEXT_USERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_USER
     */
    select?: NEXT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_USER
     */
    omit?: NEXT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_USERInclude<ExtArgs> | null
  }


  /**
   * Model NEXT_AUTH
   */

  export type AggregateNEXT_AUTH = {
    _count: NEXT_AUTHCountAggregateOutputType | null
    _avg: NEXT_AUTHAvgAggregateOutputType | null
    _sum: NEXT_AUTHSumAggregateOutputType | null
    _min: NEXT_AUTHMinAggregateOutputType | null
    _max: NEXT_AUTHMaxAggregateOutputType | null
  }

  export type NEXT_AUTHAvgAggregateOutputType = {
    id: number | null
    UserId: number | null
  }

  export type NEXT_AUTHSumAggregateOutputType = {
    id: number | null
    UserId: number | null
  }

  export type NEXT_AUTHMinAggregateOutputType = {
    id: number | null
    UserId: number | null
    Identity_type: $Enums.Identity_type | null
    Identifier: string | null
    credential: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NEXT_AUTHMaxAggregateOutputType = {
    id: number | null
    UserId: number | null
    Identity_type: $Enums.Identity_type | null
    Identifier: string | null
    credential: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NEXT_AUTHCountAggregateOutputType = {
    id: number
    UserId: number
    Identity_type: number
    Identifier: number
    credential: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NEXT_AUTHAvgAggregateInputType = {
    id?: true
    UserId?: true
  }

  export type NEXT_AUTHSumAggregateInputType = {
    id?: true
    UserId?: true
  }

  export type NEXT_AUTHMinAggregateInputType = {
    id?: true
    UserId?: true
    Identity_type?: true
    Identifier?: true
    credential?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NEXT_AUTHMaxAggregateInputType = {
    id?: true
    UserId?: true
    Identity_type?: true
    Identifier?: true
    credential?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NEXT_AUTHCountAggregateInputType = {
    id?: true
    UserId?: true
    Identity_type?: true
    Identifier?: true
    credential?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NEXT_AUTHAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NEXT_AUTH to aggregate.
     */
    where?: NEXT_AUTHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_AUTHS to fetch.
     */
    orderBy?: NEXT_AUTHOrderByWithRelationInput | NEXT_AUTHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NEXT_AUTHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_AUTHS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_AUTHS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NEXT_AUTHS
    **/
    _count?: true | NEXT_AUTHCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NEXT_AUTHAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NEXT_AUTHSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NEXT_AUTHMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NEXT_AUTHMaxAggregateInputType
  }

  export type GetNEXT_AUTHAggregateType<T extends NEXT_AUTHAggregateArgs> = {
        [P in keyof T & keyof AggregateNEXT_AUTH]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNEXT_AUTH[P]>
      : GetScalarType<T[P], AggregateNEXT_AUTH[P]>
  }




  export type NEXT_AUTHGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NEXT_AUTHWhereInput
    orderBy?: NEXT_AUTHOrderByWithAggregationInput | NEXT_AUTHOrderByWithAggregationInput[]
    by: NEXT_AUTHScalarFieldEnum[] | NEXT_AUTHScalarFieldEnum
    having?: NEXT_AUTHScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NEXT_AUTHCountAggregateInputType | true
    _avg?: NEXT_AUTHAvgAggregateInputType
    _sum?: NEXT_AUTHSumAggregateInputType
    _min?: NEXT_AUTHMinAggregateInputType
    _max?: NEXT_AUTHMaxAggregateInputType
  }

  export type NEXT_AUTHGroupByOutputType = {
    id: number
    UserId: number
    Identity_type: $Enums.Identity_type
    Identifier: string
    credential: string
    createdAt: Date
    updatedAt: Date
    _count: NEXT_AUTHCountAggregateOutputType | null
    _avg: NEXT_AUTHAvgAggregateOutputType | null
    _sum: NEXT_AUTHSumAggregateOutputType | null
    _min: NEXT_AUTHMinAggregateOutputType | null
    _max: NEXT_AUTHMaxAggregateOutputType | null
  }

  type GetNEXT_AUTHGroupByPayload<T extends NEXT_AUTHGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NEXT_AUTHGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NEXT_AUTHGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NEXT_AUTHGroupByOutputType[P]>
            : GetScalarType<T[P], NEXT_AUTHGroupByOutputType[P]>
        }
      >
    >


  export type NEXT_AUTHSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserId?: boolean
    Identity_type?: boolean
    Identifier?: boolean
    credential?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nEXT_AUTH"]>

  export type NEXT_AUTHSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserId?: boolean
    Identity_type?: boolean
    Identifier?: boolean
    credential?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nEXT_AUTH"]>

  export type NEXT_AUTHSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserId?: boolean
    Identity_type?: boolean
    Identifier?: boolean
    credential?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nEXT_AUTH"]>

  export type NEXT_AUTHSelectScalar = {
    id?: boolean
    UserId?: boolean
    Identity_type?: boolean
    Identifier?: boolean
    credential?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NEXT_AUTHOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "UserId" | "Identity_type" | "Identifier" | "credential" | "createdAt" | "updatedAt", ExtArgs["result"]["nEXT_AUTH"]>
  export type NEXT_AUTHInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }
  export type NEXT_AUTHIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }
  export type NEXT_AUTHIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }

  export type $NEXT_AUTHPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NEXT_AUTH"
    objects: {
      User: Prisma.$NEXT_USERPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      UserId: number
      Identity_type: $Enums.Identity_type
      Identifier: string
      credential: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nEXT_AUTH"]>
    composites: {}
  }

  type NEXT_AUTHGetPayload<S extends boolean | null | undefined | NEXT_AUTHDefaultArgs> = $Result.GetResult<Prisma.$NEXT_AUTHPayload, S>

  type NEXT_AUTHCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NEXT_AUTHFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NEXT_AUTHCountAggregateInputType | true
    }

  export interface NEXT_AUTHDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NEXT_AUTH'], meta: { name: 'NEXT_AUTH' } }
    /**
     * Find zero or one NEXT_AUTH that matches the filter.
     * @param {NEXT_AUTHFindUniqueArgs} args - Arguments to find a NEXT_AUTH
     * @example
     * // Get one NEXT_AUTH
     * const nEXT_AUTH = await prisma.nEXT_AUTH.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NEXT_AUTHFindUniqueArgs>(args: SelectSubset<T, NEXT_AUTHFindUniqueArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NEXT_AUTH that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NEXT_AUTHFindUniqueOrThrowArgs} args - Arguments to find a NEXT_AUTH
     * @example
     * // Get one NEXT_AUTH
     * const nEXT_AUTH = await prisma.nEXT_AUTH.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NEXT_AUTHFindUniqueOrThrowArgs>(args: SelectSubset<T, NEXT_AUTHFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NEXT_AUTH that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_AUTHFindFirstArgs} args - Arguments to find a NEXT_AUTH
     * @example
     * // Get one NEXT_AUTH
     * const nEXT_AUTH = await prisma.nEXT_AUTH.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NEXT_AUTHFindFirstArgs>(args?: SelectSubset<T, NEXT_AUTHFindFirstArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NEXT_AUTH that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_AUTHFindFirstOrThrowArgs} args - Arguments to find a NEXT_AUTH
     * @example
     * // Get one NEXT_AUTH
     * const nEXT_AUTH = await prisma.nEXT_AUTH.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NEXT_AUTHFindFirstOrThrowArgs>(args?: SelectSubset<T, NEXT_AUTHFindFirstOrThrowArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NEXT_AUTHS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_AUTHFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NEXT_AUTHS
     * const nEXT_AUTHS = await prisma.nEXT_AUTH.findMany()
     * 
     * // Get first 10 NEXT_AUTHS
     * const nEXT_AUTHS = await prisma.nEXT_AUTH.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nEXT_AUTHWithIdOnly = await prisma.nEXT_AUTH.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NEXT_AUTHFindManyArgs>(args?: SelectSubset<T, NEXT_AUTHFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NEXT_AUTH.
     * @param {NEXT_AUTHCreateArgs} args - Arguments to create a NEXT_AUTH.
     * @example
     * // Create one NEXT_AUTH
     * const NEXT_AUTH = await prisma.nEXT_AUTH.create({
     *   data: {
     *     // ... data to create a NEXT_AUTH
     *   }
     * })
     * 
     */
    create<T extends NEXT_AUTHCreateArgs>(args: SelectSubset<T, NEXT_AUTHCreateArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NEXT_AUTHS.
     * @param {NEXT_AUTHCreateManyArgs} args - Arguments to create many NEXT_AUTHS.
     * @example
     * // Create many NEXT_AUTHS
     * const nEXT_AUTH = await prisma.nEXT_AUTH.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NEXT_AUTHCreateManyArgs>(args?: SelectSubset<T, NEXT_AUTHCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NEXT_AUTHS and returns the data saved in the database.
     * @param {NEXT_AUTHCreateManyAndReturnArgs} args - Arguments to create many NEXT_AUTHS.
     * @example
     * // Create many NEXT_AUTHS
     * const nEXT_AUTH = await prisma.nEXT_AUTH.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NEXT_AUTHS and only return the `id`
     * const nEXT_AUTHWithIdOnly = await prisma.nEXT_AUTH.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NEXT_AUTHCreateManyAndReturnArgs>(args?: SelectSubset<T, NEXT_AUTHCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NEXT_AUTH.
     * @param {NEXT_AUTHDeleteArgs} args - Arguments to delete one NEXT_AUTH.
     * @example
     * // Delete one NEXT_AUTH
     * const NEXT_AUTH = await prisma.nEXT_AUTH.delete({
     *   where: {
     *     // ... filter to delete one NEXT_AUTH
     *   }
     * })
     * 
     */
    delete<T extends NEXT_AUTHDeleteArgs>(args: SelectSubset<T, NEXT_AUTHDeleteArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NEXT_AUTH.
     * @param {NEXT_AUTHUpdateArgs} args - Arguments to update one NEXT_AUTH.
     * @example
     * // Update one NEXT_AUTH
     * const nEXT_AUTH = await prisma.nEXT_AUTH.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NEXT_AUTHUpdateArgs>(args: SelectSubset<T, NEXT_AUTHUpdateArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NEXT_AUTHS.
     * @param {NEXT_AUTHDeleteManyArgs} args - Arguments to filter NEXT_AUTHS to delete.
     * @example
     * // Delete a few NEXT_AUTHS
     * const { count } = await prisma.nEXT_AUTH.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NEXT_AUTHDeleteManyArgs>(args?: SelectSubset<T, NEXT_AUTHDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NEXT_AUTHS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_AUTHUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NEXT_AUTHS
     * const nEXT_AUTH = await prisma.nEXT_AUTH.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NEXT_AUTHUpdateManyArgs>(args: SelectSubset<T, NEXT_AUTHUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NEXT_AUTHS and returns the data updated in the database.
     * @param {NEXT_AUTHUpdateManyAndReturnArgs} args - Arguments to update many NEXT_AUTHS.
     * @example
     * // Update many NEXT_AUTHS
     * const nEXT_AUTH = await prisma.nEXT_AUTH.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NEXT_AUTHS and only return the `id`
     * const nEXT_AUTHWithIdOnly = await prisma.nEXT_AUTH.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NEXT_AUTHUpdateManyAndReturnArgs>(args: SelectSubset<T, NEXT_AUTHUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NEXT_AUTH.
     * @param {NEXT_AUTHUpsertArgs} args - Arguments to update or create a NEXT_AUTH.
     * @example
     * // Update or create a NEXT_AUTH
     * const nEXT_AUTH = await prisma.nEXT_AUTH.upsert({
     *   create: {
     *     // ... data to create a NEXT_AUTH
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NEXT_AUTH we want to update
     *   }
     * })
     */
    upsert<T extends NEXT_AUTHUpsertArgs>(args: SelectSubset<T, NEXT_AUTHUpsertArgs<ExtArgs>>): Prisma__NEXT_AUTHClient<$Result.GetResult<Prisma.$NEXT_AUTHPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NEXT_AUTHS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_AUTHCountArgs} args - Arguments to filter NEXT_AUTHS to count.
     * @example
     * // Count the number of NEXT_AUTHS
     * const count = await prisma.nEXT_AUTH.count({
     *   where: {
     *     // ... the filter for the NEXT_AUTHS we want to count
     *   }
     * })
    **/
    count<T extends NEXT_AUTHCountArgs>(
      args?: Subset<T, NEXT_AUTHCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NEXT_AUTHCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NEXT_AUTH.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_AUTHAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NEXT_AUTHAggregateArgs>(args: Subset<T, NEXT_AUTHAggregateArgs>): Prisma.PrismaPromise<GetNEXT_AUTHAggregateType<T>>

    /**
     * Group by NEXT_AUTH.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NEXT_AUTHGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NEXT_AUTHGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NEXT_AUTHGroupByArgs['orderBy'] }
        : { orderBy?: NEXT_AUTHGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NEXT_AUTHGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNEXT_AUTHGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NEXT_AUTH model
   */
  readonly fields: NEXT_AUTHFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NEXT_AUTH.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NEXT_AUTHClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends NEXT_USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NEXT_USERDefaultArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NEXT_AUTH model
   */
  interface NEXT_AUTHFieldRefs {
    readonly id: FieldRef<"NEXT_AUTH", 'Int'>
    readonly UserId: FieldRef<"NEXT_AUTH", 'Int'>
    readonly Identity_type: FieldRef<"NEXT_AUTH", 'Identity_type'>
    readonly Identifier: FieldRef<"NEXT_AUTH", 'String'>
    readonly credential: FieldRef<"NEXT_AUTH", 'String'>
    readonly createdAt: FieldRef<"NEXT_AUTH", 'DateTime'>
    readonly updatedAt: FieldRef<"NEXT_AUTH", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NEXT_AUTH findUnique
   */
  export type NEXT_AUTHFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_AUTH to fetch.
     */
    where: NEXT_AUTHWhereUniqueInput
  }

  /**
   * NEXT_AUTH findUniqueOrThrow
   */
  export type NEXT_AUTHFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_AUTH to fetch.
     */
    where: NEXT_AUTHWhereUniqueInput
  }

  /**
   * NEXT_AUTH findFirst
   */
  export type NEXT_AUTHFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_AUTH to fetch.
     */
    where?: NEXT_AUTHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_AUTHS to fetch.
     */
    orderBy?: NEXT_AUTHOrderByWithRelationInput | NEXT_AUTHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NEXT_AUTHS.
     */
    cursor?: NEXT_AUTHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_AUTHS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_AUTHS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NEXT_AUTHS.
     */
    distinct?: NEXT_AUTHScalarFieldEnum | NEXT_AUTHScalarFieldEnum[]
  }

  /**
   * NEXT_AUTH findFirstOrThrow
   */
  export type NEXT_AUTHFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_AUTH to fetch.
     */
    where?: NEXT_AUTHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_AUTHS to fetch.
     */
    orderBy?: NEXT_AUTHOrderByWithRelationInput | NEXT_AUTHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NEXT_AUTHS.
     */
    cursor?: NEXT_AUTHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_AUTHS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_AUTHS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NEXT_AUTHS.
     */
    distinct?: NEXT_AUTHScalarFieldEnum | NEXT_AUTHScalarFieldEnum[]
  }

  /**
   * NEXT_AUTH findMany
   */
  export type NEXT_AUTHFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * Filter, which NEXT_AUTHS to fetch.
     */
    where?: NEXT_AUTHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NEXT_AUTHS to fetch.
     */
    orderBy?: NEXT_AUTHOrderByWithRelationInput | NEXT_AUTHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NEXT_AUTHS.
     */
    cursor?: NEXT_AUTHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NEXT_AUTHS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NEXT_AUTHS.
     */
    skip?: number
    distinct?: NEXT_AUTHScalarFieldEnum | NEXT_AUTHScalarFieldEnum[]
  }

  /**
   * NEXT_AUTH create
   */
  export type NEXT_AUTHCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * The data needed to create a NEXT_AUTH.
     */
    data: XOR<NEXT_AUTHCreateInput, NEXT_AUTHUncheckedCreateInput>
  }

  /**
   * NEXT_AUTH createMany
   */
  export type NEXT_AUTHCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NEXT_AUTHS.
     */
    data: NEXT_AUTHCreateManyInput | NEXT_AUTHCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NEXT_AUTH createManyAndReturn
   */
  export type NEXT_AUTHCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * The data used to create many NEXT_AUTHS.
     */
    data: NEXT_AUTHCreateManyInput | NEXT_AUTHCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NEXT_AUTH update
   */
  export type NEXT_AUTHUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * The data needed to update a NEXT_AUTH.
     */
    data: XOR<NEXT_AUTHUpdateInput, NEXT_AUTHUncheckedUpdateInput>
    /**
     * Choose, which NEXT_AUTH to update.
     */
    where: NEXT_AUTHWhereUniqueInput
  }

  /**
   * NEXT_AUTH updateMany
   */
  export type NEXT_AUTHUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NEXT_AUTHS.
     */
    data: XOR<NEXT_AUTHUpdateManyMutationInput, NEXT_AUTHUncheckedUpdateManyInput>
    /**
     * Filter which NEXT_AUTHS to update
     */
    where?: NEXT_AUTHWhereInput
    /**
     * Limit how many NEXT_AUTHS to update.
     */
    limit?: number
  }

  /**
   * NEXT_AUTH updateManyAndReturn
   */
  export type NEXT_AUTHUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * The data used to update NEXT_AUTHS.
     */
    data: XOR<NEXT_AUTHUpdateManyMutationInput, NEXT_AUTHUncheckedUpdateManyInput>
    /**
     * Filter which NEXT_AUTHS to update
     */
    where?: NEXT_AUTHWhereInput
    /**
     * Limit how many NEXT_AUTHS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NEXT_AUTH upsert
   */
  export type NEXT_AUTHUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * The filter to search for the NEXT_AUTH to update in case it exists.
     */
    where: NEXT_AUTHWhereUniqueInput
    /**
     * In case the NEXT_AUTH found by the `where` argument doesn't exist, create a new NEXT_AUTH with this data.
     */
    create: XOR<NEXT_AUTHCreateInput, NEXT_AUTHUncheckedCreateInput>
    /**
     * In case the NEXT_AUTH was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NEXT_AUTHUpdateInput, NEXT_AUTHUncheckedUpdateInput>
  }

  /**
   * NEXT_AUTH delete
   */
  export type NEXT_AUTHDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
    /**
     * Filter which NEXT_AUTH to delete.
     */
    where: NEXT_AUTHWhereUniqueInput
  }

  /**
   * NEXT_AUTH deleteMany
   */
  export type NEXT_AUTHDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NEXT_AUTHS to delete
     */
    where?: NEXT_AUTHWhereInput
    /**
     * Limit how many NEXT_AUTHS to delete.
     */
    limit?: number
  }

  /**
   * NEXT_AUTH without action
   */
  export type NEXT_AUTHDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NEXT_AUTH
     */
    select?: NEXT_AUTHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NEXT_AUTH
     */
    omit?: NEXT_AUTHOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NEXT_AUTHInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    views: number | null
    UserId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    views: number | null
    UserId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    views: number | null
    isDelete: boolean | null
    UserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    views: number | null
    isDelete: boolean | null
    UserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    views: number
    isDelete: number
    UserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    views?: true
    UserId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    views?: true
    UserId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    views?: true
    isDelete?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    views?: true
    isDelete?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    views?: true
    isDelete?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string
    views: number
    isDelete: boolean
    UserId: number
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    views?: boolean
    isDelete?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    views?: boolean
    isDelete?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    views?: boolean
    isDelete?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    views?: boolean
    isDelete?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "views" | "isDelete" | "UserId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | NEXT_USERDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      User: Prisma.$NEXT_USERPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      views: number
      isDelete: boolean
      UserId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends NEXT_USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NEXT_USERDefaultArgs<ExtArgs>>): Prisma__NEXT_USERClient<$Result.GetResult<Prisma.$NEXT_USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly views: FieldRef<"Post", 'Int'>
    readonly isDelete: FieldRef<"Post", 'Boolean'>
    readonly UserId: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NEXT_USERScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    avatar: 'avatar',
    Job: 'Job',
    Introduce: 'Introduce',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NEXT_USERScalarFieldEnum = (typeof NEXT_USERScalarFieldEnum)[keyof typeof NEXT_USERScalarFieldEnum]


  export const NEXT_AUTHScalarFieldEnum: {
    id: 'id',
    UserId: 'UserId',
    Identity_type: 'Identity_type',
    Identifier: 'Identifier',
    credential: 'credential',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NEXT_AUTHScalarFieldEnum = (typeof NEXT_AUTHScalarFieldEnum)[keyof typeof NEXT_AUTHScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    views: 'views',
    isDelete: 'isDelete',
    UserId: 'UserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Identity_type'
   */
  export type EnumIdentity_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Identity_type'>
    


  /**
   * Reference to a field of type 'Identity_type[]'
   */
  export type ListEnumIdentity_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Identity_type[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NEXT_USERWhereInput = {
    AND?: NEXT_USERWhereInput | NEXT_USERWhereInput[]
    OR?: NEXT_USERWhereInput[]
    NOT?: NEXT_USERWhereInput | NEXT_USERWhereInput[]
    id?: IntFilter<"NEXT_USER"> | number
    nickname?: StringFilter<"NEXT_USER"> | string
    avatar?: StringNullableFilter<"NEXT_USER"> | string | null
    Job?: StringNullableFilter<"NEXT_USER"> | string | null
    Introduce?: StringNullableFilter<"NEXT_USER"> | string | null
    createdAt?: DateTimeFilter<"NEXT_USER"> | Date | string
    updatedAt?: DateTimeFilter<"NEXT_USER"> | Date | string
    NEXT_AUTH?: NEXT_AUTHListRelationFilter
    Post?: PostListRelationFilter
  }

  export type NEXT_USEROrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    avatar?: SortOrderInput | SortOrder
    Job?: SortOrderInput | SortOrder
    Introduce?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    NEXT_AUTH?: NEXT_AUTHOrderByRelationAggregateInput
    Post?: PostOrderByRelationAggregateInput
  }

  export type NEXT_USERWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NEXT_USERWhereInput | NEXT_USERWhereInput[]
    OR?: NEXT_USERWhereInput[]
    NOT?: NEXT_USERWhereInput | NEXT_USERWhereInput[]
    nickname?: StringFilter<"NEXT_USER"> | string
    avatar?: StringNullableFilter<"NEXT_USER"> | string | null
    Job?: StringNullableFilter<"NEXT_USER"> | string | null
    Introduce?: StringNullableFilter<"NEXT_USER"> | string | null
    createdAt?: DateTimeFilter<"NEXT_USER"> | Date | string
    updatedAt?: DateTimeFilter<"NEXT_USER"> | Date | string
    NEXT_AUTH?: NEXT_AUTHListRelationFilter
    Post?: PostListRelationFilter
  }, "id">

  export type NEXT_USEROrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    avatar?: SortOrderInput | SortOrder
    Job?: SortOrderInput | SortOrder
    Introduce?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NEXT_USERCountOrderByAggregateInput
    _avg?: NEXT_USERAvgOrderByAggregateInput
    _max?: NEXT_USERMaxOrderByAggregateInput
    _min?: NEXT_USERMinOrderByAggregateInput
    _sum?: NEXT_USERSumOrderByAggregateInput
  }

  export type NEXT_USERScalarWhereWithAggregatesInput = {
    AND?: NEXT_USERScalarWhereWithAggregatesInput | NEXT_USERScalarWhereWithAggregatesInput[]
    OR?: NEXT_USERScalarWhereWithAggregatesInput[]
    NOT?: NEXT_USERScalarWhereWithAggregatesInput | NEXT_USERScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NEXT_USER"> | number
    nickname?: StringWithAggregatesFilter<"NEXT_USER"> | string
    avatar?: StringNullableWithAggregatesFilter<"NEXT_USER"> | string | null
    Job?: StringNullableWithAggregatesFilter<"NEXT_USER"> | string | null
    Introduce?: StringNullableWithAggregatesFilter<"NEXT_USER"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NEXT_USER"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NEXT_USER"> | Date | string
  }

  export type NEXT_AUTHWhereInput = {
    AND?: NEXT_AUTHWhereInput | NEXT_AUTHWhereInput[]
    OR?: NEXT_AUTHWhereInput[]
    NOT?: NEXT_AUTHWhereInput | NEXT_AUTHWhereInput[]
    id?: IntFilter<"NEXT_AUTH"> | number
    UserId?: IntFilter<"NEXT_AUTH"> | number
    Identity_type?: EnumIdentity_typeFilter<"NEXT_AUTH"> | $Enums.Identity_type
    Identifier?: StringFilter<"NEXT_AUTH"> | string
    credential?: StringFilter<"NEXT_AUTH"> | string
    createdAt?: DateTimeFilter<"NEXT_AUTH"> | Date | string
    updatedAt?: DateTimeFilter<"NEXT_AUTH"> | Date | string
    User?: XOR<NEXT_USERScalarRelationFilter, NEXT_USERWhereInput>
  }

  export type NEXT_AUTHOrderByWithRelationInput = {
    id?: SortOrder
    UserId?: SortOrder
    Identity_type?: SortOrder
    Identifier?: SortOrder
    credential?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: NEXT_USEROrderByWithRelationInput
  }

  export type NEXT_AUTHWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NEXT_AUTHWhereInput | NEXT_AUTHWhereInput[]
    OR?: NEXT_AUTHWhereInput[]
    NOT?: NEXT_AUTHWhereInput | NEXT_AUTHWhereInput[]
    UserId?: IntFilter<"NEXT_AUTH"> | number
    Identity_type?: EnumIdentity_typeFilter<"NEXT_AUTH"> | $Enums.Identity_type
    Identifier?: StringFilter<"NEXT_AUTH"> | string
    credential?: StringFilter<"NEXT_AUTH"> | string
    createdAt?: DateTimeFilter<"NEXT_AUTH"> | Date | string
    updatedAt?: DateTimeFilter<"NEXT_AUTH"> | Date | string
    User?: XOR<NEXT_USERScalarRelationFilter, NEXT_USERWhereInput>
  }, "id">

  export type NEXT_AUTHOrderByWithAggregationInput = {
    id?: SortOrder
    UserId?: SortOrder
    Identity_type?: SortOrder
    Identifier?: SortOrder
    credential?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NEXT_AUTHCountOrderByAggregateInput
    _avg?: NEXT_AUTHAvgOrderByAggregateInput
    _max?: NEXT_AUTHMaxOrderByAggregateInput
    _min?: NEXT_AUTHMinOrderByAggregateInput
    _sum?: NEXT_AUTHSumOrderByAggregateInput
  }

  export type NEXT_AUTHScalarWhereWithAggregatesInput = {
    AND?: NEXT_AUTHScalarWhereWithAggregatesInput | NEXT_AUTHScalarWhereWithAggregatesInput[]
    OR?: NEXT_AUTHScalarWhereWithAggregatesInput[]
    NOT?: NEXT_AUTHScalarWhereWithAggregatesInput | NEXT_AUTHScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NEXT_AUTH"> | number
    UserId?: IntWithAggregatesFilter<"NEXT_AUTH"> | number
    Identity_type?: EnumIdentity_typeWithAggregatesFilter<"NEXT_AUTH"> | $Enums.Identity_type
    Identifier?: StringWithAggregatesFilter<"NEXT_AUTH"> | string
    credential?: StringWithAggregatesFilter<"NEXT_AUTH"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NEXT_AUTH"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NEXT_AUTH"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    views?: IntFilter<"Post"> | number
    isDelete?: BoolFilter<"Post"> | boolean
    UserId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    User?: XOR<NEXT_USERScalarRelationFilter, NEXT_USERWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    isDelete?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: NEXT_USEROrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    views?: IntFilter<"Post"> | number
    isDelete?: BoolFilter<"Post"> | boolean
    UserId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    User?: XOR<NEXT_USERScalarRelationFilter, NEXT_USERWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    isDelete?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    views?: IntWithAggregatesFilter<"Post"> | number
    isDelete?: BoolWithAggregatesFilter<"Post"> | boolean
    UserId?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type NEXT_USERCreateInput = {
    nickname: string
    avatar?: string | null
    Job?: string | null
    Introduce?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NEXT_AUTH?: NEXT_AUTHCreateNestedManyWithoutUserInput
    Post?: PostCreateNestedManyWithoutUserInput
  }

  export type NEXT_USERUncheckedCreateInput = {
    id?: number
    nickname: string
    avatar?: string | null
    Job?: string | null
    Introduce?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NEXT_AUTH?: NEXT_AUTHUncheckedCreateNestedManyWithoutUserInput
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type NEXT_USERUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NEXT_AUTH?: NEXT_AUTHUpdateManyWithoutUserNestedInput
    Post?: PostUpdateManyWithoutUserNestedInput
  }

  export type NEXT_USERUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NEXT_AUTH?: NEXT_AUTHUncheckedUpdateManyWithoutUserNestedInput
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NEXT_USERCreateManyInput = {
    id?: number
    nickname: string
    avatar?: string | null
    Job?: string | null
    Introduce?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NEXT_USERUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NEXT_USERUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NEXT_AUTHCreateInput = {
    Identity_type?: $Enums.Identity_type
    Identifier: string
    credential: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: NEXT_USERCreateNestedOneWithoutNEXT_AUTHInput
  }

  export type NEXT_AUTHUncheckedCreateInput = {
    id?: number
    UserId: number
    Identity_type?: $Enums.Identity_type
    Identifier: string
    credential: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NEXT_AUTHUpdateInput = {
    Identity_type?: EnumIdentity_typeFieldUpdateOperationsInput | $Enums.Identity_type
    Identifier?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: NEXT_USERUpdateOneRequiredWithoutNEXT_AUTHNestedInput
  }

  export type NEXT_AUTHUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    Identity_type?: EnumIdentity_typeFieldUpdateOperationsInput | $Enums.Identity_type
    Identifier?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NEXT_AUTHCreateManyInput = {
    id?: number
    UserId: number
    Identity_type?: $Enums.Identity_type
    Identifier: string
    credential: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NEXT_AUTHUpdateManyMutationInput = {
    Identity_type?: EnumIdentity_typeFieldUpdateOperationsInput | $Enums.Identity_type
    Identifier?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NEXT_AUTHUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    Identity_type?: EnumIdentity_typeFieldUpdateOperationsInput | $Enums.Identity_type
    Identifier?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    content: string
    views?: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    User: NEXT_USERCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    views?: number
    isDelete?: boolean
    UserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: NEXT_USERUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content: string
    views?: number
    isDelete?: boolean
    UserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NEXT_AUTHListRelationFilter = {
    every?: NEXT_AUTHWhereInput
    some?: NEXT_AUTHWhereInput
    none?: NEXT_AUTHWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NEXT_AUTHOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NEXT_USERCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    avatar?: SortOrder
    Job?: SortOrder
    Introduce?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NEXT_USERAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NEXT_USERMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    avatar?: SortOrder
    Job?: SortOrder
    Introduce?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NEXT_USERMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    avatar?: SortOrder
    Job?: SortOrder
    Introduce?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NEXT_USERSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumIdentity_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity_type | EnumIdentity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdentity_typeFilter<$PrismaModel> | $Enums.Identity_type
  }

  export type NEXT_USERScalarRelationFilter = {
    is?: NEXT_USERWhereInput
    isNot?: NEXT_USERWhereInput
  }

  export type NEXT_AUTHCountOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    Identity_type?: SortOrder
    Identifier?: SortOrder
    credential?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NEXT_AUTHAvgOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
  }

  export type NEXT_AUTHMaxOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    Identity_type?: SortOrder
    Identifier?: SortOrder
    credential?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NEXT_AUTHMinOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    Identity_type?: SortOrder
    Identifier?: SortOrder
    credential?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NEXT_AUTHSumOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
  }

  export type EnumIdentity_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity_type | EnumIdentity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdentity_typeWithAggregatesFilter<$PrismaModel> | $Enums.Identity_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdentity_typeFilter<$PrismaModel>
    _max?: NestedEnumIdentity_typeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    isDelete?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    UserId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    isDelete?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    isDelete?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    UserId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NEXT_AUTHCreateNestedManyWithoutUserInput = {
    create?: XOR<NEXT_AUTHCreateWithoutUserInput, NEXT_AUTHUncheckedCreateWithoutUserInput> | NEXT_AUTHCreateWithoutUserInput[] | NEXT_AUTHUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NEXT_AUTHCreateOrConnectWithoutUserInput | NEXT_AUTHCreateOrConnectWithoutUserInput[]
    createMany?: NEXT_AUTHCreateManyUserInputEnvelope
    connect?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type NEXT_AUTHUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NEXT_AUTHCreateWithoutUserInput, NEXT_AUTHUncheckedCreateWithoutUserInput> | NEXT_AUTHCreateWithoutUserInput[] | NEXT_AUTHUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NEXT_AUTHCreateOrConnectWithoutUserInput | NEXT_AUTHCreateOrConnectWithoutUserInput[]
    createMany?: NEXT_AUTHCreateManyUserInputEnvelope
    connect?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NEXT_AUTHUpdateManyWithoutUserNestedInput = {
    create?: XOR<NEXT_AUTHCreateWithoutUserInput, NEXT_AUTHUncheckedCreateWithoutUserInput> | NEXT_AUTHCreateWithoutUserInput[] | NEXT_AUTHUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NEXT_AUTHCreateOrConnectWithoutUserInput | NEXT_AUTHCreateOrConnectWithoutUserInput[]
    upsert?: NEXT_AUTHUpsertWithWhereUniqueWithoutUserInput | NEXT_AUTHUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NEXT_AUTHCreateManyUserInputEnvelope
    set?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    disconnect?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    delete?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    connect?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    update?: NEXT_AUTHUpdateWithWhereUniqueWithoutUserInput | NEXT_AUTHUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NEXT_AUTHUpdateManyWithWhereWithoutUserInput | NEXT_AUTHUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NEXT_AUTHScalarWhereInput | NEXT_AUTHScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NEXT_AUTHUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NEXT_AUTHCreateWithoutUserInput, NEXT_AUTHUncheckedCreateWithoutUserInput> | NEXT_AUTHCreateWithoutUserInput[] | NEXT_AUTHUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NEXT_AUTHCreateOrConnectWithoutUserInput | NEXT_AUTHCreateOrConnectWithoutUserInput[]
    upsert?: NEXT_AUTHUpsertWithWhereUniqueWithoutUserInput | NEXT_AUTHUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NEXT_AUTHCreateManyUserInputEnvelope
    set?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    disconnect?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    delete?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    connect?: NEXT_AUTHWhereUniqueInput | NEXT_AUTHWhereUniqueInput[]
    update?: NEXT_AUTHUpdateWithWhereUniqueWithoutUserInput | NEXT_AUTHUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NEXT_AUTHUpdateManyWithWhereWithoutUserInput | NEXT_AUTHUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NEXT_AUTHScalarWhereInput | NEXT_AUTHScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type NEXT_USERCreateNestedOneWithoutNEXT_AUTHInput = {
    create?: XOR<NEXT_USERCreateWithoutNEXT_AUTHInput, NEXT_USERUncheckedCreateWithoutNEXT_AUTHInput>
    connectOrCreate?: NEXT_USERCreateOrConnectWithoutNEXT_AUTHInput
    connect?: NEXT_USERWhereUniqueInput
  }

  export type EnumIdentity_typeFieldUpdateOperationsInput = {
    set?: $Enums.Identity_type
  }

  export type NEXT_USERUpdateOneRequiredWithoutNEXT_AUTHNestedInput = {
    create?: XOR<NEXT_USERCreateWithoutNEXT_AUTHInput, NEXT_USERUncheckedCreateWithoutNEXT_AUTHInput>
    connectOrCreate?: NEXT_USERCreateOrConnectWithoutNEXT_AUTHInput
    upsert?: NEXT_USERUpsertWithoutNEXT_AUTHInput
    connect?: NEXT_USERWhereUniqueInput
    update?: XOR<XOR<NEXT_USERUpdateToOneWithWhereWithoutNEXT_AUTHInput, NEXT_USERUpdateWithoutNEXT_AUTHInput>, NEXT_USERUncheckedUpdateWithoutNEXT_AUTHInput>
  }

  export type NEXT_USERCreateNestedOneWithoutPostInput = {
    create?: XOR<NEXT_USERCreateWithoutPostInput, NEXT_USERUncheckedCreateWithoutPostInput>
    connectOrCreate?: NEXT_USERCreateOrConnectWithoutPostInput
    connect?: NEXT_USERWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NEXT_USERUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<NEXT_USERCreateWithoutPostInput, NEXT_USERUncheckedCreateWithoutPostInput>
    connectOrCreate?: NEXT_USERCreateOrConnectWithoutPostInput
    upsert?: NEXT_USERUpsertWithoutPostInput
    connect?: NEXT_USERWhereUniqueInput
    update?: XOR<XOR<NEXT_USERUpdateToOneWithWhereWithoutPostInput, NEXT_USERUpdateWithoutPostInput>, NEXT_USERUncheckedUpdateWithoutPostInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumIdentity_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity_type | EnumIdentity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdentity_typeFilter<$PrismaModel> | $Enums.Identity_type
  }

  export type NestedEnumIdentity_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity_type | EnumIdentity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Identity_type[] | ListEnumIdentity_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdentity_typeWithAggregatesFilter<$PrismaModel> | $Enums.Identity_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdentity_typeFilter<$PrismaModel>
    _max?: NestedEnumIdentity_typeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NEXT_AUTHCreateWithoutUserInput = {
    Identity_type?: $Enums.Identity_type
    Identifier: string
    credential: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NEXT_AUTHUncheckedCreateWithoutUserInput = {
    id?: number
    Identity_type?: $Enums.Identity_type
    Identifier: string
    credential: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NEXT_AUTHCreateOrConnectWithoutUserInput = {
    where: NEXT_AUTHWhereUniqueInput
    create: XOR<NEXT_AUTHCreateWithoutUserInput, NEXT_AUTHUncheckedCreateWithoutUserInput>
  }

  export type NEXT_AUTHCreateManyUserInputEnvelope = {
    data: NEXT_AUTHCreateManyUserInput | NEXT_AUTHCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    title: string
    content: string
    views?: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    views?: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NEXT_AUTHUpsertWithWhereUniqueWithoutUserInput = {
    where: NEXT_AUTHWhereUniqueInput
    update: XOR<NEXT_AUTHUpdateWithoutUserInput, NEXT_AUTHUncheckedUpdateWithoutUserInput>
    create: XOR<NEXT_AUTHCreateWithoutUserInput, NEXT_AUTHUncheckedCreateWithoutUserInput>
  }

  export type NEXT_AUTHUpdateWithWhereUniqueWithoutUserInput = {
    where: NEXT_AUTHWhereUniqueInput
    data: XOR<NEXT_AUTHUpdateWithoutUserInput, NEXT_AUTHUncheckedUpdateWithoutUserInput>
  }

  export type NEXT_AUTHUpdateManyWithWhereWithoutUserInput = {
    where: NEXT_AUTHScalarWhereInput
    data: XOR<NEXT_AUTHUpdateManyMutationInput, NEXT_AUTHUncheckedUpdateManyWithoutUserInput>
  }

  export type NEXT_AUTHScalarWhereInput = {
    AND?: NEXT_AUTHScalarWhereInput | NEXT_AUTHScalarWhereInput[]
    OR?: NEXT_AUTHScalarWhereInput[]
    NOT?: NEXT_AUTHScalarWhereInput | NEXT_AUTHScalarWhereInput[]
    id?: IntFilter<"NEXT_AUTH"> | number
    UserId?: IntFilter<"NEXT_AUTH"> | number
    Identity_type?: EnumIdentity_typeFilter<"NEXT_AUTH"> | $Enums.Identity_type
    Identifier?: StringFilter<"NEXT_AUTH"> | string
    credential?: StringFilter<"NEXT_AUTH"> | string
    createdAt?: DateTimeFilter<"NEXT_AUTH"> | Date | string
    updatedAt?: DateTimeFilter<"NEXT_AUTH"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    views?: IntFilter<"Post"> | number
    isDelete?: BoolFilter<"Post"> | boolean
    UserId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type NEXT_USERCreateWithoutNEXT_AUTHInput = {
    nickname: string
    avatar?: string | null
    Job?: string | null
    Introduce?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostCreateNestedManyWithoutUserInput
  }

  export type NEXT_USERUncheckedCreateWithoutNEXT_AUTHInput = {
    id?: number
    nickname: string
    avatar?: string | null
    Job?: string | null
    Introduce?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type NEXT_USERCreateOrConnectWithoutNEXT_AUTHInput = {
    where: NEXT_USERWhereUniqueInput
    create: XOR<NEXT_USERCreateWithoutNEXT_AUTHInput, NEXT_USERUncheckedCreateWithoutNEXT_AUTHInput>
  }

  export type NEXT_USERUpsertWithoutNEXT_AUTHInput = {
    update: XOR<NEXT_USERUpdateWithoutNEXT_AUTHInput, NEXT_USERUncheckedUpdateWithoutNEXT_AUTHInput>
    create: XOR<NEXT_USERCreateWithoutNEXT_AUTHInput, NEXT_USERUncheckedCreateWithoutNEXT_AUTHInput>
    where?: NEXT_USERWhereInput
  }

  export type NEXT_USERUpdateToOneWithWhereWithoutNEXT_AUTHInput = {
    where?: NEXT_USERWhereInput
    data: XOR<NEXT_USERUpdateWithoutNEXT_AUTHInput, NEXT_USERUncheckedUpdateWithoutNEXT_AUTHInput>
  }

  export type NEXT_USERUpdateWithoutNEXT_AUTHInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutUserNestedInput
  }

  export type NEXT_USERUncheckedUpdateWithoutNEXT_AUTHInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NEXT_USERCreateWithoutPostInput = {
    nickname: string
    avatar?: string | null
    Job?: string | null
    Introduce?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NEXT_AUTH?: NEXT_AUTHCreateNestedManyWithoutUserInput
  }

  export type NEXT_USERUncheckedCreateWithoutPostInput = {
    id?: number
    nickname: string
    avatar?: string | null
    Job?: string | null
    Introduce?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    NEXT_AUTH?: NEXT_AUTHUncheckedCreateNestedManyWithoutUserInput
  }

  export type NEXT_USERCreateOrConnectWithoutPostInput = {
    where: NEXT_USERWhereUniqueInput
    create: XOR<NEXT_USERCreateWithoutPostInput, NEXT_USERUncheckedCreateWithoutPostInput>
  }

  export type NEXT_USERUpsertWithoutPostInput = {
    update: XOR<NEXT_USERUpdateWithoutPostInput, NEXT_USERUncheckedUpdateWithoutPostInput>
    create: XOR<NEXT_USERCreateWithoutPostInput, NEXT_USERUncheckedCreateWithoutPostInput>
    where?: NEXT_USERWhereInput
  }

  export type NEXT_USERUpdateToOneWithWhereWithoutPostInput = {
    where?: NEXT_USERWhereInput
    data: XOR<NEXT_USERUpdateWithoutPostInput, NEXT_USERUncheckedUpdateWithoutPostInput>
  }

  export type NEXT_USERUpdateWithoutPostInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NEXT_AUTH?: NEXT_AUTHUpdateManyWithoutUserNestedInput
  }

  export type NEXT_USERUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Job?: NullableStringFieldUpdateOperationsInput | string | null
    Introduce?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NEXT_AUTH?: NEXT_AUTHUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NEXT_AUTHCreateManyUserInput = {
    id?: number
    Identity_type?: $Enums.Identity_type
    Identifier: string
    credential: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    content: string
    views?: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NEXT_AUTHUpdateWithoutUserInput = {
    Identity_type?: EnumIdentity_typeFieldUpdateOperationsInput | $Enums.Identity_type
    Identifier?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NEXT_AUTHUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Identity_type?: EnumIdentity_typeFieldUpdateOperationsInput | $Enums.Identity_type
    Identifier?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NEXT_AUTHUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Identity_type?: EnumIdentity_typeFieldUpdateOperationsInput | $Enums.Identity_type
    Identifier?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}