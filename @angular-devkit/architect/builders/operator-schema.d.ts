/**
 * All input types of builders that perform operations on one or multiple sub-builders.
 */
export interface Schema {
    builders?: Builder[];
    targets?: Target[];
    [property: string]: any;
}
export interface Builder {
    builder: string;
    options?: {
        [key: string]: any;
    };
    [property: string]: any;
}
export interface Target {
    overrides?: {
        [key: string]: any;
    };
    target: string;
    [property: string]: any;
}
