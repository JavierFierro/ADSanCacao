import { Observable } from "rxjs";
import { isExportable } from "./formulario";
import { Permiso } from "./tecnico";

export interface IDatabase<T> {
    localData: Observable<T[]>;
    list(): Observable<T[]>;
    set(item: T, permiso: Permiso): Promise<void>;
    delete(item: T): Promise<string>;
    export(id: string): Promise<void>;
    initData(): void;
}

export interface IsExportable {
    export(id: string): Promise<void>;
    exportAll(exportables: isExportable[]): Promise<void>;
}