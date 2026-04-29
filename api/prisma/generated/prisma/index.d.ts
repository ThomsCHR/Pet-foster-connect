
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Association
 * 
 */
export type Association = $Result.DefaultSelection<Prisma.$AssociationPayload>
/**
 * Model Volunteer
 * 
 */
export type Volunteer = $Result.DefaultSelection<Prisma.$VolunteerPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Region: {
  Auvergne_Rhone_Alpes: 'Auvergne_Rhone_Alpes',
  Bourgogne_Franche_Comte: 'Bourgogne_Franche_Comte',
  Bretagne: 'Bretagne',
  Centre_Val_de_Loire: 'Centre_Val_de_Loire',
  Corse: 'Corse',
  Grand_Est: 'Grand_Est',
  Hauts_de_France: 'Hauts_de_France',
  Ile_de_France: 'Ile_de_France',
  Normandie: 'Normandie',
  Nouvelle_Aquitaine: 'Nouvelle_Aquitaine',
  Occitanie: 'Occitanie',
  Pays_de_la_Loire: 'Pays_de_la_Loire',
  Provence_Alpes_Cote_Azur: 'Provence_Alpes_Cote_Azur',
  Guadeloupe: 'Guadeloupe',
  Martinique: 'Martinique',
  Guyane: 'Guyane',
  La_Reunion: 'La_Reunion',
  Mayotte: 'Mayotte'
};

export type Region = (typeof Region)[keyof typeof Region]


export const AnimalStatus: {
  a_placer: 'a_placer',
  placement_en_cours: 'placement_en_cours',
  adopte: 'adopte',
  place: 'place'
};

export type AnimalStatus = (typeof AnimalStatus)[keyof typeof AnimalStatus]


export const OfferStatus: {
  soumise: 'soumise',
  annulee: 'annulee',
  acceptee: 'acceptee',
  refusee: 'refusee'
};

export type OfferStatus = (typeof OfferStatus)[keyof typeof OfferStatus]

}

export type Region = $Enums.Region

export const Region: typeof $Enums.Region

export type AnimalStatus = $Enums.AnimalStatus

export const AnimalStatus: typeof $Enums.AnimalStatus

export type OfferStatus = $Enums.OfferStatus

