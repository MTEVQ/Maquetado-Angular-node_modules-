"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineAngularResourceSymbol = exports.InlineAngularResourceLoaderPath = void 0;
exports.InlineAngularResourceLoaderPath = __filename;
exports.InlineAngularResourceSymbol = Symbol('@ngtools/webpack[angular-resource]');
function default_1() {
    const callback = this.async();
    const { data } = this.getOptions();
    if (data) {
        callback(undefined, Buffer.from(data, 'base64').toString());
    }
    else {
        const content = this._compilation[exports.InlineAngularResourceSymbol];
        callback(undefined, content);
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbmd0b29scy93ZWJwYWNrL3NyYy9sb2FkZXJzL2lubGluZS1yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7QUFJVSxRQUFBLCtCQUErQixHQUFHLFVBQVUsQ0FBQztBQUU3QyxRQUFBLDJCQUEyQixHQUFHLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBTXhGO0lBQ0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFbkMsSUFBSSxJQUFJLEVBQUU7UUFDUixRQUFRLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDN0Q7U0FBTTtRQUNMLE1BQU0sT0FBTyxHQUFJLElBQUksQ0FBQyxZQUFxRCxDQUN6RSxtQ0FBMkIsQ0FDNUIsQ0FBQztRQUNGLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDSCxDQUFDO0FBWkQsNEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBDb21waWxhdGlvbiwgTG9hZGVyQ29udGV4dCB9IGZyb20gJ3dlYnBhY2snO1xuXG5leHBvcnQgY29uc3QgSW5saW5lQW5ndWxhclJlc291cmNlTG9hZGVyUGF0aCA9IF9fZmlsZW5hbWU7XG5cbmV4cG9ydCBjb25zdCBJbmxpbmVBbmd1bGFyUmVzb3VyY2VTeW1ib2wgPSBTeW1ib2woJ0BuZ3Rvb2xzL3dlYnBhY2tbYW5ndWxhci1yZXNvdXJjZV0nKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb21waWxhdGlvbldpdGhJbmxpbmVBbmd1bGFyUmVzb3VyY2UgZXh0ZW5kcyBDb21waWxhdGlvbiB7XG4gIFtJbmxpbmVBbmd1bGFyUmVzb3VyY2VTeW1ib2xdOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0aGlzOiBMb2FkZXJDb250ZXh0PHsgZGF0YT86IHN0cmluZyB9Pikge1xuICBjb25zdCBjYWxsYmFjayA9IHRoaXMuYXN5bmMoKTtcbiAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLmdldE9wdGlvbnMoKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgQnVmZmVyLmZyb20oZGF0YSwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5fY29tcGlsYXRpb24gYXMgQ29tcGlsYXRpb25XaXRoSW5saW5lQW5ndWxhclJlc291cmNlKVtcbiAgICAgIElubGluZUFuZ3VsYXJSZXNvdXJjZVN5bWJvbFxuICAgIF07XG4gICAgY2FsbGJhY2sodW5kZWZpbmVkLCBjb250ZW50KTtcbiAgfVxufVxuIl19