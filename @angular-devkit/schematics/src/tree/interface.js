"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeSymbol = exports.FileVisitorCancelToken = exports.MergeStrategy = void 0;
var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy[MergeStrategy["AllowOverwriteConflict"] = 2] = "AllowOverwriteConflict";
    MergeStrategy[MergeStrategy["AllowCreationConflict"] = 4] = "AllowCreationConflict";
    MergeStrategy[MergeStrategy["AllowDeleteConflict"] = 8] = "AllowDeleteConflict";
    // Uses the default strategy.
    MergeStrategy[MergeStrategy["Default"] = 0] = "Default";
    // Error out if 2 files have the same path. It is useful to have a different value than
    // Default in this case as the tooling Default might differ.
    MergeStrategy[MergeStrategy["Error"] = 1] = "Error";
    // Only content conflicts are overwritten.
    MergeStrategy[MergeStrategy["ContentOnly"] = 2] = "ContentOnly";
    // Overwrite everything with the latest change.
    MergeStrategy[MergeStrategy["Overwrite"] = 14] = "Overwrite";
})(MergeStrategy = exports.MergeStrategy || (exports.MergeStrategy = {}));
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
exports.FileVisitorCancelToken = Symbol();
exports.TreeSymbol = (function () {
    const globalSymbol = (typeof window == 'object' && window.window === window && window.Symbol) ||
        (typeof self == 'object' && self.self === self && self.Symbol) ||
        (typeof global == 'object' && global.global === global && global.Symbol);
    if (!globalSymbol) {
        return Symbol('schematic-tree');
    }
    if (!globalSymbol.schematicTree) {
        globalSymbol.schematicTree = Symbol('schematic-tree');
    }
    return globalSymbol.schematicTree;
})();
// eslint-disable-next-line @typescript-eslint/no-namespace
var Tree;
(function (Tree) {
    function isTree(maybeTree) {
        return exports.TreeSymbol in maybeTree;
    }
    Tree.isTree = isTree;
})(Tree || (Tree = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhcl9kZXZraXQvc2NoZW1hdGljcy9zcmMvdHJlZS9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7O0FBS0gsSUFBWSxhQWlCWDtBQWpCRCxXQUFZLGFBQWE7SUFDdkIscUZBQStCLENBQUE7SUFDL0IsbUZBQThCLENBQUE7SUFDOUIsK0VBQTRCLENBQUE7SUFFNUIsNkJBQTZCO0lBQzdCLHVEQUFXLENBQUE7SUFFWCx1RkFBdUY7SUFDdkYsNERBQTREO0lBQzVELG1EQUFjLENBQUE7SUFFZCwwQ0FBMEM7SUFDMUMsK0RBQW9DLENBQUE7SUFFcEMsK0NBQStDO0lBQy9DLDREQUFnRixDQUFBO0FBQ2xGLENBQUMsRUFqQlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFpQnhCO0FBRUQsa0VBQWtFO0FBQ3JELFFBQUEsc0JBQXNCLEdBQVcsTUFBTSxFQUFFLENBQUM7QUE2QjFDLFFBQUEsVUFBVSxHQUFXLENBQUM7SUFDakMsTUFBTSxZQUFZLEdBQ2hCLENBQUMsT0FBTyxNQUFNLElBQUksUUFBUSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDeEUsQ0FBQyxPQUFPLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5RCxDQUFDLE9BQU8sTUFBTSxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0UsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7UUFDL0IsWUFBWSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN2RDtJQUVELE9BQU8sWUFBWSxDQUFDLGFBQWEsQ0FBQztBQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBc0RMLDJEQUEyRDtBQUMzRCxJQUFVLElBQUksQ0FJYjtBQUpELFdBQVUsSUFBSTtJQUNaLFNBQWdCLE1BQU0sQ0FBQyxTQUFpQjtRQUN0QyxPQUFPLGtCQUFVLElBQUksU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFGZSxXQUFNLFNBRXJCLENBQUE7QUFDSCxDQUFDLEVBSlMsSUFBSSxLQUFKLElBQUksUUFJYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBKc29uVmFsdWUsIFBhdGgsIFBhdGhGcmFnbWVudCB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGVudW0gTWVyZ2VTdHJhdGVneSB7XG4gIEFsbG93T3ZlcndyaXRlQ29uZmxpY3QgPSAxIDw8IDEsXG4gIEFsbG93Q3JlYXRpb25Db25mbGljdCA9IDEgPDwgMixcbiAgQWxsb3dEZWxldGVDb25mbGljdCA9IDEgPDwgMyxcblxuICAvLyBVc2VzIHRoZSBkZWZhdWx0IHN0cmF0ZWd5LlxuICBEZWZhdWx0ID0gMCxcblxuICAvLyBFcnJvciBvdXQgaWYgMiBmaWxlcyBoYXZlIHRoZSBzYW1lIHBhdGguIEl0IGlzIHVzZWZ1bCB0byBoYXZlIGEgZGlmZmVyZW50IHZhbHVlIHRoYW5cbiAgLy8gRGVmYXVsdCBpbiB0aGlzIGNhc2UgYXMgdGhlIHRvb2xpbmcgRGVmYXVsdCBtaWdodCBkaWZmZXIuXG4gIEVycm9yID0gMSA8PCAwLFxuXG4gIC8vIE9ubHkgY29udGVudCBjb25mbGljdHMgYXJlIG92ZXJ3cml0dGVuLlxuICBDb250ZW50T25seSA9IEFsbG93T3ZlcndyaXRlQ29uZmxpY3QsXG5cbiAgLy8gT3ZlcndyaXRlIGV2ZXJ5dGhpbmcgd2l0aCB0aGUgbGF0ZXN0IGNoYW5nZS5cbiAgT3ZlcndyaXRlID0gQWxsb3dPdmVyd3JpdGVDb25mbGljdCArIEFsbG93Q3JlYXRpb25Db25mbGljdCArIEFsbG93RGVsZXRlQ29uZmxpY3QsXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8taW5mZXJyYWJsZS10eXBlc1xuZXhwb3J0IGNvbnN0IEZpbGVWaXNpdG9yQ2FuY2VsVG9rZW46IHN5bWJvbCA9IFN5bWJvbCgpO1xuZXhwb3J0IHR5cGUgRmlsZVZpc2l0b3IgPSBGaWxlUHJlZGljYXRlPHZvaWQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSB7XG4gIHJlYWRvbmx5IHBhdGg6IFBhdGg7XG4gIHJlYWRvbmx5IGNvbnRlbnQ6IEJ1ZmZlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJFbnRyeSB7XG4gIHJlYWRvbmx5IHBhcmVudDogRGlyRW50cnkgfCBudWxsO1xuICByZWFkb25seSBwYXRoOiBQYXRoO1xuXG4gIHJlYWRvbmx5IHN1YmRpcnM6IFBhdGhGcmFnbWVudFtdO1xuICByZWFkb25seSBzdWJmaWxlczogUGF0aEZyYWdtZW50W107XG5cbiAgZGlyKG5hbWU6IFBhdGhGcmFnbWVudCk6IERpckVudHJ5O1xuICBmaWxlKG5hbWU6IFBhdGhGcmFnbWVudCk6IEZpbGVFbnRyeSB8IG51bGw7XG5cbiAgdmlzaXQodmlzaXRvcjogRmlsZVZpc2l0b3IpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVQcmVkaWNhdGU8VD4ge1xuICAocGF0aDogUGF0aCwgZW50cnk/OiBSZWFkb25seTxGaWxlRW50cnk+IHwgbnVsbCk6IFQ7XG59XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiB7IFN5bWJvbDogeyBzY2hlbWF0aWNUcmVlOiBzeW1ib2wgfTsgd2luZG93OiB7fSB9O1xuZGVjbGFyZSBjb25zdCBzZWxmOiB7IFN5bWJvbDogeyBzY2hlbWF0aWNUcmVlOiBzeW1ib2wgfTsgc2VsZjoge30gfTtcbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiB7IFN5bWJvbDogeyBzY2hlbWF0aWNUcmVlOiBzeW1ib2wgfTsgZ2xvYmFsOiB7fSB9O1xuXG5leHBvcnQgY29uc3QgVHJlZVN5bWJvbDogc3ltYm9sID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3ltYm9sID1cbiAgICAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cud2luZG93ID09PSB3aW5kb3cgJiYgd2luZG93LlN5bWJvbCkgfHxcbiAgICAodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYuU3ltYm9sKSB8fFxuICAgICh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwuU3ltYm9sKTtcblxuICBpZiAoIWdsb2JhbFN5bWJvbCkge1xuICAgIHJldHVybiBTeW1ib2woJ3NjaGVtYXRpYy10cmVlJyk7XG4gIH1cblxuICBpZiAoIWdsb2JhbFN5bWJvbC5zY2hlbWF0aWNUcmVlKSB7XG4gICAgZ2xvYmFsU3ltYm9sLnNjaGVtYXRpY1RyZWUgPSBTeW1ib2woJ3NjaGVtYXRpYy10cmVlJyk7XG4gIH1cblxuICByZXR1cm4gZ2xvYmFsU3ltYm9sLnNjaGVtYXRpY1RyZWU7XG59KSgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyZWUge1xuICBicmFuY2goKTogVHJlZTtcbiAgbWVyZ2Uob3RoZXI6IFRyZWUsIHN0cmF0ZWd5PzogTWVyZ2VTdHJhdGVneSk6IHZvaWQ7XG5cbiAgcmVhZG9ubHkgcm9vdDogRGlyRW50cnk7XG5cbiAgLy8gUmVhZG9ubHkuXG4gIHJlYWQocGF0aDogc3RyaW5nKTogQnVmZmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogUmVhZHMgYSBmaWxlIGZyb20gdGhlIFRyZWUgYXMgYSBVVEYtOCBlbmNvZGVkIHRleHQgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVhZC5cbiAgICogQHJldHVybnMgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUuXG4gICAqIEB0aHJvd3Mge0BsaW5rIEZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb259IGlmIHRoZSBmaWxlIGlzIG5vdCBmb3VuZC5cbiAgICogQHRocm93cyBBbiBlcnJvciBpZiB0aGUgZmlsZSBjb250YWlucyBpbnZhbGlkIFVURi04IGNoYXJhY3RlcnMuXG4gICAqL1xuICByZWFkVGV4dChwYXRoOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlYWRzIGFuZCBwYXJzZXMgYSBmaWxlIGZyb20gdGhlIFRyZWUgYXMgYSBVVEYtOCBlbmNvZGVkIEpTT04gZmlsZS5cbiAgICogU3VwcG9ydHMgcGFyc2luZyBKU09OIChSRkMgODI1OSkgd2l0aCB0aGUgZm9sbG93aW5nIGV4dGVuc2lvbnM6XG4gICAqICogU2luZ2xlLWxpbmUgYW5kIG11bHRpLWxpbmUgSmF2YVNjcmlwdCBjb21tZW50c1xuICAgKiAqIFRyYWlsaW5nIGNvbW1hcyB3aXRoaW4gb2JqZWN0cyBhbmQgYXJyYXlzXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBmaWxlIHRvIHJlYWQuXG4gICAqIEByZXR1cm5zIEEgSnNvblZhbHVlIGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBjb250ZW50cyBvZiB0aGUgZmlsZS5cbiAgICogQHRocm93cyB7QGxpbmsgRmlsZURvZXNOb3RFeGlzdEV4Y2VwdGlvbn0gaWYgdGhlIGZpbGUgaXMgbm90IGZvdW5kLlxuICAgKiBAdGhyb3dzIEFuIGVycm9yIGlmIHRoZSBmaWxlIGNvbnRhaW5zIGludmFsaWQgVVRGLTggY2hhcmFjdGVycy5cbiAgICogQHRocm93cyBBbiBlcnJvciBpZiB0aGUgZmlsZSBjb250YWlucyBtYWxmb3JtZWQgSlNPTi5cbiAgICovXG4gIHJlYWRKc29uKHBhdGg6IHN0cmluZyk6IEpzb25WYWx1ZTtcblxuICBleGlzdHMocGF0aDogc3RyaW5nKTogYm9vbGVhbjtcbiAgZ2V0KHBhdGg6IHN0cmluZyk6IEZpbGVFbnRyeSB8IG51bGw7XG4gIGdldERpcihwYXRoOiBzdHJpbmcpOiBEaXJFbnRyeTtcbiAgdmlzaXQodmlzaXRvcjogRmlsZVZpc2l0b3IpOiB2b2lkO1xuXG4gIC8vIENoYW5nZSBjb250ZW50IG9mIGhvc3QgZmlsZXMuXG4gIG92ZXJ3cml0ZShwYXRoOiBzdHJpbmcsIGNvbnRlbnQ6IEJ1ZmZlciB8IHN0cmluZyk6IHZvaWQ7XG4gIGJlZ2luVXBkYXRlKHBhdGg6IHN0cmluZyk6IFVwZGF0ZVJlY29yZGVyO1xuICBjb21taXRVcGRhdGUocmVjb3JkOiBVcGRhdGVSZWNvcmRlcik6IHZvaWQ7XG5cbiAgLy8gU3RydWN0dXJhbCBtZXRob2RzLlxuICBjcmVhdGUocGF0aDogc3RyaW5nLCBjb250ZW50OiBCdWZmZXIgfCBzdHJpbmcpOiB2b2lkO1xuICBkZWxldGUocGF0aDogc3RyaW5nKTogdm9pZDtcbiAgcmVuYW1lKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IHZvaWQ7XG5cbiAgYXBwbHkoYWN0aW9uOiBBY3Rpb24sIHN0cmF0ZWd5PzogTWVyZ2VTdHJhdGVneSk6IHZvaWQ7XG4gIHJlYWRvbmx5IGFjdGlvbnM6IEFjdGlvbltdO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxubmFtZXNwYWNlIFRyZWUge1xuICBleHBvcnQgZnVuY3Rpb24gaXNUcmVlKG1heWJlVHJlZTogb2JqZWN0KTogbWF5YmVUcmVlIGlzIFRyZWUge1xuICAgIHJldHVybiBUcmVlU3ltYm9sIGluIG1heWJlVHJlZTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVJlY29yZGVyIHtcbiAgLy8gVGhlc2UganVzdCByZWNvcmQgY2hhbmdlcy5cbiAgaW5zZXJ0TGVmdChpbmRleDogbnVtYmVyLCBjb250ZW50OiBCdWZmZXIgfCBzdHJpbmcpOiBVcGRhdGVSZWNvcmRlcjtcbiAgaW5zZXJ0UmlnaHQoaW5kZXg6IG51bWJlciwgY29udGVudDogQnVmZmVyIHwgc3RyaW5nKTogVXBkYXRlUmVjb3JkZXI7XG4gIHJlbW92ZShpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IFVwZGF0ZVJlY29yZGVyO1xufVxuIl19