export const OfferStatus: typeof $Enums.OfferStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.association`: Exposes CRUD operations for the **Association** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associations
    * const associations = await prisma.association.findMany()
    * ```
    */
  get association(): Prisma.AssociationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteer`: Exposes CRUD operations for the **Volunteer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteer.findMany()
    * ```
    */
  get volunteer(): Prisma.VolunteerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Users: 'Users',
    Association: 'Association',
    Volunteer: 'Volunteer',
    Animal: 'Animal',
    Image: 'Image',
    Offer: 'Offer'
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
      modelProps: "users" | "association" | "volunteer" | "animal" | "image" | "offer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Association: {
        payload: Prisma.$AssociationPayload<ExtArgs>
        fields: Prisma.AssociationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssociationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssociationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findFirst: {
            args: Prisma.AssociationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssociationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findMany: {
            args: Prisma.AssociationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          create: {
            args: Prisma.AssociationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          createMany: {
            args: Prisma.AssociationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssociationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          delete: {
            args: Prisma.AssociationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          update: {
            args: Prisma.AssociationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          deleteMany: {
            args: Prisma.AssociationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssociationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssociationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          upsert: {
            args: Prisma.AssociationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          aggregate: {
            args: Prisma.AssociationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation>
          }
          groupBy: {
            args: Prisma.AssociationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssociationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssociationCountArgs<ExtArgs>
            result: $Utils.Optional<AssociationCountAggregateOutputType> | number
          }
        }
      }
      Volunteer: {
        payload: Prisma.$VolunteerPayload<ExtArgs>
        fields: Prisma.VolunteerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findFirst: {
            args: Prisma.VolunteerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findMany: {
            args: Prisma.VolunteerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          create: {
            args: Prisma.VolunteerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          createMany: {
            args: Prisma.VolunteerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          delete: {
            args: Prisma.VolunteerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          update: {
            args: Prisma.VolunteerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteer>
          }
          groupBy: {
            args: Prisma.VolunteerGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: UsersOmit
    association?: AssociationOmit
    volunteer?: VolunteerOmit
    animal?: AnimalOmit
    image?: ImageOmit
    offer?: OfferOmit
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
   * Count Type AssociationCountOutputType
   */

  export type AssociationCountOutputType = {
    animals: number
  }

  export type AssociationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | AssociationCountOutputTypeCountAnimalsArgs
  }

  // Custom InputTypes
  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssociationCountOutputType
     */
    select?: AssociationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }


  /**
   * Count Type VolunteerCountOutputType
   */

  export type VolunteerCountOutputType = {
    offers: number
    animal: number
  }

  export type VolunteerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | VolunteerCountOutputTypeCountOffersArgs
    animal?: boolean | VolunteerCountOutputTypeCountAnimalArgs
  }

  // Custom InputTypes
  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerCountOutputType
     */
    select?: VolunteerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }


  /**
   * Count Type AnimalCountOutputType
   */

  export type AnimalCountOutputType = {
    images: number
    offers: number
  }

  export type AnimalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | AnimalCountOutputTypeCountImagesArgs
    offers?: boolean | AnimalCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimalCountOutputType
     */
    select?: AnimalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    image: string | null
    region: $Enums.Region | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    image: string | null
    region: $Enums.Region | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    phone: number
    address: number
    image: number
    region: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    image?: true
    region?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    image?: true
    region?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    image?: true
    region?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    phone: string
    address: string
    image: string | null
    region: $Enums.Region | null
    description: string | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    region?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    volunteer?: boolean | Users$volunteerArgs<ExtArgs>
    association?: boolean | Users$associationArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    region?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    region?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    region?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "phone" | "address" | "image" | "region" | "description" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | Users$volunteerArgs<ExtArgs>
    association?: boolean | Users$associationArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      volunteer: Prisma.$VolunteerPayload<ExtArgs> | null
      association: Prisma.$AssociationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      phone: string
      address: string
      image: string | null
      region: $Enums.Region | null
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteer<T extends Users$volunteerArgs<ExtArgs> = {}>(args?: Subset<T, Users$volunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    association<T extends Users$associationArgs<ExtArgs> = {}>(args?: Subset<T, Users$associationArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly image: FieldRef<"Users", 'String'>
    readonly region: FieldRef<"Users", 'Region'>
    readonly description: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.volunteer
   */
  export type Users$volunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * Users.association
   */
  export type Users$associationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    where?: AssociationWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Association
   */

  export type AggregateAssociation = {
    _count: AssociationCountAggregateOutputType | null
    _avg: AssociationAvgAggregateOutputType | null
    _sum: AssociationSumAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  export type AssociationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AssociationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AssociationMinAggregateOutputType = {
    id: number | null
    name: string | null
    siret: string | null
    userId: number | null
  }

  export type AssociationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    siret: string | null
    userId: number | null
  }

  export type AssociationCountAggregateOutputType = {
    id: number
    name: number
    siret: number
    userId: number
    _all: number
  }


  export type AssociationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AssociationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AssociationMinAggregateInputType = {
    id?: true
    name?: true
    siret?: true
    userId?: true
  }

  export type AssociationMaxAggregateInputType = {
    id?: true
    name?: true
    siret?: true
    userId?: true
  }

  export type AssociationCountAggregateInputType = {
    id?: true
    name?: true
    siret?: true
    userId?: true
    _all?: true
  }

  export type AssociationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association to aggregate.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Associations
    **/
    _count?: true | AssociationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssociationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssociationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssociationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssociationMaxAggregateInputType
  }

  export type GetAssociationAggregateType<T extends AssociationAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation[P]>
      : GetScalarType<T[P], AggregateAssociation[P]>
  }




  export type AssociationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssociationWhereInput
    orderBy?: AssociationOrderByWithAggregationInput | AssociationOrderByWithAggregationInput[]
    by: AssociationScalarFieldEnum[] | AssociationScalarFieldEnum
    having?: AssociationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssociationCountAggregateInputType | true
    _avg?: AssociationAvgAggregateInputType
    _sum?: AssociationSumAggregateInputType
    _min?: AssociationMinAggregateInputType
    _max?: AssociationMaxAggregateInputType
  }

  export type AssociationGroupByOutputType = {
    id: number
    name: string
    siret: string
    userId: number
    _count: AssociationCountAggregateOutputType | null
    _avg: AssociationAvgAggregateOutputType | null
    _sum: AssociationSumAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  type GetAssociationGroupByPayload<T extends AssociationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssociationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssociationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssociationGroupByOutputType[P]>
            : GetScalarType<T[P], AssociationGroupByOutputType[P]>
        }
      >
    >


  export type AssociationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    siret?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    animals?: boolean | Association$animalsArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    siret?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    siret?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectScalar = {
    id?: boolean
    name?: boolean
    siret?: boolean
    userId?: boolean
  }

  export type AssociationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "siret" | "userId", ExtArgs["result"]["association"]>
  export type AssociationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    animals?: boolean | Association$animalsArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssociationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AssociationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $AssociationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      animals: Prisma.$AnimalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      siret: string
      userId: number
    }, ExtArgs["result"]["association"]>
    composites: {}
  }

  type AssociationGetPayload<S extends boolean | null | undefined | AssociationDefaultArgs> = $Result.GetResult<Prisma.$AssociationPayload, S>

  type AssociationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssociationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssociationCountAggregateInputType | true
    }

  export interface AssociationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association'], meta: { name: 'Association' } }
    /**
     * Find zero or one Association that matches the filter.
     * @param {AssociationFindUniqueArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssociationFindUniqueArgs>(args: SelectSubset<T, AssociationFindUniqueArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssociationFindUniqueOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssociationFindUniqueOrThrowArgs>(args: SelectSubset<T, AssociationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssociationFindFirstArgs>(args?: SelectSubset<T, AssociationFindFirstArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssociationFindFirstOrThrowArgs>(args?: SelectSubset<T, AssociationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Associations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associations
     * const associations = await prisma.association.findMany()
     * 
     * // Get first 10 Associations
     * const associations = await prisma.association.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const associationWithIdOnly = await prisma.association.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssociationFindManyArgs>(args?: SelectSubset<T, AssociationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association.
     * @param {AssociationCreateArgs} args - Arguments to create a Association.
     * @example
     * // Create one Association
     * const Association = await prisma.association.create({
     *   data: {
     *     // ... data to create a Association
     *   }
     * })
     * 
     */
    create<T extends AssociationCreateArgs>(args: SelectSubset<T, AssociationCreateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Associations.
     * @param {AssociationCreateManyArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssociationCreateManyArgs>(args?: SelectSubset<T, AssociationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Associations and returns the data saved in the database.
     * @param {AssociationCreateManyAndReturnArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssociationCreateManyAndReturnArgs>(args?: SelectSubset<T, AssociationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Association.
     * @param {AssociationDeleteArgs} args - Arguments to delete one Association.
     * @example
     * // Delete one Association
     * const Association = await prisma.association.delete({
     *   where: {
     *     // ... filter to delete one Association
     *   }
     * })
     * 
     */
    delete<T extends AssociationDeleteArgs>(args: SelectSubset<T, AssociationDeleteArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association.
     * @param {AssociationUpdateArgs} args - Arguments to update one Association.
     * @example
     * // Update one Association
     * const association = await prisma.association.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssociationUpdateArgs>(args: SelectSubset<T, AssociationUpdateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Associations.
     * @param {AssociationDeleteManyArgs} args - Arguments to filter Associations to delete.
     * @example
     * // Delete a few Associations
     * const { count } = await prisma.association.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssociationDeleteManyArgs>(args?: SelectSubset<T, AssociationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssociationUpdateManyArgs>(args: SelectSubset<T, AssociationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations and returns the data updated in the database.
     * @param {AssociationUpdateManyAndReturnArgs} args - Arguments to update many Associations.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssociationUpdateManyAndReturnArgs>(args: SelectSubset<T, AssociationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Association.
     * @param {AssociationUpsertArgs} args - Arguments to update or create a Association.
     * @example
     * // Update or create a Association
     * const association = await prisma.association.upsert({
     *   create: {
     *     // ... data to create a Association
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association we want to update
     *   }
     * })
     */
    upsert<T extends AssociationUpsertArgs>(args: SelectSubset<T, AssociationUpsertArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationCountArgs} args - Arguments to filter Associations to count.
     * @example
     * // Count the number of Associations
     * const count = await prisma.association.count({
     *   where: {
     *     // ... the filter for the Associations we want to count
     *   }
     * })
    **/
    count<T extends AssociationCountArgs>(
      args?: Subset<T, AssociationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssociationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssociationAggregateArgs>(args: Subset<T, AssociationAggregateArgs>): Prisma.PrismaPromise<GetAssociationAggregateType<T>>

    /**
     * Group by Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationGroupByArgs} args - Group by arguments.
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
      T extends AssociationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssociationGroupByArgs['orderBy'] }
        : { orderBy?: AssociationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssociationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association model
   */
  readonly fields: AssociationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssociationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    animals<T extends Association$animalsArgs<ExtArgs> = {}>(args?: Subset<T, Association$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Association model
   */
  interface AssociationFieldRefs {
    readonly id: FieldRef<"Association", 'Int'>
    readonly name: FieldRef<"Association", 'String'>
    readonly siret: FieldRef<"Association", 'String'>
    readonly userId: FieldRef<"Association", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Association findUnique
   */
  export type AssociationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findUniqueOrThrow
   */
  export type AssociationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findFirst
   */
  export type AssociationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findFirstOrThrow
   */
  export type AssociationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findMany
   */
  export type AssociationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Associations to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association create
   */
  export type AssociationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to create a Association.
     */
    data: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
  }

  /**
   * Association createMany
   */
  export type AssociationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association createManyAndReturn
   */
  export type AssociationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association update
   */
  export type AssociationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to update a Association.
     */
    data: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
    /**
     * Choose, which Association to update.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association updateMany
   */
  export type AssociationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association updateManyAndReturn
   */
  export type AssociationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association upsert
   */
  export type AssociationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The filter to search for the Association to update in case it exists.
     */
    where: AssociationWhereUniqueInput
    /**
     * In case the Association found by the `where` argument doesn't exist, create a new Association with this data.
     */
    create: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
    /**
     * In case the Association was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
  }

  /**
   * Association delete
   */
  export type AssociationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter which Association to delete.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association deleteMany
   */
  export type AssociationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Associations to delete
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to delete.
     */
    limit?: number
  }

  /**
   * Association.animals
   */
  export type Association$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Association without action
   */
  export type AssociationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
  }


  /**
   * Model Volunteer
   */

  export type AggregateVolunteer = {
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  export type VolunteerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VolunteerSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VolunteerMinAggregateOutputType = {
    id: number | null
    lastname: string | null
    firstname: string | null
    capacity: string | null
    userId: number | null
  }

  export type VolunteerMaxAggregateOutputType = {
    id: number | null
    lastname: string | null
    firstname: string | null
    capacity: string | null
    userId: number | null
  }

  export type VolunteerCountAggregateOutputType = {
    id: number
    lastname: number
    firstname: number
    capacity: number
    userId: number
    _all: number
  }


  export type VolunteerAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VolunteerSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VolunteerMinAggregateInputType = {
    id?: true
    lastname?: true
    firstname?: true
    capacity?: true
    userId?: true
  }

  export type VolunteerMaxAggregateInputType = {
    id?: true
    lastname?: true
    firstname?: true
    capacity?: true
    userId?: true
  }

  export type VolunteerCountAggregateInputType = {
    id?: true
    lastname?: true
    firstname?: true
    capacity?: true
    userId?: true
    _all?: true
  }

  export type VolunteerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteer to aggregate.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volunteers
    **/
    _count?: true | VolunteerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerMaxAggregateInputType
  }

  export type GetVolunteerAggregateType<T extends VolunteerAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteer[P]>
      : GetScalarType<T[P], AggregateVolunteer[P]>
  }




  export type VolunteerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithAggregationInput | VolunteerOrderByWithAggregationInput[]
    by: VolunteerScalarFieldEnum[] | VolunteerScalarFieldEnum
    having?: VolunteerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerCountAggregateInputType | true
    _avg?: VolunteerAvgAggregateInputType
    _sum?: VolunteerSumAggregateInputType
    _min?: VolunteerMinAggregateInputType
    _max?: VolunteerMaxAggregateInputType
  }

  export type VolunteerGroupByOutputType = {
    id: number
    lastname: string
    firstname: string
    capacity: string
    userId: number
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  type GetVolunteerGroupByPayload<T extends VolunteerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    capacity?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    offers?: boolean | Volunteer$offersArgs<ExtArgs>
    animal?: boolean | Volunteer$animalArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    capacity?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    capacity?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectScalar = {
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    capacity?: boolean
    userId?: boolean
  }

  export type VolunteerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastname" | "firstname" | "capacity" | "userId", ExtArgs["result"]["volunteer"]>
  export type VolunteerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    offers?: boolean | Volunteer$offersArgs<ExtArgs>
    animal?: boolean | Volunteer$animalArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $VolunteerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volunteer"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      offers: Prisma.$OfferPayload<ExtArgs>[]
      animal: Prisma.$AnimalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lastname: string
      firstname: string
      capacity: string
      userId: number
    }, ExtArgs["result"]["volunteer"]>
    composites: {}
  }

  type VolunteerGetPayload<S extends boolean | null | undefined | VolunteerDefaultArgs> = $Result.GetResult<Prisma.$VolunteerPayload, S>

  type VolunteerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerCountAggregateInputType | true
    }

  export interface VolunteerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volunteer'], meta: { name: 'Volunteer' } }
    /**
     * Find zero or one Volunteer that matches the filter.
     * @param {VolunteerFindUniqueArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerFindUniqueArgs>(args: SelectSubset<T, VolunteerFindUniqueArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volunteer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerFindUniqueOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerFindFirstArgs>(args?: SelectSubset<T, VolunteerFindFirstArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteer.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerFindManyArgs>(args?: SelectSubset<T, VolunteerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volunteer.
     * @param {VolunteerCreateArgs} args - Arguments to create a Volunteer.
     * @example
     * // Create one Volunteer
     * const Volunteer = await prisma.volunteer.create({
     *   data: {
     *     // ... data to create a Volunteer
     *   }
     * })
     * 
     */
    create<T extends VolunteerCreateArgs>(args: SelectSubset<T, VolunteerCreateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volunteers.
     * @param {VolunteerCreateManyArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerCreateManyArgs>(args?: SelectSubset<T, VolunteerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volunteers and returns the data saved in the database.
     * @param {VolunteerCreateManyAndReturnArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volunteer.
     * @param {VolunteerDeleteArgs} args - Arguments to delete one Volunteer.
     * @example
     * // Delete one Volunteer
     * const Volunteer = await prisma.volunteer.delete({
     *   where: {
     *     // ... filter to delete one Volunteer
     *   }
     * })
     * 
     */
    delete<T extends VolunteerDeleteArgs>(args: SelectSubset<T, VolunteerDeleteArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volunteer.
     * @param {VolunteerUpdateArgs} args - Arguments to update one Volunteer.
     * @example
     * // Update one Volunteer
     * const volunteer = await prisma.volunteer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerUpdateArgs>(args: SelectSubset<T, VolunteerUpdateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volunteers.
     * @param {VolunteerDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerDeleteManyArgs>(args?: SelectSubset<T, VolunteerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerUpdateManyArgs>(args: SelectSubset<T, VolunteerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers and returns the data updated in the database.
     * @param {VolunteerUpdateManyAndReturnArgs} args - Arguments to update many Volunteers.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.updateManyAndReturn({
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
    updateManyAndReturn<T extends VolunteerUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volunteer.
     * @param {VolunteerUpsertArgs} args - Arguments to update or create a Volunteer.
     * @example
     * // Update or create a Volunteer
     * const volunteer = await prisma.volunteer.upsert({
     *   create: {
     *     // ... data to create a Volunteer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteer we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerUpsertArgs>(args: SelectSubset<T, VolunteerUpsertArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteer.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends VolunteerCountArgs>(
      args?: Subset<T, VolunteerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolunteerAggregateArgs>(args: Subset<T, VolunteerAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAggregateType<T>>

    /**
     * Group by Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerGroupByArgs} args - Group by arguments.
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
      T extends VolunteerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VolunteerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volunteer model
   */
  readonly fields: VolunteerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volunteer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offers<T extends Volunteer$offersArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    animal<T extends Volunteer$animalArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$animalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Volunteer model
   */
  interface VolunteerFieldRefs {
    readonly id: FieldRef<"Volunteer", 'Int'>
    readonly lastname: FieldRef<"Volunteer", 'String'>
    readonly firstname: FieldRef<"Volunteer", 'String'>
    readonly capacity: FieldRef<"Volunteer", 'String'>
    readonly userId: FieldRef<"Volunteer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Volunteer findUnique
   */
  export type VolunteerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findUniqueOrThrow
   */
  export type VolunteerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findFirst
   */
  export type VolunteerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findFirstOrThrow
   */
  export type VolunteerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findMany
   */
  export type VolunteerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteers to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer create
   */
  export type VolunteerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to create a Volunteer.
     */
    data: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
  }

  /**
   * Volunteer createMany
   */
  export type VolunteerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volunteer createManyAndReturn
   */
  export type VolunteerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer update
   */
  export type VolunteerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to update a Volunteer.
     */
    data: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
    /**
     * Choose, which Volunteer to update.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer updateMany
   */
  export type VolunteerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
  }

  /**
   * Volunteer updateManyAndReturn
   */
  export type VolunteerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer upsert
   */
  export type VolunteerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The filter to search for the Volunteer to update in case it exists.
     */
    where: VolunteerWhereUniqueInput
    /**
     * In case the Volunteer found by the `where` argument doesn't exist, create a new Volunteer with this data.
     */
    create: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
    /**
     * In case the Volunteer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
  }

  /**
   * Volunteer delete
   */
  export type VolunteerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter which Volunteer to delete.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer deleteMany
   */
  export type VolunteerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteers to delete
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to delete.
     */
    limit?: number
  }

  /**
   * Volunteer.offers
   */
  export type Volunteer$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Volunteer.animal
   */
  export type Volunteer$animalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Volunteer without action
   */
  export type VolunteerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    id: number | null
    associationId: number | null
    volunteerId: number | null
  }

  export type AnimalSumAggregateOutputType = {
    id: number | null
    associationId: number | null
    volunteerId: number | null
  }

  export type AnimalMinAggregateOutputType = {
    id: number | null
    name: string | null
    species: string | null
    breed: string | null
    gender: string | null
    dateOfBirth: Date | null
    description: string | null
    status: $Enums.AnimalStatus | null
    associationId: number | null
    volunteerId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    species: string | null
    breed: string | null
    gender: string | null
    dateOfBirth: Date | null
    description: string | null
    status: $Enums.AnimalStatus | null
    associationId: number | null
    volunteerId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    name: number
    species: number
    breed: number
    gender: number
    dateOfBirth: number
    description: number
    status: number
    associationId: number
    volunteerId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    id?: true
    associationId?: true
    volunteerId?: true
  }

  export type AnimalSumAggregateInputType = {
    id?: true
    associationId?: true
    volunteerId?: true
  }

  export type AnimalMinAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    gender?: true
    dateOfBirth?: true
    description?: true
    status?: true
    associationId?: true
    volunteerId?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    gender?: true
    dateOfBirth?: true
    description?: true
    status?: true
    associationId?: true
    volunteerId?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    gender?: true
    dateOfBirth?: true
    description?: true
    status?: true
    associationId?: true
    volunteerId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    id: number
    name: string
    species: string
    breed: string | null
    gender: string
    dateOfBirth: Date | null
    description: string
    status: $Enums.AnimalStatus
    associationId: number
    volunteerId: number | null
    created_at: Date
    updated_at: Date
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    description?: boolean
    status?: boolean
    associationId?: boolean
    volunteerId?: boolean
    created_at?: boolean
    updated_at?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    volunteer?: boolean | Animal$volunteerArgs<ExtArgs>
    images?: boolean | Animal$imagesArgs<ExtArgs>
    offers?: boolean | Animal$offersArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    description?: boolean
    status?: boolean
    associationId?: boolean
    volunteerId?: boolean
    created_at?: boolean
    updated_at?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    volunteer?: boolean | Animal$volunteerArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    description?: boolean
    status?: boolean
    associationId?: boolean
    volunteerId?: boolean
    created_at?: boolean
    updated_at?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    volunteer?: boolean | Animal$volunteerArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    description?: boolean
    status?: boolean
    associationId?: boolean
    volunteerId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species" | "breed" | "gender" | "dateOfBirth" | "description" | "status" | "associationId" | "volunteerId" | "created_at" | "updated_at", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    volunteer?: boolean | Animal$volunteerArgs<ExtArgs>
    images?: boolean | Animal$imagesArgs<ExtArgs>
    offers?: boolean | Animal$offersArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    volunteer?: boolean | Animal$volunteerArgs<ExtArgs>
  }
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    volunteer?: boolean | Animal$volunteerArgs<ExtArgs>
  }

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
      volunteer: Prisma.$VolunteerPayload<ExtArgs> | null
      images: Prisma.$ImagePayload<ExtArgs>[]
      offers: Prisma.$OfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      species: string
      breed: string | null
      gender: string
      dateOfBirth: Date | null
      description: string
      status: $Enums.AnimalStatus
      associationId: number
      volunteerId: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteer<T extends Animal$volunteerArgs<ExtArgs> = {}>(args?: Subset<T, Animal$volunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Animal$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Animal$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offers<T extends Animal$offersArgs<ExtArgs> = {}>(args?: Subset<T, Animal$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly id: FieldRef<"Animal", 'Int'>
    readonly name: FieldRef<"Animal", 'String'>
    readonly species: FieldRef<"Animal", 'String'>
    readonly breed: FieldRef<"Animal", 'String'>
    readonly gender: FieldRef<"Animal", 'String'>
    readonly dateOfBirth: FieldRef<"Animal", 'DateTime'>
    readonly description: FieldRef<"Animal", 'String'>
    readonly status: FieldRef<"Animal", 'AnimalStatus'>
    readonly associationId: FieldRef<"Animal", 'Int'>
    readonly volunteerId: FieldRef<"Animal", 'Int'>
    readonly created_at: FieldRef<"Animal", 'DateTime'>
    readonly updated_at: FieldRef<"Animal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.volunteer
   */
  export type Animal$volunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * Animal.images
   */
  export type Animal$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Animal.offers
   */
  export type Animal$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    animalID: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    animalID: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    thumb: string | null
    animalID: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    thumb: string | null
    animalID: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    thumb: number
    animalID: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    animalID?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    animalID?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    thumb?: true
    animalID?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    thumb?: true
    animalID?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    thumb?: true
    animalID?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    thumb: string
    animalID: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    thumb?: boolean
    animalID?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    thumb?: boolean
    animalID?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    thumb?: boolean
    animalID?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    thumb?: boolean
    animalID?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "thumb" | "animalID", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      thumb: string
      animalID: number
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly thumb: FieldRef<"Image", 'String'>
    readonly animalID: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    animalId: number | null
    volunteerId: number | null
  }

  export type OfferSumAggregateOutputType = {
    animalId: number | null
    volunteerId: number | null
  }

  export type OfferMinAggregateOutputType = {
    status: $Enums.OfferStatus | null
    animalId: number | null
    volunteerId: number | null
  }

  export type OfferMaxAggregateOutputType = {
    status: $Enums.OfferStatus | null
    animalId: number | null
    volunteerId: number | null
  }

  export type OfferCountAggregateOutputType = {
    status: number
    animalId: number
    volunteerId: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    animalId?: true
    volunteerId?: true
  }

  export type OfferSumAggregateInputType = {
    animalId?: true
    volunteerId?: true
  }

  export type OfferMinAggregateInputType = {
    status?: true
    animalId?: true
    volunteerId?: true
  }

  export type OfferMaxAggregateInputType = {
    status?: true
    animalId?: true
    volunteerId?: true
  }

  export type OfferCountAggregateInputType = {
    status?: true
    animalId?: true
    volunteerId?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    status: $Enums.OfferStatus
    animalId: number
    volunteerId: number
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status?: boolean
    animalId?: boolean
    volunteerId?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status?: boolean
    animalId?: boolean
    volunteerId?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status?: boolean
    animalId?: boolean
    volunteerId?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    status?: boolean
    animalId?: boolean
    volunteerId?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"status" | "animalId" | "volunteerId", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
      volunteer: Prisma.$VolunteerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      status: $Enums.OfferStatus
      animalId: number
      volunteerId: number
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `animalId`
     * const offerWithAnimalIdOnly = await prisma.offer.findMany({ select: { animalId: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `animalId`
     * const offerWithAnimalIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { animalId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `animalId`
     * const offerWithAnimalIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { animalId: true },
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
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
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
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteer<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly status: FieldRef<"Offer", 'OfferStatus'>
    readonly animalId: FieldRef<"Offer", 'Int'>
    readonly volunteerId: FieldRef<"Offer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    image: 'image',
    region: 'region',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AssociationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    siret: 'siret',
    userId: 'userId'
  };

  export type AssociationScalarFieldEnum = (typeof AssociationScalarFieldEnum)[keyof typeof AssociationScalarFieldEnum]


  export const VolunteerScalarFieldEnum: {
    id: 'id',
    lastname: 'lastname',
    firstname: 'firstname',
    capacity: 'capacity',
    userId: 'userId'
  };

  export type VolunteerScalarFieldEnum = (typeof VolunteerScalarFieldEnum)[keyof typeof VolunteerScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    species: 'species',
    breed: 'breed',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    description: 'description',
    status: 'status',
    associationId: 'associationId',
    volunteerId: 'volunteerId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    thumb: 'thumb',
    animalID: 'animalID'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    status: 'status',
    animalId: 'animalId',
    volunteerId: 'volunteerId'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


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
   * Reference to a field of type 'Region'
   */
  export type EnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region'>
    


  /**
   * Reference to a field of type 'Region[]'
   */
  export type ListEnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AnimalStatus'
   */
  export type EnumAnimalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalStatus'>
    


  /**
   * Reference to a field of type 'AnimalStatus[]'
   */
  export type ListEnumAnimalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalStatus[]'>
    


  /**
   * Reference to a field of type 'OfferStatus'
   */
  export type EnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus'>
    


  /**
   * Reference to a field of type 'OfferStatus[]'
   */
  export type ListEnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    region?: EnumRegionNullableFilter<"Users"> | $Enums.Region | null
    description?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    volunteer?: VolunteerOrderByWithRelationInput
    association?: AssociationOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    region?: EnumRegionNullableFilter<"Users"> | $Enums.Region | null
    description?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    address?: StringWithAggregatesFilter<"Users"> | string
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
    region?: EnumRegionNullableWithAggregatesFilter<"Users"> | $Enums.Region | null
    description?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type AssociationWhereInput = {
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    id?: IntFilter<"Association"> | number
    name?: StringFilter<"Association"> | string
    siret?: StringFilter<"Association"> | string
    userId?: IntFilter<"Association"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    animals?: AnimalListRelationFilter
  }

  export type AssociationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    siret?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    animals?: AnimalOrderByRelationAggregateInput
  }

  export type AssociationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    siret?: string
    userId?: number
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    name?: StringFilter<"Association"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    animals?: AnimalListRelationFilter
  }, "id" | "siret" | "userId">

  export type AssociationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    siret?: SortOrder
    userId?: SortOrder
    _count?: AssociationCountOrderByAggregateInput
    _avg?: AssociationAvgOrderByAggregateInput
    _max?: AssociationMaxOrderByAggregateInput
    _min?: AssociationMinOrderByAggregateInput
    _sum?: AssociationSumOrderByAggregateInput
  }

  export type AssociationScalarWhereWithAggregatesInput = {
    AND?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    OR?: AssociationScalarWhereWithAggregatesInput[]
    NOT?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Association"> | number
    name?: StringWithAggregatesFilter<"Association"> | string
    siret?: StringWithAggregatesFilter<"Association"> | string
    userId?: IntWithAggregatesFilter<"Association"> | number
  }

  export type VolunteerWhereInput = {
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    id?: IntFilter<"Volunteer"> | number
    lastname?: StringFilter<"Volunteer"> | string
    firstname?: StringFilter<"Volunteer"> | string
    capacity?: StringFilter<"Volunteer"> | string
    userId?: IntFilter<"Volunteer"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    offers?: OfferListRelationFilter
    animal?: AnimalListRelationFilter
  }

  export type VolunteerOrderByWithRelationInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    capacity?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    offers?: OfferOrderByRelationAggregateInput
    animal?: AnimalOrderByRelationAggregateInput
  }

  export type VolunteerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    lastname?: StringFilter<"Volunteer"> | string
    firstname?: StringFilter<"Volunteer"> | string
    capacity?: StringFilter<"Volunteer"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    offers?: OfferListRelationFilter
    animal?: AnimalListRelationFilter
  }, "id" | "userId">

  export type VolunteerOrderByWithAggregationInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    capacity?: SortOrder
    userId?: SortOrder
    _count?: VolunteerCountOrderByAggregateInput
    _avg?: VolunteerAvgOrderByAggregateInput
    _max?: VolunteerMaxOrderByAggregateInput
    _min?: VolunteerMinOrderByAggregateInput
    _sum?: VolunteerSumOrderByAggregateInput
  }

  export type VolunteerScalarWhereWithAggregatesInput = {
    AND?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    OR?: VolunteerScalarWhereWithAggregatesInput[]
    NOT?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Volunteer"> | number
    lastname?: StringWithAggregatesFilter<"Volunteer"> | string
    firstname?: StringWithAggregatesFilter<"Volunteer"> | string
    capacity?: StringWithAggregatesFilter<"Volunteer"> | string
    userId?: IntWithAggregatesFilter<"Volunteer"> | number
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    id?: IntFilter<"Animal"> | number
    name?: StringFilter<"Animal"> | string
    species?: StringFilter<"Animal"> | string
    breed?: StringNullableFilter<"Animal"> | string | null
    gender?: StringFilter<"Animal"> | string
    dateOfBirth?: DateTimeNullableFilter<"Animal"> | Date | string | null
    description?: StringFilter<"Animal"> | string
    status?: EnumAnimalStatusFilter<"Animal"> | $Enums.AnimalStatus
    associationId?: IntFilter<"Animal"> | number
    volunteerId?: IntNullableFilter<"Animal"> | number | null
    created_at?: DateTimeFilter<"Animal"> | Date | string
    updated_at?: DateTimeFilter<"Animal"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    images?: ImageListRelationFilter
    offers?: OfferListRelationFilter
  }

  export type AnimalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    associationId?: SortOrder
    volunteerId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    association?: AssociationOrderByWithRelationInput
    volunteer?: VolunteerOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    offers?: OfferOrderByRelationAggregateInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    name?: StringFilter<"Animal"> | string
    species?: StringFilter<"Animal"> | string
    breed?: StringNullableFilter<"Animal"> | string | null
    gender?: StringFilter<"Animal"> | string
    dateOfBirth?: DateTimeNullableFilter<"Animal"> | Date | string | null
    description?: StringFilter<"Animal"> | string
    status?: EnumAnimalStatusFilter<"Animal"> | $Enums.AnimalStatus
    associationId?: IntFilter<"Animal"> | number
    volunteerId?: IntNullableFilter<"Animal"> | number | null
    created_at?: DateTimeFilter<"Animal"> | Date | string
    updated_at?: DateTimeFilter<"Animal"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    images?: ImageListRelationFilter
    offers?: OfferListRelationFilter
  }, "id">

  export type AnimalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    associationId?: SortOrder
    volunteerId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animal"> | number
    name?: StringWithAggregatesFilter<"Animal"> | string
    species?: StringWithAggregatesFilter<"Animal"> | string
    breed?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    gender?: StringWithAggregatesFilter<"Animal"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Animal"> | Date | string | null
    description?: StringWithAggregatesFilter<"Animal"> | string
    status?: EnumAnimalStatusWithAggregatesFilter<"Animal"> | $Enums.AnimalStatus
    associationId?: IntWithAggregatesFilter<"Animal"> | number
    volunteerId?: IntNullableWithAggregatesFilter<"Animal"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    thumb?: StringFilter<"Image"> | string
    animalID?: IntFilter<"Image"> | number
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    thumb?: SortOrder
    animalID?: SortOrder
    animal?: AnimalOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    thumb?: StringFilter<"Image"> | string
    animalID?: IntFilter<"Image"> | number
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    thumb?: SortOrder
    animalID?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    thumb?: StringWithAggregatesFilter<"Image"> | string
    animalID?: IntWithAggregatesFilter<"Image"> | number
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    status?: EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus
    animalId?: IntFilter<"Offer"> | number
    volunteerId?: IntFilter<"Offer"> | number
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type OfferOrderByWithRelationInput = {
    status?: SortOrder
    animalId?: SortOrder
    volunteerId?: SortOrder
    animal?: AnimalOrderByWithRelationInput
    volunteer?: VolunteerOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    volunteerId_animalId?: OfferVolunteerIdAnimalIdCompoundUniqueInput
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    status?: EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus
    animalId?: IntFilter<"Offer"> | number
    volunteerId?: IntFilter<"Offer"> | number
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "volunteerId_animalId">

  export type OfferOrderByWithAggregationInput = {
    status?: SortOrder
    animalId?: SortOrder
    volunteerId?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    status?: EnumOfferStatusWithAggregatesFilter<"Offer"> | $Enums.OfferStatus
    animalId?: IntWithAggregatesFilter<"Offer"> | number
    volunteerId?: IntWithAggregatesFilter<"Offer"> | number
  }

  export type UsersCreateInput = {
    email: string
    password: string
    phone: string
    address: string
    image?: string | null
    region?: $Enums.Region | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
    association?: AssociationCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    phone: string
    address: string
    image?: string | null
    region?: $Enums.Region | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
    association?: AssociationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
    association?: AssociationUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
    association?: AssociationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    password: string
    phone: string
    address: string
    image?: string | null
    region?: $Enums.Region | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociationCreateInput = {
    name: string
    siret: string
    user: UsersCreateNestedOneWithoutAssociationInput
    animals?: AnimalCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateInput = {
    id?: number
    name: string
    siret: string
    userId: number
    animals?: AnimalUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutAssociationNestedInput
    animals?: AnimalUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    animals?: AnimalUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationCreateManyInput = {
    id?: number
    name: string
    siret: string
    userId: number
  }

  export type AssociationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
  }

  export type AssociationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerCreateInput = {
    lastname: string
    firstname: string
    capacity: string
    user: UsersCreateNestedOneWithoutVolunteerInput
    offers?: OfferCreateNestedManyWithoutVolunteerInput
    animal?: AnimalCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateInput = {
    id?: number
    lastname: string
    firstname: string
    capacity: string
    userId: number
    offers?: OfferUncheckedCreateNestedManyWithoutVolunteerInput
    animal?: AnimalUncheckedCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerUpdateInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutVolunteerNestedInput
    offers?: OfferUpdateManyWithoutVolunteerNestedInput
    animal?: AnimalUpdateManyWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    offers?: OfferUncheckedUpdateManyWithoutVolunteerNestedInput
    animal?: AnimalUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type VolunteerCreateManyInput = {
    id?: number
    lastname: string
    firstname: string
    capacity: string
    userId: number
  }

  export type VolunteerUpdateManyMutationInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
  }

  export type VolunteerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AnimalCreateInput = {
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    created_at?: Date | string
    updated_at?: Date | string
    association: AssociationCreateNestedOneWithoutAnimalsInput
    volunteer?: VolunteerCreateNestedOneWithoutAnimalInput
    images?: ImageCreateNestedManyWithoutAnimalInput
    offers?: OfferCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    associationId: number
    volunteerId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnimalInput
    offers?: OfferUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutAnimalsNestedInput
    volunteer?: VolunteerUpdateOneWithoutAnimalNestedInput
    images?: ImageUpdateManyWithoutAnimalNestedInput
    offers?: OfferUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    associationId?: IntFieldUpdateOperationsInput | number
    volunteerId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnimalNestedInput
    offers?: OfferUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateManyInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    associationId: number
    volunteerId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    associationId?: IntFieldUpdateOperationsInput | number
    volunteerId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    url: string
    thumb: string
    animal: AnimalCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    thumb: string
    animalID: number
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    thumb?: StringFieldUpdateOperationsInput | string
    animal?: AnimalUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    thumb?: StringFieldUpdateOperationsInput | string
    animalID?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateManyInput = {
    id?: number
    url: string
    thumb: string
    animalID: number
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    thumb?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    thumb?: StringFieldUpdateOperationsInput | string
    animalID?: IntFieldUpdateOperationsInput | number
  }

  export type OfferCreateInput = {
    status: $Enums.OfferStatus
    animal: AnimalCreateNestedOneWithoutOffersInput
    volunteer: VolunteerCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateInput = {
    status: $Enums.OfferStatus
    animalId: number
    volunteerId: number
  }

  export type OfferUpdateInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    animal?: AnimalUpdateOneRequiredWithoutOffersNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    animalId?: IntFieldUpdateOperationsInput | number
    volunteerId?: IntFieldUpdateOperationsInput | number
  }

  export type OfferCreateManyInput = {
    status: $Enums.OfferStatus
    animalId: number
    volunteerId: number
  }

  export type OfferUpdateManyMutationInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
  }

  export type OfferUncheckedUpdateManyInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    animalId?: IntFieldUpdateOperationsInput | number
    volunteerId?: IntFieldUpdateOperationsInput | number
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

  export type EnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
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

  export type VolunteerNullableScalarRelationFilter = {
    is?: VolunteerWhereInput | null
    isNot?: VolunteerWhereInput | null
  }

  export type AssociationNullableScalarRelationFilter = {
    is?: AssociationWhereInput | null
    isNot?: AssociationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    region?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    region?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    region?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
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

  export type EnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type AnimalListRelationFilter = {
    every?: AnimalWhereInput
    some?: AnimalWhereInput
    none?: AnimalWhereInput
  }

  export type AnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssociationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    siret?: SortOrder
    userId?: SortOrder
  }

  export type AssociationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AssociationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    siret?: SortOrder
    userId?: SortOrder
  }

  export type AssociationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    siret?: SortOrder
    userId?: SortOrder
  }

  export type AssociationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolunteerCountOrderByAggregateInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    capacity?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerMaxOrderByAggregateInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    capacity?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerMinOrderByAggregateInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    capacity?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAnimalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusFilter<$PrismaModel> | $Enums.AnimalStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AssociationScalarRelationFilter = {
    is?: AssociationWhereInput
    isNot?: AssociationWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    description?: SortOrder
    status?: SortOrder
    associationId?: SortOrder
    volunteerId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    id?: SortOrder
    associationId?: SortOrder
    volunteerId?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    description?: SortOrder
    status?: SortOrder
    associationId?: SortOrder
    volunteerId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    description?: SortOrder
    status?: SortOrder
    associationId?: SortOrder
    volunteerId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    id?: SortOrder
    associationId?: SortOrder
    volunteerId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAnimalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimalStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AnimalScalarRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    thumb?: SortOrder
    animalID?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    animalID?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    thumb?: SortOrder
    animalID?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    thumb?: SortOrder
    animalID?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    animalID?: SortOrder
  }

  export type EnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus
  }

  export type VolunteerScalarRelationFilter = {
    is?: VolunteerWhereInput
    isNot?: VolunteerWhereInput
  }

  export type OfferVolunteerIdAnimalIdCompoundUniqueInput = {
    volunteerId: number
    animalId: number
  }

  export type OfferCountOrderByAggregateInput = {
    status?: SortOrder
    animalId?: SortOrder
    volunteerId?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    animalId?: SortOrder
    volunteerId?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    status?: SortOrder
    animalId?: SortOrder
    volunteerId?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    status?: SortOrder
    animalId?: SortOrder
    volunteerId?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    animalId?: SortOrder
    volunteerId?: SortOrder
  }

  export type EnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusFilter<$PrismaModel>
  }

  export type VolunteerCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    connect?: VolunteerWhereUniqueInput
  }

  export type AssociationCreateNestedOneWithoutUserInput = {
    create?: XOR<AssociationCreateWithoutUserInput, AssociationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutUserInput
    connect?: AssociationWhereUniqueInput
  }

  export type VolunteerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    connect?: VolunteerWhereUniqueInput
  }

  export type AssociationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AssociationCreateWithoutUserInput, AssociationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutUserInput
    connect?: AssociationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRegionFieldUpdateOperationsInput = {
    set?: $Enums.Region | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VolunteerUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    upsert?: VolunteerUpsertWithoutUserInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUserInput, VolunteerUpdateWithoutUserInput>, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type AssociationUpdateOneWithoutUserNestedInput = {
    create?: XOR<AssociationCreateWithoutUserInput, AssociationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutUserInput
    upsert?: AssociationUpsertWithoutUserInput
    disconnect?: AssociationWhereInput | boolean
    delete?: AssociationWhereInput | boolean
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutUserInput, AssociationUpdateWithoutUserInput>, AssociationUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VolunteerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    upsert?: VolunteerUpsertWithoutUserInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUserInput, VolunteerUpdateWithoutUserInput>, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type AssociationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AssociationCreateWithoutUserInput, AssociationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutUserInput
    upsert?: AssociationUpsertWithoutUserInput
    disconnect?: AssociationWhereInput | boolean
    delete?: AssociationWhereInput | boolean
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutUserInput, AssociationUpdateWithoutUserInput>, AssociationUncheckedUpdateWithoutUserInput>
  }

  export type UsersCreateNestedOneWithoutAssociationInput = {
    create?: XOR<UsersCreateWithoutAssociationInput, UsersUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAssociationInput
    connect?: UsersWhereUniqueInput
  }

  export type AnimalCreateNestedManyWithoutAssociationInput = {
    create?: XOR<AnimalCreateWithoutAssociationInput, AnimalUncheckedCreateWithoutAssociationInput> | AnimalCreateWithoutAssociationInput[] | AnimalUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutAssociationInput | AnimalCreateOrConnectWithoutAssociationInput[]
    createMany?: AnimalCreateManyAssociationInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<AnimalCreateWithoutAssociationInput, AnimalUncheckedCreateWithoutAssociationInput> | AnimalCreateWithoutAssociationInput[] | AnimalUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutAssociationInput | AnimalCreateOrConnectWithoutAssociationInput[]
    createMany?: AnimalCreateManyAssociationInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutAssociationNestedInput = {
    create?: XOR<UsersCreateWithoutAssociationInput, UsersUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAssociationInput
    upsert?: UsersUpsertWithoutAssociationInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAssociationInput, UsersUpdateWithoutAssociationInput>, UsersUncheckedUpdateWithoutAssociationInput>
  }

  export type AnimalUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<AnimalCreateWithoutAssociationInput, AnimalUncheckedCreateWithoutAssociationInput> | AnimalCreateWithoutAssociationInput[] | AnimalUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutAssociationInput | AnimalCreateOrConnectWithoutAssociationInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutAssociationInput | AnimalUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: AnimalCreateManyAssociationInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutAssociationInput | AnimalUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutAssociationInput | AnimalUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<AnimalCreateWithoutAssociationInput, AnimalUncheckedCreateWithoutAssociationInput> | AnimalCreateWithoutAssociationInput[] | AnimalUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutAssociationInput | AnimalCreateOrConnectWithoutAssociationInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutAssociationInput | AnimalUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: AnimalCreateManyAssociationInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutAssociationInput | AnimalUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutAssociationInput | AnimalUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutVolunteerInput = {
    create?: XOR<UsersCreateWithoutVolunteerInput, UsersUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVolunteerInput
    connect?: UsersWhereUniqueInput
  }

  export type OfferCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<OfferCreateWithoutVolunteerInput, OfferUncheckedCreateWithoutVolunteerInput> | OfferCreateWithoutVolunteerInput[] | OfferUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVolunteerInput | OfferCreateOrConnectWithoutVolunteerInput[]
    createMany?: OfferCreateManyVolunteerInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type AnimalCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<AnimalCreateWithoutVolunteerInput, AnimalUncheckedCreateWithoutVolunteerInput> | AnimalCreateWithoutVolunteerInput[] | AnimalUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutVolunteerInput | AnimalCreateOrConnectWithoutVolunteerInput[]
    createMany?: AnimalCreateManyVolunteerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<OfferCreateWithoutVolunteerInput, OfferUncheckedCreateWithoutVolunteerInput> | OfferCreateWithoutVolunteerInput[] | OfferUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVolunteerInput | OfferCreateOrConnectWithoutVolunteerInput[]
    createMany?: OfferCreateManyVolunteerInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<AnimalCreateWithoutVolunteerInput, AnimalUncheckedCreateWithoutVolunteerInput> | AnimalCreateWithoutVolunteerInput[] | AnimalUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutVolunteerInput | AnimalCreateOrConnectWithoutVolunteerInput[]
    createMany?: AnimalCreateManyVolunteerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutVolunteerNestedInput = {
    create?: XOR<UsersCreateWithoutVolunteerInput, UsersUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVolunteerInput
    upsert?: UsersUpsertWithoutVolunteerInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVolunteerInput, UsersUpdateWithoutVolunteerInput>, UsersUncheckedUpdateWithoutVolunteerInput>
  }

  export type OfferUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<OfferCreateWithoutVolunteerInput, OfferUncheckedCreateWithoutVolunteerInput> | OfferCreateWithoutVolunteerInput[] | OfferUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVolunteerInput | OfferCreateOrConnectWithoutVolunteerInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutVolunteerInput | OfferUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: OfferCreateManyVolunteerInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutVolunteerInput | OfferUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutVolunteerInput | OfferUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type AnimalUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<AnimalCreateWithoutVolunteerInput, AnimalUncheckedCreateWithoutVolunteerInput> | AnimalCreateWithoutVolunteerInput[] | AnimalUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutVolunteerInput | AnimalCreateOrConnectWithoutVolunteerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutVolunteerInput | AnimalUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: AnimalCreateManyVolunteerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutVolunteerInput | AnimalUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutVolunteerInput | AnimalUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<OfferCreateWithoutVolunteerInput, OfferUncheckedCreateWithoutVolunteerInput> | OfferCreateWithoutVolunteerInput[] | OfferUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVolunteerInput | OfferCreateOrConnectWithoutVolunteerInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutVolunteerInput | OfferUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: OfferCreateManyVolunteerInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutVolunteerInput | OfferUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutVolunteerInput | OfferUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<AnimalCreateWithoutVolunteerInput, AnimalUncheckedCreateWithoutVolunteerInput> | AnimalCreateWithoutVolunteerInput[] | AnimalUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutVolunteerInput | AnimalCreateOrConnectWithoutVolunteerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutVolunteerInput | AnimalUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: AnimalCreateManyVolunteerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutVolunteerInput | AnimalUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutVolunteerInput | AnimalUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AssociationCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<AssociationCreateWithoutAnimalsInput, AssociationUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutAnimalsInput
    connect?: AssociationWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutAnimalInput = {
    create?: XOR<VolunteerCreateWithoutAnimalInput, VolunteerUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutAnimalInput
    connect?: VolunteerWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ImageCreateWithoutAnimalInput, ImageUncheckedCreateWithoutAnimalInput> | ImageCreateWithoutAnimalInput[] | ImageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnimalInput | ImageCreateOrConnectWithoutAnimalInput[]
    createMany?: ImageCreateManyAnimalInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type OfferCreateNestedManyWithoutAnimalInput = {
    create?: XOR<OfferCreateWithoutAnimalInput, OfferUncheckedCreateWithoutAnimalInput> | OfferCreateWithoutAnimalInput[] | OfferUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutAnimalInput | OfferCreateOrConnectWithoutAnimalInput[]
    createMany?: OfferCreateManyAnimalInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ImageCreateWithoutAnimalInput, ImageUncheckedCreateWithoutAnimalInput> | ImageCreateWithoutAnimalInput[] | ImageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnimalInput | ImageCreateOrConnectWithoutAnimalInput[]
    createMany?: ImageCreateManyAnimalInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<OfferCreateWithoutAnimalInput, OfferUncheckedCreateWithoutAnimalInput> | OfferCreateWithoutAnimalInput[] | OfferUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutAnimalInput | OfferCreateOrConnectWithoutAnimalInput[]
    createMany?: OfferCreateManyAnimalInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAnimalStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnimalStatus
  }

  export type AssociationUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<AssociationCreateWithoutAnimalsInput, AssociationUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutAnimalsInput
    upsert?: AssociationUpsertWithoutAnimalsInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutAnimalsInput, AssociationUpdateWithoutAnimalsInput>, AssociationUncheckedUpdateWithoutAnimalsInput>
  }

  export type VolunteerUpdateOneWithoutAnimalNestedInput = {
    create?: XOR<VolunteerCreateWithoutAnimalInput, VolunteerUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutAnimalInput
    upsert?: VolunteerUpsertWithoutAnimalInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutAnimalInput, VolunteerUpdateWithoutAnimalInput>, VolunteerUncheckedUpdateWithoutAnimalInput>
  }

  export type ImageUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ImageCreateWithoutAnimalInput, ImageUncheckedCreateWithoutAnimalInput> | ImageCreateWithoutAnimalInput[] | ImageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnimalInput | ImageCreateOrConnectWithoutAnimalInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAnimalInput | ImageUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ImageCreateManyAnimalInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAnimalInput | ImageUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAnimalInput | ImageUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type OfferUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<OfferCreateWithoutAnimalInput, OfferUncheckedCreateWithoutAnimalInput> | OfferCreateWithoutAnimalInput[] | OfferUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutAnimalInput | OfferCreateOrConnectWithoutAnimalInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutAnimalInput | OfferUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: OfferCreateManyAnimalInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutAnimalInput | OfferUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutAnimalInput | OfferUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ImageCreateWithoutAnimalInput, ImageUncheckedCreateWithoutAnimalInput> | ImageCreateWithoutAnimalInput[] | ImageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnimalInput | ImageCreateOrConnectWithoutAnimalInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAnimalInput | ImageUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ImageCreateManyAnimalInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAnimalInput | ImageUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAnimalInput | ImageUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<OfferCreateWithoutAnimalInput, OfferUncheckedCreateWithoutAnimalInput> | OfferCreateWithoutAnimalInput[] | OfferUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutAnimalInput | OfferCreateOrConnectWithoutAnimalInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutAnimalInput | OfferUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: OfferCreateManyAnimalInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutAnimalInput | OfferUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutAnimalInput | OfferUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type AnimalCreateNestedOneWithoutImagesInput = {
    create?: XOR<AnimalCreateWithoutImagesInput, AnimalUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutImagesInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<AnimalCreateWithoutImagesInput, AnimalUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutImagesInput
    upsert?: AnimalUpsertWithoutImagesInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutImagesInput, AnimalUpdateWithoutImagesInput>, AnimalUncheckedUpdateWithoutImagesInput>
  }

  export type AnimalCreateNestedOneWithoutOffersInput = {
    create?: XOR<AnimalCreateWithoutOffersInput, AnimalUncheckedCreateWithoutOffersInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOffersInput
    connect?: AnimalWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutOffersInput = {
    create?: XOR<VolunteerCreateWithoutOffersInput, VolunteerUncheckedCreateWithoutOffersInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutOffersInput
    connect?: VolunteerWhereUniqueInput
  }

  export type EnumOfferStatusFieldUpdateOperationsInput = {
    set?: $Enums.OfferStatus
  }

  export type AnimalUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<AnimalCreateWithoutOffersInput, AnimalUncheckedCreateWithoutOffersInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOffersInput
    upsert?: AnimalUpsertWithoutOffersInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutOffersInput, AnimalUpdateWithoutOffersInput>, AnimalUncheckedUpdateWithoutOffersInput>
  }

  export type VolunteerUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<VolunteerCreateWithoutOffersInput, VolunteerUncheckedCreateWithoutOffersInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutOffersInput
    upsert?: VolunteerUpsertWithoutOffersInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutOffersInput, VolunteerUpdateWithoutOffersInput>, VolunteerUncheckedUpdateWithoutOffersInput>
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

  export type NestedEnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
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

  export type NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAnimalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusFilter<$PrismaModel> | $Enums.AnimalStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAnimalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimalStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus
  }

  export type NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusFilter<$PrismaModel>
  }

  export type VolunteerCreateWithoutUserInput = {
    lastname: string
    firstname: string
    capacity: string
    offers?: OfferCreateNestedManyWithoutVolunteerInput
    animal?: AnimalCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutUserInput = {
    id?: number
    lastname: string
    firstname: string
    capacity: string
    offers?: OfferUncheckedCreateNestedManyWithoutVolunteerInput
    animal?: AnimalUncheckedCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutUserInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
  }

  export type AssociationCreateWithoutUserInput = {
    name: string
    siret: string
    animals?: AnimalCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    siret: string
    animals?: AnimalUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutUserInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutUserInput, AssociationUncheckedCreateWithoutUserInput>
  }

  export type VolunteerUpsertWithoutUserInput = {
    update: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutUserInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type VolunteerUpdateWithoutUserInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    offers?: OfferUpdateManyWithoutVolunteerNestedInput
    animal?: AnimalUpdateManyWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    offers?: OfferUncheckedUpdateManyWithoutVolunteerNestedInput
    animal?: AnimalUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type AssociationUpsertWithoutUserInput = {
    update: XOR<AssociationUpdateWithoutUserInput, AssociationUncheckedUpdateWithoutUserInput>
    create: XOR<AssociationCreateWithoutUserInput, AssociationUncheckedCreateWithoutUserInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutUserInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutUserInput, AssociationUncheckedUpdateWithoutUserInput>
  }

  export type AssociationUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type UsersCreateWithoutAssociationInput = {
    email: string
    password: string
    phone: string
    address: string
    image?: string | null
    region?: $Enums.Region | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAssociationInput = {
    id?: number
    email: string
    password: string
    phone: string
    address: string
    image?: string | null
    region?: $Enums.Region | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAssociationInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAssociationInput, UsersUncheckedCreateWithoutAssociationInput>
  }

  export type AnimalCreateWithoutAssociationInput = {
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    created_at?: Date | string
    updated_at?: Date | string
    volunteer?: VolunteerCreateNestedOneWithoutAnimalInput
    images?: ImageCreateNestedManyWithoutAnimalInput
    offers?: OfferCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutAssociationInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    volunteerId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnimalInput
    offers?: OfferUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutAssociationInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutAssociationInput, AnimalUncheckedCreateWithoutAssociationInput>
  }

  export type AnimalCreateManyAssociationInputEnvelope = {
    data: AnimalCreateManyAssociationInput | AnimalCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutAssociationInput = {
    update: XOR<UsersUpdateWithoutAssociationInput, UsersUncheckedUpdateWithoutAssociationInput>
    create: XOR<UsersCreateWithoutAssociationInput, UsersUncheckedCreateWithoutAssociationInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAssociationInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAssociationInput, UsersUncheckedUpdateWithoutAssociationInput>
  }

  export type UsersUpdateWithoutAssociationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAssociationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AnimalUpsertWithWhereUniqueWithoutAssociationInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutAssociationInput, AnimalUncheckedUpdateWithoutAssociationInput>
    create: XOR<AnimalCreateWithoutAssociationInput, AnimalUncheckedCreateWithoutAssociationInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutAssociationInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutAssociationInput, AnimalUncheckedUpdateWithoutAssociationInput>
  }

  export type AnimalUpdateManyWithWhereWithoutAssociationInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutAssociationInput>
  }

  export type AnimalScalarWhereInput = {
    AND?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    OR?: AnimalScalarWhereInput[]
    NOT?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    id?: IntFilter<"Animal"> | number
    name?: StringFilter<"Animal"> | string
    species?: StringFilter<"Animal"> | string
    breed?: StringNullableFilter<"Animal"> | string | null
    gender?: StringFilter<"Animal"> | string
    dateOfBirth?: DateTimeNullableFilter<"Animal"> | Date | string | null
    description?: StringFilter<"Animal"> | string
    status?: EnumAnimalStatusFilter<"Animal"> | $Enums.AnimalStatus
    associationId?: IntFilter<"Animal"> | number
    volunteerId?: IntNullableFilter<"Animal"> | number | null
    created_at?: DateTimeFilter<"Animal"> | Date | string
    updated_at?: DateTimeFilter<"Animal"> | Date | string
  }

  export type UsersCreateWithoutVolunteerInput = {
    email: string
    password: string
    phone: string
    address: string
    image?: string | null
    region?: $Enums.Region | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    association?: AssociationCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutVolunteerInput = {
    id?: number
    email: string
    password: string
    phone: string
    address: string
    image?: string | null
    region?: $Enums.Region | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    association?: AssociationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutVolunteerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVolunteerInput, UsersUncheckedCreateWithoutVolunteerInput>
  }

  export type OfferCreateWithoutVolunteerInput = {
    status: $Enums.OfferStatus
    animal: AnimalCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutVolunteerInput = {
    status: $Enums.OfferStatus
    animalId: number
  }

  export type OfferCreateOrConnectWithoutVolunteerInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutVolunteerInput, OfferUncheckedCreateWithoutVolunteerInput>
  }

  export type OfferCreateManyVolunteerInputEnvelope = {
    data: OfferCreateManyVolunteerInput | OfferCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type AnimalCreateWithoutVolunteerInput = {
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    created_at?: Date | string
    updated_at?: Date | string
    association: AssociationCreateNestedOneWithoutAnimalsInput
    images?: ImageCreateNestedManyWithoutAnimalInput
    offers?: OfferCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutVolunteerInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    associationId: number
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnimalInput
    offers?: OfferUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutVolunteerInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutVolunteerInput, AnimalUncheckedCreateWithoutVolunteerInput>
  }

  export type AnimalCreateManyVolunteerInputEnvelope = {
    data: AnimalCreateManyVolunteerInput | AnimalCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutVolunteerInput = {
    update: XOR<UsersUpdateWithoutVolunteerInput, UsersUncheckedUpdateWithoutVolunteerInput>
    create: XOR<UsersCreateWithoutVolunteerInput, UsersUncheckedCreateWithoutVolunteerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVolunteerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVolunteerInput, UsersUncheckedUpdateWithoutVolunteerInput>
  }

  export type UsersUpdateWithoutVolunteerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutVolunteerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OfferUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutVolunteerInput, OfferUncheckedUpdateWithoutVolunteerInput>
    create: XOR<OfferCreateWithoutVolunteerInput, OfferUncheckedCreateWithoutVolunteerInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutVolunteerInput, OfferUncheckedUpdateWithoutVolunteerInput>
  }

  export type OfferUpdateManyWithWhereWithoutVolunteerInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    status?: EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus
    animalId?: IntFilter<"Offer"> | number
    volunteerId?: IntFilter<"Offer"> | number
  }

  export type AnimalUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutVolunteerInput, AnimalUncheckedUpdateWithoutVolunteerInput>
    create: XOR<AnimalCreateWithoutVolunteerInput, AnimalUncheckedCreateWithoutVolunteerInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutVolunteerInput, AnimalUncheckedUpdateWithoutVolunteerInput>
  }

  export type AnimalUpdateManyWithWhereWithoutVolunteerInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type AssociationCreateWithoutAnimalsInput = {
    name: string
    siret: string
    user: UsersCreateNestedOneWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutAnimalsInput = {
    id?: number
    name: string
    siret: string
    userId: number
  }

  export type AssociationCreateOrConnectWithoutAnimalsInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutAnimalsInput, AssociationUncheckedCreateWithoutAnimalsInput>
  }

  export type VolunteerCreateWithoutAnimalInput = {
    lastname: string
    firstname: string
    capacity: string
    user: UsersCreateNestedOneWithoutVolunteerInput
    offers?: OfferCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutAnimalInput = {
    id?: number
    lastname: string
    firstname: string
    capacity: string
    userId: number
    offers?: OfferUncheckedCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutAnimalInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutAnimalInput, VolunteerUncheckedCreateWithoutAnimalInput>
  }

  export type ImageCreateWithoutAnimalInput = {
    url: string
    thumb: string
  }

  export type ImageUncheckedCreateWithoutAnimalInput = {
    id?: number
    url: string
    thumb: string
  }

  export type ImageCreateOrConnectWithoutAnimalInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAnimalInput, ImageUncheckedCreateWithoutAnimalInput>
  }

  export type ImageCreateManyAnimalInputEnvelope = {
    data: ImageCreateManyAnimalInput | ImageCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type OfferCreateWithoutAnimalInput = {
    status: $Enums.OfferStatus
    volunteer: VolunteerCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutAnimalInput = {
    status: $Enums.OfferStatus
    volunteerId: number
  }

  export type OfferCreateOrConnectWithoutAnimalInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutAnimalInput, OfferUncheckedCreateWithoutAnimalInput>
  }

  export type OfferCreateManyAnimalInputEnvelope = {
    data: OfferCreateManyAnimalInput | OfferCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type AssociationUpsertWithoutAnimalsInput = {
    update: XOR<AssociationUpdateWithoutAnimalsInput, AssociationUncheckedUpdateWithoutAnimalsInput>
    create: XOR<AssociationCreateWithoutAnimalsInput, AssociationUncheckedCreateWithoutAnimalsInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutAnimalsInput, AssociationUncheckedUpdateWithoutAnimalsInput>
  }

  export type AssociationUpdateWithoutAnimalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutAnimalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    siret?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerUpsertWithoutAnimalInput = {
    update: XOR<VolunteerUpdateWithoutAnimalInput, VolunteerUncheckedUpdateWithoutAnimalInput>
    create: XOR<VolunteerCreateWithoutAnimalInput, VolunteerUncheckedCreateWithoutAnimalInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutAnimalInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutAnimalInput, VolunteerUncheckedUpdateWithoutAnimalInput>
  }

  export type VolunteerUpdateWithoutAnimalInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutVolunteerNestedInput
    offers?: OfferUpdateManyWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    offers?: OfferUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutAnimalInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutAnimalInput, ImageUncheckedUpdateWithoutAnimalInput>
    create: XOR<ImageCreateWithoutAnimalInput, ImageUncheckedCreateWithoutAnimalInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutAnimalInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutAnimalInput, ImageUncheckedUpdateWithoutAnimalInput>
  }

  export type ImageUpdateManyWithWhereWithoutAnimalInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutAnimalInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    thumb?: StringFilter<"Image"> | string
    animalID?: IntFilter<"Image"> | number
  }

  export type OfferUpsertWithWhereUniqueWithoutAnimalInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutAnimalInput, OfferUncheckedUpdateWithoutAnimalInput>
    create: XOR<OfferCreateWithoutAnimalInput, OfferUncheckedCreateWithoutAnimalInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutAnimalInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutAnimalInput, OfferUncheckedUpdateWithoutAnimalInput>
  }

  export type OfferUpdateManyWithWhereWithoutAnimalInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutAnimalInput>
  }

  export type AnimalCreateWithoutImagesInput = {
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    created_at?: Date | string
    updated_at?: Date | string
    association: AssociationCreateNestedOneWithoutAnimalsInput
    volunteer?: VolunteerCreateNestedOneWithoutAnimalInput
    offers?: OfferCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    associationId: number
    volunteerId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutImagesInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutImagesInput, AnimalUncheckedCreateWithoutImagesInput>
  }

  export type AnimalUpsertWithoutImagesInput = {
    update: XOR<AnimalUpdateWithoutImagesInput, AnimalUncheckedUpdateWithoutImagesInput>
    create: XOR<AnimalCreateWithoutImagesInput, AnimalUncheckedCreateWithoutImagesInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutImagesInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutImagesInput, AnimalUncheckedUpdateWithoutImagesInput>
  }

  export type AnimalUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutAnimalsNestedInput
    volunteer?: VolunteerUpdateOneWithoutAnimalNestedInput
    offers?: OfferUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    associationId?: IntFieldUpdateOperationsInput | number
    volunteerId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateWithoutOffersInput = {
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    created_at?: Date | string
    updated_at?: Date | string
    association: AssociationCreateNestedOneWithoutAnimalsInput
    volunteer?: VolunteerCreateNestedOneWithoutAnimalInput
    images?: ImageCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutOffersInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    associationId: number
    volunteerId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutOffersInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutOffersInput, AnimalUncheckedCreateWithoutOffersInput>
  }

  export type VolunteerCreateWithoutOffersInput = {
    lastname: string
    firstname: string
    capacity: string
    user: UsersCreateNestedOneWithoutVolunteerInput
    animal?: AnimalCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutOffersInput = {
    id?: number
    lastname: string
    firstname: string
    capacity: string
    userId: number
    animal?: AnimalUncheckedCreateNestedManyWithoutVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutOffersInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutOffersInput, VolunteerUncheckedCreateWithoutOffersInput>
  }

  export type AnimalUpsertWithoutOffersInput = {
    update: XOR<AnimalUpdateWithoutOffersInput, AnimalUncheckedUpdateWithoutOffersInput>
    create: XOR<AnimalCreateWithoutOffersInput, AnimalUncheckedCreateWithoutOffersInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutOffersInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutOffersInput, AnimalUncheckedUpdateWithoutOffersInput>
  }

  export type AnimalUpdateWithoutOffersInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutAnimalsNestedInput
    volunteer?: VolunteerUpdateOneWithoutAnimalNestedInput
    images?: ImageUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    associationId?: IntFieldUpdateOperationsInput | number
    volunteerId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type VolunteerUpsertWithoutOffersInput = {
    update: XOR<VolunteerUpdateWithoutOffersInput, VolunteerUncheckedUpdateWithoutOffersInput>
    create: XOR<VolunteerCreateWithoutOffersInput, VolunteerUncheckedCreateWithoutOffersInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutOffersInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutOffersInput, VolunteerUncheckedUpdateWithoutOffersInput>
  }

  export type VolunteerUpdateWithoutOffersInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutVolunteerNestedInput
    animal?: AnimalUpdateManyWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    animal?: AnimalUncheckedUpdateManyWithoutVolunteerNestedInput
  }

  export type AnimalCreateManyAssociationInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    volunteerId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalUpdateWithoutAssociationInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneWithoutAnimalNestedInput
    images?: ImageUpdateManyWithoutAnimalNestedInput
    offers?: OfferUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutAssociationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    volunteerId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnimalNestedInput
    offers?: OfferUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutAssociationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    volunteerId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateManyVolunteerInput = {
    status: $Enums.OfferStatus
    animalId: number
  }

  export type AnimalCreateManyVolunteerInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender: string
    dateOfBirth?: Date | string | null
    description: string
    status: $Enums.AnimalStatus
    associationId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OfferUpdateWithoutVolunteerInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    animal?: AnimalUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutVolunteerInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    animalId?: IntFieldUpdateOperationsInput | number
  }

  export type OfferUncheckedUpdateManyWithoutVolunteerInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    animalId?: IntFieldUpdateOperationsInput | number
  }

  export type AnimalUpdateWithoutVolunteerInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutAnimalsNestedInput
    images?: ImageUpdateManyWithoutAnimalNestedInput
    offers?: OfferUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutVolunteerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    associationId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnimalNestedInput
    offers?: OfferUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutVolunteerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    associationId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyAnimalInput = {
    id?: number
    url: string
    thumb: string
  }

  export type OfferCreateManyAnimalInput = {
    status: $Enums.OfferStatus
    volunteerId: number
  }

  export type ImageUpdateWithoutAnimalInput = {
    url?: StringFieldUpdateOperationsInput | string
    thumb?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    thumb?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    thumb?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUpdateWithoutAnimalInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    volunteer?: VolunteerUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutAnimalInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    volunteerId?: IntFieldUpdateOperationsInput | number
  }

  export type OfferUncheckedUpdateManyWithoutAnimalInput = {
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    volunteerId?: IntFieldUpdateOperationsInput | number
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