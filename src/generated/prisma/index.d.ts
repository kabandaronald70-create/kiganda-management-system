
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Mark
 * 
 */
export type Mark = $Result.DefaultSelection<Prisma.$MarkPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model FeePayment
 * 
 */
export type FeePayment = $Result.DefaultSelection<Prisma.$FeePaymentPayload>
/**
 * Model FeeAssessment
 * 
 */
export type FeeAssessment = $Result.DefaultSelection<Prisma.$FeeAssessmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mark`: Exposes CRUD operations for the **Mark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.mark.findMany()
    * ```
    */
  get mark(): Prisma.MarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feePayment`: Exposes CRUD operations for the **FeePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeePayments
    * const feePayments = await prisma.feePayment.findMany()
    * ```
    */
  get feePayment(): Prisma.FeePaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeAssessment`: Exposes CRUD operations for the **FeeAssessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeeAssessments
    * const feeAssessments = await prisma.feeAssessment.findMany()
    * ```
    */
  get feeAssessment(): Prisma.FeeAssessmentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    Student: 'Student',
    Mark: 'Mark',
    Attendance: 'Attendance',
    FeePayment: 'FeePayment',
    FeeAssessment: 'FeeAssessment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "mark" | "attendance" | "feePayment" | "feeAssessment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Mark: {
        payload: Prisma.$MarkPayload<ExtArgs>
        fields: Prisma.MarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findFirst: {
            args: Prisma.MarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findMany: {
            args: Prisma.MarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          create: {
            args: Prisma.MarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          createMany: {
            args: Prisma.MarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          delete: {
            args: Prisma.MarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          update: {
            args: Prisma.MarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          deleteMany: {
            args: Prisma.MarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          upsert: {
            args: Prisma.MarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          aggregate: {
            args: Prisma.MarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMark>
          }
          groupBy: {
            args: Prisma.MarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkCountArgs<ExtArgs>
            result: $Utils.Optional<MarkCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      FeePayment: {
        payload: Prisma.$FeePaymentPayload<ExtArgs>
        fields: Prisma.FeePaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeePaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeePaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          findFirst: {
            args: Prisma.FeePaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeePaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          findMany: {
            args: Prisma.FeePaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>[]
          }
          create: {
            args: Prisma.FeePaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          createMany: {
            args: Prisma.FeePaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeePaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>[]
          }
          delete: {
            args: Prisma.FeePaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          update: {
            args: Prisma.FeePaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          deleteMany: {
            args: Prisma.FeePaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeePaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeePaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>[]
          }
          upsert: {
            args: Prisma.FeePaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePaymentPayload>
          }
          aggregate: {
            args: Prisma.FeePaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeePayment>
          }
          groupBy: {
            args: Prisma.FeePaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeePaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeePaymentCountArgs<ExtArgs>
            result: $Utils.Optional<FeePaymentCountAggregateOutputType> | number
          }
        }
      }
      FeeAssessment: {
        payload: Prisma.$FeeAssessmentPayload<ExtArgs>
        fields: Prisma.FeeAssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeAssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeAssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>
          }
          findFirst: {
            args: Prisma.FeeAssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeAssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>
          }
          findMany: {
            args: Prisma.FeeAssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>[]
          }
          create: {
            args: Prisma.FeeAssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>
          }
          createMany: {
            args: Prisma.FeeAssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeeAssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>[]
          }
          delete: {
            args: Prisma.FeeAssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>
          }
          update: {
            args: Prisma.FeeAssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>
          }
          deleteMany: {
            args: Prisma.FeeAssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeAssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeeAssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>[]
          }
          upsert: {
            args: Prisma.FeeAssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeAssessmentPayload>
          }
          aggregate: {
            args: Prisma.FeeAssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeAssessment>
          }
          groupBy: {
            args: Prisma.FeeAssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeAssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeAssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<FeeAssessmentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    mark?: MarkOmit
    attendance?: AttendanceOmit
    feePayment?: FeePaymentOmit
    feeAssessment?: FeeAssessmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    students: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | UserCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    marks: number
    attendance: number
    fees: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marks?: boolean | StudentCountOutputTypeCountMarksArgs
    attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs
    fees?: boolean | StudentCountOutputTypeCountFeesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeePaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    students?: boolean | User$studentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | User$studentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends User$studentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.students
   */
  export type User$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    guardianId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    guardianId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    class: string | null
    stream: string | null
    guardianId: number | null
    isArchived: boolean | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    class: string | null
    stream: string | null
    guardianId: number | null
    isArchived: boolean | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    class: number
    stream: number
    guardianId: number
    isArchived: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    guardianId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    guardianId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    class?: true
    stream?: true
    guardianId?: true
    isArchived?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    class?: true
    stream?: true
    guardianId?: true
    isArchived?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    class?: true
    stream?: true
    guardianId?: true
    isArchived?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    class: string
    stream: string
    guardianId: number
    isArchived: boolean
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    class?: boolean
    stream?: boolean
    guardianId?: boolean
    isArchived?: boolean
    guardian?: boolean | UserDefaultArgs<ExtArgs>
    marks?: boolean | Student$marksArgs<ExtArgs>
    attendance?: boolean | Student$attendanceArgs<ExtArgs>
    fees?: boolean | Student$feesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    class?: boolean
    stream?: boolean
    guardianId?: boolean
    isArchived?: boolean
    guardian?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    class?: boolean
    stream?: boolean
    guardianId?: boolean
    isArchived?: boolean
    guardian?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    class?: boolean
    stream?: boolean
    guardianId?: boolean
    isArchived?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "class" | "stream" | "guardianId" | "isArchived", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardian?: boolean | UserDefaultArgs<ExtArgs>
    marks?: boolean | Student$marksArgs<ExtArgs>
    attendance?: boolean | Student$attendanceArgs<ExtArgs>
    fees?: boolean | Student$feesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardian?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardian?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      guardian: Prisma.$UserPayload<ExtArgs>
      marks: Prisma.$MarkPayload<ExtArgs>[]
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      fees: Prisma.$FeePaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      class: string
      stream: string
      guardianId: number
      isArchived: boolean
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guardian<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    marks<T extends Student$marksArgs<ExtArgs> = {}>(args?: Subset<T, Student$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance<T extends Student$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fees<T extends Student$feesArgs<ExtArgs> = {}>(args?: Subset<T, Student$feesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly class: FieldRef<"Student", 'String'>
    readonly stream: FieldRef<"Student", 'String'>
    readonly guardianId: FieldRef<"Student", 'Int'>
    readonly isArchived: FieldRef<"Student", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.marks
   */
  export type Student$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    cursor?: MarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Student.attendance
   */
  export type Student$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Student.fees
   */
  export type Student$feesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    where?: FeePaymentWhereInput
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    cursor?: FeePaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Mark
   */

  export type AggregateMark = {
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  export type MarkAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    academicYear: number | null
    score: number | null
  }

  export type MarkSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    academicYear: number | null
    score: number | null
  }

  export type MarkMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    subject: string | null
    term: string | null
    academicYear: number | null
    score: number | null
    grade: string | null
  }

  export type MarkMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    subject: string | null
    term: string | null
    academicYear: number | null
    score: number | null
    grade: string | null
  }

  export type MarkCountAggregateOutputType = {
    id: number
    studentId: number
    subject: number
    term: number
    academicYear: number
    score: number
    grade: number
    _all: number
  }


  export type MarkAvgAggregateInputType = {
    id?: true
    studentId?: true
    academicYear?: true
    score?: true
  }

  export type MarkSumAggregateInputType = {
    id?: true
    studentId?: true
    academicYear?: true
    score?: true
  }

  export type MarkMinAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    academicYear?: true
    score?: true
    grade?: true
  }

  export type MarkMaxAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    academicYear?: true
    score?: true
    grade?: true
  }

  export type MarkCountAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    academicYear?: true
    score?: true
    grade?: true
    _all?: true
  }

  export type MarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mark to aggregate.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkMaxAggregateInputType
  }

  export type GetMarkAggregateType<T extends MarkAggregateArgs> = {
        [P in keyof T & keyof AggregateMark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMark[P]>
      : GetScalarType<T[P], AggregateMark[P]>
  }




  export type MarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithAggregationInput | MarkOrderByWithAggregationInput[]
    by: MarkScalarFieldEnum[] | MarkScalarFieldEnum
    having?: MarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkCountAggregateInputType | true
    _avg?: MarkAvgAggregateInputType
    _sum?: MarkSumAggregateInputType
    _min?: MarkMinAggregateInputType
    _max?: MarkMaxAggregateInputType
  }

  export type MarkGroupByOutputType = {
    id: number
    studentId: number
    subject: string
    term: string
    academicYear: number
    score: number
    grade: string
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  type GetMarkGroupByPayload<T extends MarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkGroupByOutputType[P]>
            : GetScalarType<T[P], MarkGroupByOutputType[P]>
        }
      >
    >


  export type MarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    academicYear?: boolean
    score?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    academicYear?: boolean
    score?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    academicYear?: boolean
    score?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectScalar = {
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    academicYear?: boolean
    score?: boolean
    grade?: boolean
  }

  export type MarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subject" | "term" | "academicYear" | "score" | "grade", ExtArgs["result"]["mark"]>
  export type MarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type MarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type MarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $MarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mark"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      subject: string
      term: string
      academicYear: number
      score: number
      grade: string
    }, ExtArgs["result"]["mark"]>
    composites: {}
  }

  type MarkGetPayload<S extends boolean | null | undefined | MarkDefaultArgs> = $Result.GetResult<Prisma.$MarkPayload, S>

  type MarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkCountAggregateInputType | true
    }

  export interface MarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mark'], meta: { name: 'Mark' } }
    /**
     * Find zero or one Mark that matches the filter.
     * @param {MarkFindUniqueArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkFindUniqueArgs>(args: SelectSubset<T, MarkFindUniqueArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkFindUniqueOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkFindFirstArgs>(args?: SelectSubset<T, MarkFindFirstArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.mark.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.mark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markWithIdOnly = await prisma.mark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarkFindManyArgs>(args?: SelectSubset<T, MarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mark.
     * @param {MarkCreateArgs} args - Arguments to create a Mark.
     * @example
     * // Create one Mark
     * const Mark = await prisma.mark.create({
     *   data: {
     *     // ... data to create a Mark
     *   }
     * })
     * 
     */
    create<T extends MarkCreateArgs>(args: SelectSubset<T, MarkCreateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marks.
     * @param {MarkCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const mark = await prisma.mark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkCreateManyArgs>(args?: SelectSubset<T, MarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marks and returns the data saved in the database.
     * @param {MarkCreateManyAndReturnArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const mark = await prisma.mark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marks and only return the `id`
     * const markWithIdOnly = await prisma.mark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarkCreateManyAndReturnArgs>(args?: SelectSubset<T, MarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mark.
     * @param {MarkDeleteArgs} args - Arguments to delete one Mark.
     * @example
     * // Delete one Mark
     * const Mark = await prisma.mark.delete({
     *   where: {
     *     // ... filter to delete one Mark
     *   }
     * })
     * 
     */
    delete<T extends MarkDeleteArgs>(args: SelectSubset<T, MarkDeleteArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mark.
     * @param {MarkUpdateArgs} args - Arguments to update one Mark.
     * @example
     * // Update one Mark
     * const mark = await prisma.mark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkUpdateArgs>(args: SelectSubset<T, MarkUpdateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marks.
     * @param {MarkDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.mark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkDeleteManyArgs>(args?: SelectSubset<T, MarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkUpdateManyArgs>(args: SelectSubset<T, MarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks and returns the data updated in the database.
     * @param {MarkUpdateManyAndReturnArgs} args - Arguments to update many Marks.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marks and only return the `id`
     * const markWithIdOnly = await prisma.mark.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarkUpdateManyAndReturnArgs>(args: SelectSubset<T, MarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mark.
     * @param {MarkUpsertArgs} args - Arguments to update or create a Mark.
     * @example
     * // Update or create a Mark
     * const mark = await prisma.mark.upsert({
     *   create: {
     *     // ... data to create a Mark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mark we want to update
     *   }
     * })
     */
    upsert<T extends MarkUpsertArgs>(args: SelectSubset<T, MarkUpsertArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.mark.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarkCountArgs>(
      args?: Subset<T, MarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkAggregateArgs>(args: Subset<T, MarkAggregateArgs>): Prisma.PrismaPromise<GetMarkAggregateType<T>>

    /**
     * Group by Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkGroupByArgs} args - Group by arguments.
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
      T extends MarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkGroupByArgs['orderBy'] }
        : { orderBy?: MarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mark model
   */
  readonly fields: MarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mark model
   */
  interface MarkFieldRefs {
    readonly id: FieldRef<"Mark", 'Int'>
    readonly studentId: FieldRef<"Mark", 'Int'>
    readonly subject: FieldRef<"Mark", 'String'>
    readonly term: FieldRef<"Mark", 'String'>
    readonly academicYear: FieldRef<"Mark", 'Int'>
    readonly score: FieldRef<"Mark", 'Int'>
    readonly grade: FieldRef<"Mark", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mark findUnique
   */
  export type MarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findUniqueOrThrow
   */
  export type MarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findFirst
   */
  export type MarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findFirstOrThrow
   */
  export type MarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findMany
   */
  export type MarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark create
   */
  export type MarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Mark.
     */
    data: XOR<MarkCreateInput, MarkUncheckedCreateInput>
  }

  /**
   * Mark createMany
   */
  export type MarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mark createManyAndReturn
   */
  export type MarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mark update
   */
  export type MarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Mark.
     */
    data: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
    /**
     * Choose, which Mark to update.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark updateMany
   */
  export type MarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
  }

  /**
   * Mark updateManyAndReturn
   */
  export type MarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mark upsert
   */
  export type MarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Mark to update in case it exists.
     */
    where: MarkWhereUniqueInput
    /**
     * In case the Mark found by the `where` argument doesn't exist, create a new Mark with this data.
     */
    create: XOR<MarkCreateInput, MarkUncheckedCreateInput>
    /**
     * In case the Mark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
  }

  /**
   * Mark delete
   */
  export type MarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter which Mark to delete.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark deleteMany
   */
  export type MarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to delete.
     */
    limit?: number
  }

  /**
   * Mark without action
   */
  export type MarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    date: Date | null
    status: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    date: Date | null
    status: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    date: number
    status: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    studentId: number
    date: Date
    status: string
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "date" | "status", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      date: Date
      status: string
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly studentId: FieldRef<"Attendance", 'Int'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model FeePayment
   */

  export type AggregateFeePayment = {
    _count: FeePaymentCountAggregateOutputType | null
    _avg: FeePaymentAvgAggregateOutputType | null
    _sum: FeePaymentSumAggregateOutputType | null
    _min: FeePaymentMinAggregateOutputType | null
    _max: FeePaymentMaxAggregateOutputType | null
  }

  export type FeePaymentAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    amount: number | null
  }

  export type FeePaymentSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    amount: number | null
  }

  export type FeePaymentMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    amount: number | null
    date: Date | null
    receiptNumber: string | null
    idempotencyKey: string | null
  }

  export type FeePaymentMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    amount: number | null
    date: Date | null
    receiptNumber: string | null
    idempotencyKey: string | null
  }

  export type FeePaymentCountAggregateOutputType = {
    id: number
    studentId: number
    amount: number
    date: number
    receiptNumber: number
    idempotencyKey: number
    _all: number
  }


  export type FeePaymentAvgAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
  }

  export type FeePaymentSumAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
  }

  export type FeePaymentMinAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    date?: true
    receiptNumber?: true
    idempotencyKey?: true
  }

  export type FeePaymentMaxAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    date?: true
    receiptNumber?: true
    idempotencyKey?: true
  }

  export type FeePaymentCountAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    date?: true
    receiptNumber?: true
    idempotencyKey?: true
    _all?: true
  }

  export type FeePaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeePayment to aggregate.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeePayments
    **/
    _count?: true | FeePaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeePaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeePaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeePaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeePaymentMaxAggregateInputType
  }

  export type GetFeePaymentAggregateType<T extends FeePaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeePayment[P]>
      : GetScalarType<T[P], AggregateFeePayment[P]>
  }




  export type FeePaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeePaymentWhereInput
    orderBy?: FeePaymentOrderByWithAggregationInput | FeePaymentOrderByWithAggregationInput[]
    by: FeePaymentScalarFieldEnum[] | FeePaymentScalarFieldEnum
    having?: FeePaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeePaymentCountAggregateInputType | true
    _avg?: FeePaymentAvgAggregateInputType
    _sum?: FeePaymentSumAggregateInputType
    _min?: FeePaymentMinAggregateInputType
    _max?: FeePaymentMaxAggregateInputType
  }

  export type FeePaymentGroupByOutputType = {
    id: number
    studentId: number
    amount: number
    date: Date
    receiptNumber: string
    idempotencyKey: string | null
    _count: FeePaymentCountAggregateOutputType | null
    _avg: FeePaymentAvgAggregateOutputType | null
    _sum: FeePaymentSumAggregateOutputType | null
    _min: FeePaymentMinAggregateOutputType | null
    _max: FeePaymentMaxAggregateOutputType | null
  }

  type GetFeePaymentGroupByPayload<T extends FeePaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeePaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeePaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeePaymentGroupByOutputType[P]>
            : GetScalarType<T[P], FeePaymentGroupByOutputType[P]>
        }
      >
    >


  export type FeePaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    date?: boolean
    receiptNumber?: boolean
    idempotencyKey?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feePayment"]>

  export type FeePaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    date?: boolean
    receiptNumber?: boolean
    idempotencyKey?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feePayment"]>

  export type FeePaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    date?: boolean
    receiptNumber?: boolean
    idempotencyKey?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feePayment"]>

  export type FeePaymentSelectScalar = {
    id?: boolean
    studentId?: boolean
    amount?: boolean
    date?: boolean
    receiptNumber?: boolean
    idempotencyKey?: boolean
  }

  export type FeePaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "amount" | "date" | "receiptNumber" | "idempotencyKey", ExtArgs["result"]["feePayment"]>
  export type FeePaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type FeePaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type FeePaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $FeePaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeePayment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      amount: number
      date: Date
      receiptNumber: string
      idempotencyKey: string | null
    }, ExtArgs["result"]["feePayment"]>
    composites: {}
  }

  type FeePaymentGetPayload<S extends boolean | null | undefined | FeePaymentDefaultArgs> = $Result.GetResult<Prisma.$FeePaymentPayload, S>

  type FeePaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeePaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeePaymentCountAggregateInputType | true
    }

  export interface FeePaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeePayment'], meta: { name: 'FeePayment' } }
    /**
     * Find zero or one FeePayment that matches the filter.
     * @param {FeePaymentFindUniqueArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeePaymentFindUniqueArgs>(args: SelectSubset<T, FeePaymentFindUniqueArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeePayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeePaymentFindUniqueOrThrowArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeePaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, FeePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeePayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentFindFirstArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeePaymentFindFirstArgs>(args?: SelectSubset<T, FeePaymentFindFirstArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeePayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentFindFirstOrThrowArgs} args - Arguments to find a FeePayment
     * @example
     * // Get one FeePayment
     * const feePayment = await prisma.feePayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeePaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, FeePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeePayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeePayments
     * const feePayments = await prisma.feePayment.findMany()
     * 
     * // Get first 10 FeePayments
     * const feePayments = await prisma.feePayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feePaymentWithIdOnly = await prisma.feePayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeePaymentFindManyArgs>(args?: SelectSubset<T, FeePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeePayment.
     * @param {FeePaymentCreateArgs} args - Arguments to create a FeePayment.
     * @example
     * // Create one FeePayment
     * const FeePayment = await prisma.feePayment.create({
     *   data: {
     *     // ... data to create a FeePayment
     *   }
     * })
     * 
     */
    create<T extends FeePaymentCreateArgs>(args: SelectSubset<T, FeePaymentCreateArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeePayments.
     * @param {FeePaymentCreateManyArgs} args - Arguments to create many FeePayments.
     * @example
     * // Create many FeePayments
     * const feePayment = await prisma.feePayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeePaymentCreateManyArgs>(args?: SelectSubset<T, FeePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeePayments and returns the data saved in the database.
     * @param {FeePaymentCreateManyAndReturnArgs} args - Arguments to create many FeePayments.
     * @example
     * // Create many FeePayments
     * const feePayment = await prisma.feePayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeePayments and only return the `id`
     * const feePaymentWithIdOnly = await prisma.feePayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeePaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, FeePaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeePayment.
     * @param {FeePaymentDeleteArgs} args - Arguments to delete one FeePayment.
     * @example
     * // Delete one FeePayment
     * const FeePayment = await prisma.feePayment.delete({
     *   where: {
     *     // ... filter to delete one FeePayment
     *   }
     * })
     * 
     */
    delete<T extends FeePaymentDeleteArgs>(args: SelectSubset<T, FeePaymentDeleteArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeePayment.
     * @param {FeePaymentUpdateArgs} args - Arguments to update one FeePayment.
     * @example
     * // Update one FeePayment
     * const feePayment = await prisma.feePayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeePaymentUpdateArgs>(args: SelectSubset<T, FeePaymentUpdateArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeePayments.
     * @param {FeePaymentDeleteManyArgs} args - Arguments to filter FeePayments to delete.
     * @example
     * // Delete a few FeePayments
     * const { count } = await prisma.feePayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeePaymentDeleteManyArgs>(args?: SelectSubset<T, FeePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeePayments
     * const feePayment = await prisma.feePayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeePaymentUpdateManyArgs>(args: SelectSubset<T, FeePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeePayments and returns the data updated in the database.
     * @param {FeePaymentUpdateManyAndReturnArgs} args - Arguments to update many FeePayments.
     * @example
     * // Update many FeePayments
     * const feePayment = await prisma.feePayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeePayments and only return the `id`
     * const feePaymentWithIdOnly = await prisma.feePayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeePaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, FeePaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeePayment.
     * @param {FeePaymentUpsertArgs} args - Arguments to update or create a FeePayment.
     * @example
     * // Update or create a FeePayment
     * const feePayment = await prisma.feePayment.upsert({
     *   create: {
     *     // ... data to create a FeePayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeePayment we want to update
     *   }
     * })
     */
    upsert<T extends FeePaymentUpsertArgs>(args: SelectSubset<T, FeePaymentUpsertArgs<ExtArgs>>): Prisma__FeePaymentClient<$Result.GetResult<Prisma.$FeePaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentCountArgs} args - Arguments to filter FeePayments to count.
     * @example
     * // Count the number of FeePayments
     * const count = await prisma.feePayment.count({
     *   where: {
     *     // ... the filter for the FeePayments we want to count
     *   }
     * })
    **/
    count<T extends FeePaymentCountArgs>(
      args?: Subset<T, FeePaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeePaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeePaymentAggregateArgs>(args: Subset<T, FeePaymentAggregateArgs>): Prisma.PrismaPromise<GetFeePaymentAggregateType<T>>

    /**
     * Group by FeePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeePaymentGroupByArgs} args - Group by arguments.
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
      T extends FeePaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeePaymentGroupByArgs['orderBy'] }
        : { orderBy?: FeePaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeePayment model
   */
  readonly fields: FeePaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeePayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeePaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FeePayment model
   */
  interface FeePaymentFieldRefs {
    readonly id: FieldRef<"FeePayment", 'Int'>
    readonly studentId: FieldRef<"FeePayment", 'Int'>
    readonly amount: FieldRef<"FeePayment", 'Float'>
    readonly date: FieldRef<"FeePayment", 'DateTime'>
    readonly receiptNumber: FieldRef<"FeePayment", 'String'>
    readonly idempotencyKey: FieldRef<"FeePayment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeePayment findUnique
   */
  export type FeePaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment findUniqueOrThrow
   */
  export type FeePaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment findFirst
   */
  export type FeePaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeePayments.
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeePayments.
     */
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * FeePayment findFirstOrThrow
   */
  export type FeePaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayment to fetch.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeePayments.
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeePayments.
     */
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * FeePayment findMany
   */
  export type FeePaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeePayments to fetch.
     */
    where?: FeePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeePayments to fetch.
     */
    orderBy?: FeePaymentOrderByWithRelationInput | FeePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeePayments.
     */
    cursor?: FeePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeePayments.
     */
    distinct?: FeePaymentScalarFieldEnum | FeePaymentScalarFieldEnum[]
  }

  /**
   * FeePayment create
   */
  export type FeePaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a FeePayment.
     */
    data: XOR<FeePaymentCreateInput, FeePaymentUncheckedCreateInput>
  }

  /**
   * FeePayment createMany
   */
  export type FeePaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeePayments.
     */
    data: FeePaymentCreateManyInput | FeePaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeePayment createManyAndReturn
   */
  export type FeePaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * The data used to create many FeePayments.
     */
    data: FeePaymentCreateManyInput | FeePaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeePayment update
   */
  export type FeePaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a FeePayment.
     */
    data: XOR<FeePaymentUpdateInput, FeePaymentUncheckedUpdateInput>
    /**
     * Choose, which FeePayment to update.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment updateMany
   */
  export type FeePaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeePayments.
     */
    data: XOR<FeePaymentUpdateManyMutationInput, FeePaymentUncheckedUpdateManyInput>
    /**
     * Filter which FeePayments to update
     */
    where?: FeePaymentWhereInput
    /**
     * Limit how many FeePayments to update.
     */
    limit?: number
  }

  /**
   * FeePayment updateManyAndReturn
   */
  export type FeePaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * The data used to update FeePayments.
     */
    data: XOR<FeePaymentUpdateManyMutationInput, FeePaymentUncheckedUpdateManyInput>
    /**
     * Filter which FeePayments to update
     */
    where?: FeePaymentWhereInput
    /**
     * Limit how many FeePayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeePayment upsert
   */
  export type FeePaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the FeePayment to update in case it exists.
     */
    where: FeePaymentWhereUniqueInput
    /**
     * In case the FeePayment found by the `where` argument doesn't exist, create a new FeePayment with this data.
     */
    create: XOR<FeePaymentCreateInput, FeePaymentUncheckedCreateInput>
    /**
     * In case the FeePayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeePaymentUpdateInput, FeePaymentUncheckedUpdateInput>
  }

  /**
   * FeePayment delete
   */
  export type FeePaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
    /**
     * Filter which FeePayment to delete.
     */
    where: FeePaymentWhereUniqueInput
  }

  /**
   * FeePayment deleteMany
   */
  export type FeePaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeePayments to delete
     */
    where?: FeePaymentWhereInput
    /**
     * Limit how many FeePayments to delete.
     */
    limit?: number
  }

  /**
   * FeePayment without action
   */
  export type FeePaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeePayment
     */
    select?: FeePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeePayment
     */
    omit?: FeePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeePaymentInclude<ExtArgs> | null
  }


  /**
   * Model FeeAssessment
   */

  export type AggregateFeeAssessment = {
    _count: FeeAssessmentCountAggregateOutputType | null
    _avg: FeeAssessmentAvgAggregateOutputType | null
    _sum: FeeAssessmentSumAggregateOutputType | null
    _min: FeeAssessmentMinAggregateOutputType | null
    _max: FeeAssessmentMaxAggregateOutputType | null
  }

  export type FeeAssessmentAvgAggregateOutputType = {
    id: number | null
    amountDue: number | null
  }

  export type FeeAssessmentSumAggregateOutputType = {
    id: number | null
    amountDue: number | null
  }

  export type FeeAssessmentMinAggregateOutputType = {
    id: number | null
    class: string | null
    term: string | null
    amountDue: number | null
  }

  export type FeeAssessmentMaxAggregateOutputType = {
    id: number | null
    class: string | null
    term: string | null
    amountDue: number | null
  }

  export type FeeAssessmentCountAggregateOutputType = {
    id: number
    class: number
    term: number
    amountDue: number
    _all: number
  }


  export type FeeAssessmentAvgAggregateInputType = {
    id?: true
    amountDue?: true
  }

  export type FeeAssessmentSumAggregateInputType = {
    id?: true
    amountDue?: true
  }

  export type FeeAssessmentMinAggregateInputType = {
    id?: true
    class?: true
    term?: true
    amountDue?: true
  }

  export type FeeAssessmentMaxAggregateInputType = {
    id?: true
    class?: true
    term?: true
    amountDue?: true
  }

  export type FeeAssessmentCountAggregateInputType = {
    id?: true
    class?: true
    term?: true
    amountDue?: true
    _all?: true
  }

  export type FeeAssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeAssessment to aggregate.
     */
    where?: FeeAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeAssessments to fetch.
     */
    orderBy?: FeeAssessmentOrderByWithRelationInput | FeeAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeeAssessments
    **/
    _count?: true | FeeAssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeAssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeAssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeAssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeAssessmentMaxAggregateInputType
  }

  export type GetFeeAssessmentAggregateType<T extends FeeAssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeAssessment[P]>
      : GetScalarType<T[P], AggregateFeeAssessment[P]>
  }




  export type FeeAssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeAssessmentWhereInput
    orderBy?: FeeAssessmentOrderByWithAggregationInput | FeeAssessmentOrderByWithAggregationInput[]
    by: FeeAssessmentScalarFieldEnum[] | FeeAssessmentScalarFieldEnum
    having?: FeeAssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeAssessmentCountAggregateInputType | true
    _avg?: FeeAssessmentAvgAggregateInputType
    _sum?: FeeAssessmentSumAggregateInputType
    _min?: FeeAssessmentMinAggregateInputType
    _max?: FeeAssessmentMaxAggregateInputType
  }

  export type FeeAssessmentGroupByOutputType = {
    id: number
    class: string
    term: string
    amountDue: number
    _count: FeeAssessmentCountAggregateOutputType | null
    _avg: FeeAssessmentAvgAggregateOutputType | null
    _sum: FeeAssessmentSumAggregateOutputType | null
    _min: FeeAssessmentMinAggregateOutputType | null
    _max: FeeAssessmentMaxAggregateOutputType | null
  }

  type GetFeeAssessmentGroupByPayload<T extends FeeAssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeAssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeAssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeAssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], FeeAssessmentGroupByOutputType[P]>
        }
      >
    >


  export type FeeAssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    term?: boolean
    amountDue?: boolean
  }, ExtArgs["result"]["feeAssessment"]>

  export type FeeAssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    term?: boolean
    amountDue?: boolean
  }, ExtArgs["result"]["feeAssessment"]>

  export type FeeAssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    term?: boolean
    amountDue?: boolean
  }, ExtArgs["result"]["feeAssessment"]>

  export type FeeAssessmentSelectScalar = {
    id?: boolean
    class?: boolean
    term?: boolean
    amountDue?: boolean
  }

  export type FeeAssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class" | "term" | "amountDue", ExtArgs["result"]["feeAssessment"]>

  export type $FeeAssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeeAssessment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      class: string
      term: string
      amountDue: number
    }, ExtArgs["result"]["feeAssessment"]>
    composites: {}
  }

  type FeeAssessmentGetPayload<S extends boolean | null | undefined | FeeAssessmentDefaultArgs> = $Result.GetResult<Prisma.$FeeAssessmentPayload, S>

  type FeeAssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeAssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeAssessmentCountAggregateInputType | true
    }

  export interface FeeAssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeeAssessment'], meta: { name: 'FeeAssessment' } }
    /**
     * Find zero or one FeeAssessment that matches the filter.
     * @param {FeeAssessmentFindUniqueArgs} args - Arguments to find a FeeAssessment
     * @example
     * // Get one FeeAssessment
     * const feeAssessment = await prisma.feeAssessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeAssessmentFindUniqueArgs>(args: SelectSubset<T, FeeAssessmentFindUniqueArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeeAssessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeAssessmentFindUniqueOrThrowArgs} args - Arguments to find a FeeAssessment
     * @example
     * // Get one FeeAssessment
     * const feeAssessment = await prisma.feeAssessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeAssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeAssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeAssessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAssessmentFindFirstArgs} args - Arguments to find a FeeAssessment
     * @example
     * // Get one FeeAssessment
     * const feeAssessment = await prisma.feeAssessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeAssessmentFindFirstArgs>(args?: SelectSubset<T, FeeAssessmentFindFirstArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeAssessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAssessmentFindFirstOrThrowArgs} args - Arguments to find a FeeAssessment
     * @example
     * // Get one FeeAssessment
     * const feeAssessment = await prisma.feeAssessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeAssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeAssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeeAssessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeeAssessments
     * const feeAssessments = await prisma.feeAssessment.findMany()
     * 
     * // Get first 10 FeeAssessments
     * const feeAssessments = await prisma.feeAssessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeAssessmentWithIdOnly = await prisma.feeAssessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeAssessmentFindManyArgs>(args?: SelectSubset<T, FeeAssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeeAssessment.
     * @param {FeeAssessmentCreateArgs} args - Arguments to create a FeeAssessment.
     * @example
     * // Create one FeeAssessment
     * const FeeAssessment = await prisma.feeAssessment.create({
     *   data: {
     *     // ... data to create a FeeAssessment
     *   }
     * })
     * 
     */
    create<T extends FeeAssessmentCreateArgs>(args: SelectSubset<T, FeeAssessmentCreateArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeeAssessments.
     * @param {FeeAssessmentCreateManyArgs} args - Arguments to create many FeeAssessments.
     * @example
     * // Create many FeeAssessments
     * const feeAssessment = await prisma.feeAssessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeAssessmentCreateManyArgs>(args?: SelectSubset<T, FeeAssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeeAssessments and returns the data saved in the database.
     * @param {FeeAssessmentCreateManyAndReturnArgs} args - Arguments to create many FeeAssessments.
     * @example
     * // Create many FeeAssessments
     * const feeAssessment = await prisma.feeAssessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeeAssessments and only return the `id`
     * const feeAssessmentWithIdOnly = await prisma.feeAssessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeeAssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, FeeAssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeeAssessment.
     * @param {FeeAssessmentDeleteArgs} args - Arguments to delete one FeeAssessment.
     * @example
     * // Delete one FeeAssessment
     * const FeeAssessment = await prisma.feeAssessment.delete({
     *   where: {
     *     // ... filter to delete one FeeAssessment
     *   }
     * })
     * 
     */
    delete<T extends FeeAssessmentDeleteArgs>(args: SelectSubset<T, FeeAssessmentDeleteArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeeAssessment.
     * @param {FeeAssessmentUpdateArgs} args - Arguments to update one FeeAssessment.
     * @example
     * // Update one FeeAssessment
     * const feeAssessment = await prisma.feeAssessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeAssessmentUpdateArgs>(args: SelectSubset<T, FeeAssessmentUpdateArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeeAssessments.
     * @param {FeeAssessmentDeleteManyArgs} args - Arguments to filter FeeAssessments to delete.
     * @example
     * // Delete a few FeeAssessments
     * const { count } = await prisma.feeAssessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeAssessmentDeleteManyArgs>(args?: SelectSubset<T, FeeAssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeeAssessments
     * const feeAssessment = await prisma.feeAssessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeAssessmentUpdateManyArgs>(args: SelectSubset<T, FeeAssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeAssessments and returns the data updated in the database.
     * @param {FeeAssessmentUpdateManyAndReturnArgs} args - Arguments to update many FeeAssessments.
     * @example
     * // Update many FeeAssessments
     * const feeAssessment = await prisma.feeAssessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeeAssessments and only return the `id`
     * const feeAssessmentWithIdOnly = await prisma.feeAssessment.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeeAssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, FeeAssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeeAssessment.
     * @param {FeeAssessmentUpsertArgs} args - Arguments to update or create a FeeAssessment.
     * @example
     * // Update or create a FeeAssessment
     * const feeAssessment = await prisma.feeAssessment.upsert({
     *   create: {
     *     // ... data to create a FeeAssessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeeAssessment we want to update
     *   }
     * })
     */
    upsert<T extends FeeAssessmentUpsertArgs>(args: SelectSubset<T, FeeAssessmentUpsertArgs<ExtArgs>>): Prisma__FeeAssessmentClient<$Result.GetResult<Prisma.$FeeAssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeeAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAssessmentCountArgs} args - Arguments to filter FeeAssessments to count.
     * @example
     * // Count the number of FeeAssessments
     * const count = await prisma.feeAssessment.count({
     *   where: {
     *     // ... the filter for the FeeAssessments we want to count
     *   }
     * })
    **/
    count<T extends FeeAssessmentCountArgs>(
      args?: Subset<T, FeeAssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeAssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeeAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeeAssessmentAggregateArgs>(args: Subset<T, FeeAssessmentAggregateArgs>): Prisma.PrismaPromise<GetFeeAssessmentAggregateType<T>>

    /**
     * Group by FeeAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAssessmentGroupByArgs} args - Group by arguments.
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
      T extends FeeAssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeAssessmentGroupByArgs['orderBy'] }
        : { orderBy?: FeeAssessmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeeAssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeeAssessment model
   */
  readonly fields: FeeAssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeeAssessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeAssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FeeAssessment model
   */
  interface FeeAssessmentFieldRefs {
    readonly id: FieldRef<"FeeAssessment", 'Int'>
    readonly class: FieldRef<"FeeAssessment", 'String'>
    readonly term: FieldRef<"FeeAssessment", 'String'>
    readonly amountDue: FieldRef<"FeeAssessment", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * FeeAssessment findUnique
   */
  export type FeeAssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * Filter, which FeeAssessment to fetch.
     */
    where: FeeAssessmentWhereUniqueInput
  }

  /**
   * FeeAssessment findUniqueOrThrow
   */
  export type FeeAssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * Filter, which FeeAssessment to fetch.
     */
    where: FeeAssessmentWhereUniqueInput
  }

  /**
   * FeeAssessment findFirst
   */
  export type FeeAssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * Filter, which FeeAssessment to fetch.
     */
    where?: FeeAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeAssessments to fetch.
     */
    orderBy?: FeeAssessmentOrderByWithRelationInput | FeeAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeAssessments.
     */
    cursor?: FeeAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeAssessments.
     */
    distinct?: FeeAssessmentScalarFieldEnum | FeeAssessmentScalarFieldEnum[]
  }

  /**
   * FeeAssessment findFirstOrThrow
   */
  export type FeeAssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * Filter, which FeeAssessment to fetch.
     */
    where?: FeeAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeAssessments to fetch.
     */
    orderBy?: FeeAssessmentOrderByWithRelationInput | FeeAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeAssessments.
     */
    cursor?: FeeAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeAssessments.
     */
    distinct?: FeeAssessmentScalarFieldEnum | FeeAssessmentScalarFieldEnum[]
  }

  /**
   * FeeAssessment findMany
   */
  export type FeeAssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * Filter, which FeeAssessments to fetch.
     */
    where?: FeeAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeAssessments to fetch.
     */
    orderBy?: FeeAssessmentOrderByWithRelationInput | FeeAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeeAssessments.
     */
    cursor?: FeeAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeAssessments.
     */
    distinct?: FeeAssessmentScalarFieldEnum | FeeAssessmentScalarFieldEnum[]
  }

  /**
   * FeeAssessment create
   */
  export type FeeAssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * The data needed to create a FeeAssessment.
     */
    data: XOR<FeeAssessmentCreateInput, FeeAssessmentUncheckedCreateInput>
  }

  /**
   * FeeAssessment createMany
   */
  export type FeeAssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeeAssessments.
     */
    data: FeeAssessmentCreateManyInput | FeeAssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeeAssessment createManyAndReturn
   */
  export type FeeAssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many FeeAssessments.
     */
    data: FeeAssessmentCreateManyInput | FeeAssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeeAssessment update
   */
  export type FeeAssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * The data needed to update a FeeAssessment.
     */
    data: XOR<FeeAssessmentUpdateInput, FeeAssessmentUncheckedUpdateInput>
    /**
     * Choose, which FeeAssessment to update.
     */
    where: FeeAssessmentWhereUniqueInput
  }

  /**
   * FeeAssessment updateMany
   */
  export type FeeAssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeeAssessments.
     */
    data: XOR<FeeAssessmentUpdateManyMutationInput, FeeAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which FeeAssessments to update
     */
    where?: FeeAssessmentWhereInput
    /**
     * Limit how many FeeAssessments to update.
     */
    limit?: number
  }

  /**
   * FeeAssessment updateManyAndReturn
   */
  export type FeeAssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * The data used to update FeeAssessments.
     */
    data: XOR<FeeAssessmentUpdateManyMutationInput, FeeAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which FeeAssessments to update
     */
    where?: FeeAssessmentWhereInput
    /**
     * Limit how many FeeAssessments to update.
     */
    limit?: number
  }

  /**
   * FeeAssessment upsert
   */
  export type FeeAssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * The filter to search for the FeeAssessment to update in case it exists.
     */
    where: FeeAssessmentWhereUniqueInput
    /**
     * In case the FeeAssessment found by the `where` argument doesn't exist, create a new FeeAssessment with this data.
     */
    create: XOR<FeeAssessmentCreateInput, FeeAssessmentUncheckedCreateInput>
    /**
     * In case the FeeAssessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeAssessmentUpdateInput, FeeAssessmentUncheckedUpdateInput>
  }

  /**
   * FeeAssessment delete
   */
  export type FeeAssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
    /**
     * Filter which FeeAssessment to delete.
     */
    where: FeeAssessmentWhereUniqueInput
  }

  /**
   * FeeAssessment deleteMany
   */
  export type FeeAssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeAssessments to delete
     */
    where?: FeeAssessmentWhereInput
    /**
     * Limit how many FeeAssessments to delete.
     */
    limit?: number
  }

  /**
   * FeeAssessment without action
   */
  export type FeeAssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeAssessment
     */
    select?: FeeAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeAssessment
     */
    omit?: FeeAssessmentOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    class: 'class',
    stream: 'stream',
    guardianId: 'guardianId',
    isArchived: 'isArchived'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const MarkScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subject: 'subject',
    term: 'term',
    academicYear: 'academicYear',
    score: 'score',
    grade: 'grade'
  };

  export type MarkScalarFieldEnum = (typeof MarkScalarFieldEnum)[keyof typeof MarkScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    date: 'date',
    status: 'status'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const FeePaymentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    amount: 'amount',
    date: 'date',
    receiptNumber: 'receiptNumber',
    idempotencyKey: 'idempotencyKey'
  };

  export type FeePaymentScalarFieldEnum = (typeof FeePaymentScalarFieldEnum)[keyof typeof FeePaymentScalarFieldEnum]


  export const FeeAssessmentScalarFieldEnum: {
    id: 'id',
    class: 'class',
    term: 'term',
    amountDue: 'amountDue'
  };

  export type FeeAssessmentScalarFieldEnum = (typeof FeeAssessmentScalarFieldEnum)[keyof typeof FeeAssessmentScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    students?: StudentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    students?: StudentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    class?: StringFilter<"Student"> | string
    stream?: StringFilter<"Student"> | string
    guardianId?: IntFilter<"Student"> | number
    isArchived?: BoolFilter<"Student"> | boolean
    guardian?: XOR<UserScalarRelationFilter, UserWhereInput>
    marks?: MarkListRelationFilter
    attendance?: AttendanceListRelationFilter
    fees?: FeePaymentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    class?: SortOrder
    stream?: SortOrder
    guardianId?: SortOrder
    isArchived?: SortOrder
    guardian?: UserOrderByWithRelationInput
    marks?: MarkOrderByRelationAggregateInput
    attendance?: AttendanceOrderByRelationAggregateInput
    fees?: FeePaymentOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    class?: StringFilter<"Student"> | string
    stream?: StringFilter<"Student"> | string
    guardianId?: IntFilter<"Student"> | number
    isArchived?: BoolFilter<"Student"> | boolean
    guardian?: XOR<UserScalarRelationFilter, UserWhereInput>
    marks?: MarkListRelationFilter
    attendance?: AttendanceListRelationFilter
    fees?: FeePaymentListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    class?: SortOrder
    stream?: SortOrder
    guardianId?: SortOrder
    isArchived?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringWithAggregatesFilter<"Student"> | string
    class?: StringWithAggregatesFilter<"Student"> | string
    stream?: StringWithAggregatesFilter<"Student"> | string
    guardianId?: IntWithAggregatesFilter<"Student"> | number
    isArchived?: BoolWithAggregatesFilter<"Student"> | boolean
  }

  export type MarkWhereInput = {
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    id?: IntFilter<"Mark"> | number
    studentId?: IntFilter<"Mark"> | number
    subject?: StringFilter<"Mark"> | string
    term?: StringFilter<"Mark"> | string
    academicYear?: IntFilter<"Mark"> | number
    score?: IntFilter<"Mark"> | number
    grade?: StringFilter<"Mark"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type MarkOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    academicYear?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type MarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    studentId?: IntFilter<"Mark"> | number
    subject?: StringFilter<"Mark"> | string
    term?: StringFilter<"Mark"> | string
    academicYear?: IntFilter<"Mark"> | number
    score?: IntFilter<"Mark"> | number
    grade?: StringFilter<"Mark"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type MarkOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    academicYear?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    _count?: MarkCountOrderByAggregateInput
    _avg?: MarkAvgOrderByAggregateInput
    _max?: MarkMaxOrderByAggregateInput
    _min?: MarkMinOrderByAggregateInput
    _sum?: MarkSumOrderByAggregateInput
  }

  export type MarkScalarWhereWithAggregatesInput = {
    AND?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    OR?: MarkScalarWhereWithAggregatesInput[]
    NOT?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mark"> | number
    studentId?: IntWithAggregatesFilter<"Mark"> | number
    subject?: StringWithAggregatesFilter<"Mark"> | string
    term?: StringWithAggregatesFilter<"Mark"> | string
    academicYear?: IntWithAggregatesFilter<"Mark"> | number
    score?: IntWithAggregatesFilter<"Mark"> | number
    grade?: StringWithAggregatesFilter<"Mark"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    studentId?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    studentId?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    studentId?: IntWithAggregatesFilter<"Attendance"> | number
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringWithAggregatesFilter<"Attendance"> | string
  }

  export type FeePaymentWhereInput = {
    AND?: FeePaymentWhereInput | FeePaymentWhereInput[]
    OR?: FeePaymentWhereInput[]
    NOT?: FeePaymentWhereInput | FeePaymentWhereInput[]
    id?: IntFilter<"FeePayment"> | number
    studentId?: IntFilter<"FeePayment"> | number
    amount?: FloatFilter<"FeePayment"> | number
    date?: DateTimeFilter<"FeePayment"> | Date | string
    receiptNumber?: StringFilter<"FeePayment"> | string
    idempotencyKey?: StringNullableFilter<"FeePayment"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type FeePaymentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    receiptNumber?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type FeePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    receiptNumber?: string
    idempotencyKey?: string
    AND?: FeePaymentWhereInput | FeePaymentWhereInput[]
    OR?: FeePaymentWhereInput[]
    NOT?: FeePaymentWhereInput | FeePaymentWhereInput[]
    studentId?: IntFilter<"FeePayment"> | number
    amount?: FloatFilter<"FeePayment"> | number
    date?: DateTimeFilter<"FeePayment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "receiptNumber" | "idempotencyKey">

  export type FeePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    receiptNumber?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    _count?: FeePaymentCountOrderByAggregateInput
    _avg?: FeePaymentAvgOrderByAggregateInput
    _max?: FeePaymentMaxOrderByAggregateInput
    _min?: FeePaymentMinOrderByAggregateInput
    _sum?: FeePaymentSumOrderByAggregateInput
  }

  export type FeePaymentScalarWhereWithAggregatesInput = {
    AND?: FeePaymentScalarWhereWithAggregatesInput | FeePaymentScalarWhereWithAggregatesInput[]
    OR?: FeePaymentScalarWhereWithAggregatesInput[]
    NOT?: FeePaymentScalarWhereWithAggregatesInput | FeePaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeePayment"> | number
    studentId?: IntWithAggregatesFilter<"FeePayment"> | number
    amount?: FloatWithAggregatesFilter<"FeePayment"> | number
    date?: DateTimeWithAggregatesFilter<"FeePayment"> | Date | string
    receiptNumber?: StringWithAggregatesFilter<"FeePayment"> | string
    idempotencyKey?: StringNullableWithAggregatesFilter<"FeePayment"> | string | null
  }

  export type FeeAssessmentWhereInput = {
    AND?: FeeAssessmentWhereInput | FeeAssessmentWhereInput[]
    OR?: FeeAssessmentWhereInput[]
    NOT?: FeeAssessmentWhereInput | FeeAssessmentWhereInput[]
    id?: IntFilter<"FeeAssessment"> | number
    class?: StringFilter<"FeeAssessment"> | string
    term?: StringFilter<"FeeAssessment"> | string
    amountDue?: FloatFilter<"FeeAssessment"> | number
  }

  export type FeeAssessmentOrderByWithRelationInput = {
    id?: SortOrder
    class?: SortOrder
    term?: SortOrder
    amountDue?: SortOrder
  }

  export type FeeAssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeeAssessmentWhereInput | FeeAssessmentWhereInput[]
    OR?: FeeAssessmentWhereInput[]
    NOT?: FeeAssessmentWhereInput | FeeAssessmentWhereInput[]
    class?: StringFilter<"FeeAssessment"> | string
    term?: StringFilter<"FeeAssessment"> | string
    amountDue?: FloatFilter<"FeeAssessment"> | number
  }, "id">

  export type FeeAssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    class?: SortOrder
    term?: SortOrder
    amountDue?: SortOrder
    _count?: FeeAssessmentCountOrderByAggregateInput
    _avg?: FeeAssessmentAvgOrderByAggregateInput
    _max?: FeeAssessmentMaxOrderByAggregateInput
    _min?: FeeAssessmentMinOrderByAggregateInput
    _sum?: FeeAssessmentSumOrderByAggregateInput
  }

  export type FeeAssessmentScalarWhereWithAggregatesInput = {
    AND?: FeeAssessmentScalarWhereWithAggregatesInput | FeeAssessmentScalarWhereWithAggregatesInput[]
    OR?: FeeAssessmentScalarWhereWithAggregatesInput[]
    NOT?: FeeAssessmentScalarWhereWithAggregatesInput | FeeAssessmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeeAssessment"> | number
    class?: StringWithAggregatesFilter<"FeeAssessment"> | string
    term?: StringWithAggregatesFilter<"FeeAssessment"> | string
    amountDue?: FloatWithAggregatesFilter<"FeeAssessment"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: string
    students?: StudentCreateNestedManyWithoutGuardianInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: string
    students?: StudentUncheckedCreateNestedManyWithoutGuardianInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutGuardianNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutGuardianNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    firstName: string
    lastName: string
    class: string
    stream: string
    isArchived?: boolean
    guardian: UserCreateNestedOneWithoutStudentsInput
    marks?: MarkCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    fees?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    class: string
    stream: string
    guardianId: number
    isArchived?: boolean
    marks?: MarkUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    guardian?: UserUpdateOneRequiredWithoutStudentsNestedInput
    marks?: MarkUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    guardianId?: IntFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    marks?: MarkUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    class: string
    stream: string
    guardianId: number
    isArchived?: boolean
  }

  export type StudentUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    guardianId?: IntFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MarkCreateInput = {
    subject: string
    term: string
    academicYear: number
    score: number
    grade: string
    student: StudentCreateNestedOneWithoutMarksInput
  }

  export type MarkUncheckedCreateInput = {
    id?: number
    studentId: number
    subject: string
    term: string
    academicYear: number
    score: number
    grade: string
  }

  export type MarkUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    academicYear?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    academicYear?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type MarkCreateManyInput = {
    id?: number
    studentId: number
    subject: string
    term: string
    academicYear: number
    score: number
    grade: string
  }

  export type MarkUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    academicYear?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type MarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    academicYear?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    date: Date | string
    status: string
    student: StudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    studentId: number
    date: Date | string
    status: string
  }

  export type AttendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyInput = {
    id?: number
    studentId: number
    date: Date | string
    status: string
  }

  export type AttendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeePaymentCreateInput = {
    amount: number
    date: Date | string
    receiptNumber: string
    idempotencyKey?: string | null
    student: StudentCreateNestedOneWithoutFeesInput
  }

  export type FeePaymentUncheckedCreateInput = {
    id?: number
    studentId: number
    amount: number
    date: Date | string
    receiptNumber: string
    idempotencyKey?: string | null
  }

  export type FeePaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutFeesNestedInput
  }

  export type FeePaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeePaymentCreateManyInput = {
    id?: number
    studentId: number
    amount: number
    date: Date | string
    receiptNumber: string
    idempotencyKey?: string | null
  }

  export type FeePaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeePaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeeAssessmentCreateInput = {
    class: string
    term: string
    amountDue: number
  }

  export type FeeAssessmentUncheckedCreateInput = {
    id?: number
    class: string
    term: string
    amountDue: number
  }

  export type FeeAssessmentUpdateInput = {
    class?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    amountDue?: FloatFieldUpdateOperationsInput | number
  }

  export type FeeAssessmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    amountDue?: FloatFieldUpdateOperationsInput | number
  }

  export type FeeAssessmentCreateManyInput = {
    id?: number
    class: string
    term: string
    amountDue: number
  }

  export type FeeAssessmentUpdateManyMutationInput = {
    class?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    amountDue?: FloatFieldUpdateOperationsInput | number
  }

  export type FeeAssessmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    amountDue?: FloatFieldUpdateOperationsInput | number
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

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MarkListRelationFilter = {
    every?: MarkWhereInput
    some?: MarkWhereInput
    none?: MarkWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type FeePaymentListRelationFilter = {
    every?: FeePaymentWhereInput
    some?: FeePaymentWhereInput
    none?: FeePaymentWhereInput
  }

  export type MarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeePaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    class?: SortOrder
    stream?: SortOrder
    guardianId?: SortOrder
    isArchived?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    guardianId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    class?: SortOrder
    stream?: SortOrder
    guardianId?: SortOrder
    isArchived?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    class?: SortOrder
    stream?: SortOrder
    guardianId?: SortOrder
    isArchived?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    guardianId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type MarkCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    academicYear?: SortOrder
    score?: SortOrder
    grade?: SortOrder
  }

  export type MarkAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    academicYear?: SortOrder
    score?: SortOrder
  }

  export type MarkMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    academicYear?: SortOrder
    score?: SortOrder
    grade?: SortOrder
  }

  export type MarkMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    academicYear?: SortOrder
    score?: SortOrder
    grade?: SortOrder
  }

  export type MarkSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    academicYear?: SortOrder
    score?: SortOrder
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

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    receiptNumber?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type FeePaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
  }

  export type FeePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    receiptNumber?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type FeePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    receiptNumber?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type FeePaymentSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type FeeAssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    term?: SortOrder
    amountDue?: SortOrder
  }

  export type FeeAssessmentAvgOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
  }

  export type FeeAssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    term?: SortOrder
    amountDue?: SortOrder
  }

  export type FeeAssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    term?: SortOrder
    amountDue?: SortOrder
  }

  export type FeeAssessmentSumOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
  }

  export type StudentCreateNestedManyWithoutGuardianInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutGuardianInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type StudentUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGuardianInput | StudentUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGuardianInput | StudentUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGuardianInput | StudentUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGuardianInput | StudentUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGuardianInput | StudentUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGuardianInput | StudentUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type MarkCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FeePaymentCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
  }

  export type MarkUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FeePaymentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    upsert?: UserUpsertWithoutStudentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentsInput, UserUpdateWithoutStudentsInput>, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type MarkUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutStudentInput | MarkUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutStudentInput | MarkUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutStudentInput | MarkUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FeePaymentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    upsert?: FeePaymentUpsertWithWhereUniqueWithoutStudentInput | FeePaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    set?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    disconnect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    delete?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    update?: FeePaymentUpdateWithWhereUniqueWithoutStudentInput | FeePaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeePaymentUpdateManyWithWhereWithoutStudentInput | FeePaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
  }

  export type MarkUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutStudentInput | MarkUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutStudentInput | MarkUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutStudentInput | MarkUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FeePaymentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput> | FeePaymentCreateWithoutStudentInput[] | FeePaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeePaymentCreateOrConnectWithoutStudentInput | FeePaymentCreateOrConnectWithoutStudentInput[]
    upsert?: FeePaymentUpsertWithWhereUniqueWithoutStudentInput | FeePaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeePaymentCreateManyStudentInputEnvelope
    set?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    disconnect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    delete?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    connect?: FeePaymentWhereUniqueInput | FeePaymentWhereUniqueInput[]
    update?: FeePaymentUpdateWithWhereUniqueWithoutStudentInput | FeePaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeePaymentUpdateManyWithWhereWithoutStudentInput | FeePaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutMarksInput = {
    create?: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMarksInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMarksInput
    upsert?: StudentUpsertWithoutMarksInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMarksInput, StudentUpdateWithoutMarksInput>, StudentUncheckedUpdateWithoutMarksInput>
  }

  export type StudentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    upsert?: StudentUpsertWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceInput, StudentUpdateWithoutAttendanceInput>, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentCreateNestedOneWithoutFeesInput = {
    create?: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeesInput
    connect?: StudentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentUpdateOneRequiredWithoutFeesNestedInput = {
    create?: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeesInput
    upsert?: StudentUpsertWithoutFeesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutFeesInput, StudentUpdateWithoutFeesInput>, StudentUncheckedUpdateWithoutFeesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type StudentCreateWithoutGuardianInput = {
    firstName: string
    lastName: string
    class: string
    stream: string
    isArchived?: boolean
    marks?: MarkCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    fees?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGuardianInput = {
    id?: number
    firstName: string
    lastName: string
    class: string
    stream: string
    isArchived?: boolean
    marks?: MarkUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGuardianInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput>
  }

  export type StudentCreateManyGuardianInputEnvelope = {
    data: StudentCreateManyGuardianInput | StudentCreateManyGuardianInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutGuardianInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutGuardianInput, StudentUncheckedUpdateWithoutGuardianInput>
    create: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutGuardianInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutGuardianInput, StudentUncheckedUpdateWithoutGuardianInput>
  }

  export type StudentUpdateManyWithWhereWithoutGuardianInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutGuardianInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    class?: StringFilter<"Student"> | string
    stream?: StringFilter<"Student"> | string
    guardianId?: IntFilter<"Student"> | number
    isArchived?: BoolFilter<"Student"> | boolean
  }

  export type UserCreateWithoutStudentsInput = {
    email: string
    password: string
    role: string
  }

  export type UserUncheckedCreateWithoutStudentsInput = {
    id?: number
    email: string
    password: string
    role: string
  }

  export type UserCreateOrConnectWithoutStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type MarkCreateWithoutStudentInput = {
    subject: string
    term: string
    academicYear: number
    score: number
    grade: string
  }

  export type MarkUncheckedCreateWithoutStudentInput = {
    id?: number
    subject: string
    term: string
    academicYear: number
    score: number
    grade: string
  }

  export type MarkCreateOrConnectWithoutStudentInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput>
  }

  export type MarkCreateManyStudentInputEnvelope = {
    data: MarkCreateManyStudentInput | MarkCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutStudentInput = {
    date: Date | string
    status: string
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: number
    date: Date | string
    status: string
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FeePaymentCreateWithoutStudentInput = {
    amount: number
    date: Date | string
    receiptNumber: string
    idempotencyKey?: string | null
  }

  export type FeePaymentUncheckedCreateWithoutStudentInput = {
    id?: number
    amount: number
    date: Date | string
    receiptNumber: string
    idempotencyKey?: string | null
  }

  export type FeePaymentCreateOrConnectWithoutStudentInput = {
    where: FeePaymentWhereUniqueInput
    create: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput>
  }

  export type FeePaymentCreateManyStudentInputEnvelope = {
    data: FeePaymentCreateManyStudentInput | FeePaymentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentsInput = {
    update: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateWithoutStudentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type MarkUpsertWithWhereUniqueWithoutStudentInput = {
    where: MarkWhereUniqueInput
    update: XOR<MarkUpdateWithoutStudentInput, MarkUncheckedUpdateWithoutStudentInput>
    create: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput>
  }

  export type MarkUpdateWithWhereUniqueWithoutStudentInput = {
    where: MarkWhereUniqueInput
    data: XOR<MarkUpdateWithoutStudentInput, MarkUncheckedUpdateWithoutStudentInput>
  }

  export type MarkUpdateManyWithWhereWithoutStudentInput = {
    where: MarkScalarWhereInput
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyWithoutStudentInput>
  }

  export type MarkScalarWhereInput = {
    AND?: MarkScalarWhereInput | MarkScalarWhereInput[]
    OR?: MarkScalarWhereInput[]
    NOT?: MarkScalarWhereInput | MarkScalarWhereInput[]
    id?: IntFilter<"Mark"> | number
    studentId?: IntFilter<"Mark"> | number
    subject?: StringFilter<"Mark"> | string
    term?: StringFilter<"Mark"> | string
    academicYear?: IntFilter<"Mark"> | number
    score?: IntFilter<"Mark"> | number
    grade?: StringFilter<"Mark"> | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    studentId?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
  }

  export type FeePaymentUpsertWithWhereUniqueWithoutStudentInput = {
    where: FeePaymentWhereUniqueInput
    update: XOR<FeePaymentUpdateWithoutStudentInput, FeePaymentUncheckedUpdateWithoutStudentInput>
    create: XOR<FeePaymentCreateWithoutStudentInput, FeePaymentUncheckedCreateWithoutStudentInput>
  }

  export type FeePaymentUpdateWithWhereUniqueWithoutStudentInput = {
    where: FeePaymentWhereUniqueInput
    data: XOR<FeePaymentUpdateWithoutStudentInput, FeePaymentUncheckedUpdateWithoutStudentInput>
  }

  export type FeePaymentUpdateManyWithWhereWithoutStudentInput = {
    where: FeePaymentScalarWhereInput
    data: XOR<FeePaymentUpdateManyMutationInput, FeePaymentUncheckedUpdateManyWithoutStudentInput>
  }

  export type FeePaymentScalarWhereInput = {
    AND?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
    OR?: FeePaymentScalarWhereInput[]
    NOT?: FeePaymentScalarWhereInput | FeePaymentScalarWhereInput[]
    id?: IntFilter<"FeePayment"> | number
    studentId?: IntFilter<"FeePayment"> | number
    amount?: FloatFilter<"FeePayment"> | number
    date?: DateTimeFilter<"FeePayment"> | Date | string
    receiptNumber?: StringFilter<"FeePayment"> | string
    idempotencyKey?: StringNullableFilter<"FeePayment"> | string | null
  }

  export type StudentCreateWithoutMarksInput = {
    firstName: string
    lastName: string
    class: string
    stream: string
    isArchived?: boolean
    guardian: UserCreateNestedOneWithoutStudentsInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    fees?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMarksInput = {
    id?: number
    firstName: string
    lastName: string
    class: string
    stream: string
    guardianId: number
    isArchived?: boolean
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMarksInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
  }

  export type StudentUpsertWithoutMarksInput = {
    update: XOR<StudentUpdateWithoutMarksInput, StudentUncheckedUpdateWithoutMarksInput>
    create: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMarksInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMarksInput, StudentUncheckedUpdateWithoutMarksInput>
  }

  export type StudentUpdateWithoutMarksInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    guardian?: UserUpdateOneRequiredWithoutStudentsNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    guardianId?: IntFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutAttendanceInput = {
    firstName: string
    lastName: string
    class: string
    stream: string
    isArchived?: boolean
    guardian: UserCreateNestedOneWithoutStudentsInput
    marks?: MarkCreateNestedManyWithoutStudentInput
    fees?: FeePaymentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendanceInput = {
    id?: number
    firstName: string
    lastName: string
    class: string
    stream: string
    guardianId: number
    isArchived?: boolean
    marks?: MarkUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeePaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendanceInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
  }

  export type StudentUpsertWithoutAttendanceInput = {
    update: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentUpdateWithoutAttendanceInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    guardian?: UserUpdateOneRequiredWithoutStudentsNestedInput
    marks?: MarkUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    guardianId?: IntFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    marks?: MarkUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutFeesInput = {
    firstName: string
    lastName: string
    class: string
    stream: string
    isArchived?: boolean
    guardian: UserCreateNestedOneWithoutStudentsInput
    marks?: MarkCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutFeesInput = {
    id?: number
    firstName: string
    lastName: string
    class: string
    stream: string
    guardianId: number
    isArchived?: boolean
    marks?: MarkUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutFeesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
  }

  export type StudentUpsertWithoutFeesInput = {
    update: XOR<StudentUpdateWithoutFeesInput, StudentUncheckedUpdateWithoutFeesInput>
    create: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutFeesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutFeesInput, StudentUncheckedUpdateWithoutFeesInput>
  }

  export type StudentUpdateWithoutFeesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    guardian?: UserUpdateOneRequiredWithoutStudentsNestedInput
    marks?: MarkUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutFeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    guardianId?: IntFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    marks?: MarkUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyGuardianInput = {
    id?: number
    firstName: string
    lastName: string
    class: string
    stream: string
    isArchived?: boolean
  }

  export type StudentUpdateWithoutGuardianInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    marks?: MarkUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    marks?: MarkUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeePaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MarkCreateManyStudentInput = {
    id?: number
    subject: string
    term: string
    academicYear: number
    score: number
    grade: string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: number
    date: Date | string
    status: string
  }

  export type FeePaymentCreateManyStudentInput = {
    id?: number
    amount: number
    date: Date | string
    receiptNumber: string
    idempotencyKey?: string | null
  }

  export type MarkUpdateWithoutStudentInput = {
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    academicYear?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type MarkUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    academicYear?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type MarkUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    academicYear?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeePaymentUpdateWithoutStudentInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeePaymentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeePaymentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
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