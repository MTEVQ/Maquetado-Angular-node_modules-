/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { forwardRef, Inject, Injectable, Injector, SecurityContext, ɵ_sanitizeHtml as _sanitizeHtml, ɵ_sanitizeUrl as _sanitizeUrl, ɵallowSanitizationBypassAndThrow as allowSanitizationBypassOrThrow, ɵbypassSanitizationTrustHtml as bypassSanitizationTrustHtml, ɵbypassSanitizationTrustResourceUrl as bypassSanitizationTrustResourceUrl, ɵbypassSanitizationTrustScript as bypassSanitizationTrustScript, ɵbypassSanitizationTrustStyle as bypassSanitizationTrustStyle, ɵbypassSanitizationTrustUrl as bypassSanitizationTrustUrl, ɵunwrapSafeValue as unwrapSafeValue, ɵXSS_SECURITY_URL as XSS_SECURITY_URL } from '@angular/core';
import * as i0 from "@angular/core";
export { SecurityContext };
/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
export class DomSanitizer {
}
DomSanitizer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: DomSanitizer, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DomSanitizer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: DomSanitizer, providedIn: 'root', useExisting: i0.forwardRef(function () { return DomSanitizerImpl; }) });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: DomSanitizer, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root', useExisting: forwardRef(() => DomSanitizerImpl) }]
        }] });
export function domSanitizerImplFactory(injector) {
    return new DomSanitizerImpl(injector.get(DOCUMENT));
}
export class DomSanitizerImpl extends DomSanitizer {
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    sanitize(ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case SecurityContext.NONE:
                return value;
            case SecurityContext.HTML:
                if (allowSanitizationBypassOrThrow(value, "HTML" /* BypassType.Html */)) {
                    return unwrapSafeValue(value);
                }
                return _sanitizeHtml(this._doc, String(value)).toString();
            case SecurityContext.STYLE:
                if (allowSanitizationBypassOrThrow(value, "Style" /* BypassType.Style */)) {
                    return unwrapSafeValue(value);
                }
                return value;
            case SecurityContext.SCRIPT:
                if (allowSanitizationBypassOrThrow(value, "Script" /* BypassType.Script */)) {
                    return unwrapSafeValue(value);
                }
                throw new Error('unsafe value used in a script context');
            case SecurityContext.URL:
                if (allowSanitizationBypassOrThrow(value, "URL" /* BypassType.Url */)) {
                    return unwrapSafeValue(value);
                }
                return _sanitizeUrl(String(value));
            case SecurityContext.RESOURCE_URL:
                if (allowSanitizationBypassOrThrow(value, "ResourceURL" /* BypassType.ResourceUrl */)) {
                    return unwrapSafeValue(value);
                }
                throw new Error(`unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
            default:
                throw new Error(`Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
        }
    }
    bypassSecurityTrustHtml(value) {
        return bypassSanitizationTrustHtml(value);
    }
    bypassSecurityTrustStyle(value) {
        return bypassSanitizationTrustStyle(value);
    }
    bypassSecurityTrustScript(value) {
        return bypassSanitizationTrustScript(value);
    }
    bypassSecurityTrustUrl(value) {
        return bypassSanitizationTrustUrl(value);
    }
    bypassSecurityTrustResourceUrl(value) {
        return bypassSanitizationTrustResourceUrl(value);
    }
}
DomSanitizerImpl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: DomSanitizerImpl, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
DomSanitizerImpl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: DomSanitizerImpl, providedIn: 'root', useFactory: domSanitizerImplFactory, deps: [{ token: Injector }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: DomSanitizerImpl, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root', useFactory: domSanitizerImplFactory, deps: [Injector] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Nhbml0aXphdGlvbl9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvc2VjdXJpdHkvZG9tX3Nhbml0aXphdGlvbl9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFhLGVBQWUsRUFBRSxjQUFjLElBQUksYUFBYSxFQUFFLGFBQWEsSUFBSSxZQUFZLEVBQUUsZ0NBQWdDLElBQUksOEJBQThCLEVBQUUsNEJBQTRCLElBQUksMkJBQTJCLEVBQUUsbUNBQW1DLElBQUksa0NBQWtDLEVBQUUsOEJBQThCLElBQUksNkJBQTZCLEVBQUUsNkJBQTZCLElBQUksNEJBQTRCLEVBQUUsMkJBQTJCLElBQUksMEJBQTBCLEVBQXNGLGdCQUFnQixJQUFJLGVBQWUsRUFBRSxpQkFBaUIsSUFBSSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFMXNCLE9BQU8sRUFBQyxlQUFlLEVBQUMsQ0FBQztBQThDekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUVILE1BQU0sT0FBZ0IsWUFBWTs7b0hBQVosWUFBWTt3SEFBWixZQUFZLGNBRFQsTUFBTSxrREFBZ0MsZ0JBQWdCO3NHQUN6RCxZQUFZO2tCQURqQyxVQUFVO21CQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUM7O0FBMERqRixNQUFNLFVBQVUsdUJBQXVCLENBQUMsUUFBa0I7SUFDeEQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxD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bGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Zm9yd2FyZFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgU2FuaXRpemVyLCBTZWN1cml0eUNvbnRleHQsIMm1X3Nhbml0aXplSHRtbCBhcyBfc2FuaXRpemVIdG1sLCDJtV9zYW5pdGl6ZVVybCBhcyBfc2FuaXRpemVVcmwsIMm1YWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyBhcyBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc09yVGhyb3csIMm1YnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RIdG1sIGFzIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0SHRtbCwgybVieXBhc3NTYW5pdGl6YXRpb25UcnVzdFJlc291cmNlVXJsIGFzIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0UmVzb3VyY2VVcmwsIMm1YnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTY3JpcHQgYXMgYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTY3JpcHQsIMm1YnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTdHlsZSBhcyBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFN0eWxlLCDJtWJ5cGFzc1Nhbml0aXphdGlvblRydXN0VXJsIGFzIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0VXJsLCDJtUJ5cGFzc1R5cGUgYXMgQnlwYXNzVHlwZSwgybVnZXRTYW5pdGl6YXRpb25CeXBhc3NUeXBlIGFzIGdldFNhbml0aXphdGlvbkJ5cGFzc1R5cGUsIMm1dW53cmFwU2FmZVZhbHVlIGFzIHVud3JhcFNhZmVWYWx1ZSwgybVYU1NfU0VDVVJJVFlfVVJMIGFzIFhTU19TRUNVUklUWV9VUkx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQge1NlY3VyaXR5Q29udGV4dH07XG5cblxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGluIGEgcGFydGljdWxhciBjb250ZXh0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBIVE1MLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlSHRtbCBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIHN0eWxlIChDU1MpLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlU3R5bGUgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBKYXZhU2NyaXB0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlU2NyaXB0IGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgbGlua2luZyB0byBhIGRvY3VtZW50LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgdG8gbG9hZCBleGVjdXRhYmxlIGNvZGUgZnJvbS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVJlc291cmNlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogRG9tU2FuaXRpemVyIGhlbHBzIHByZXZlbnRpbmcgQ3Jvc3MgU2l0ZSBTY3JpcHRpbmcgU2VjdXJpdHkgYnVncyAoWFNTKSBieSBzYW5pdGl6aW5nXG4gKiB2YWx1ZXMgdG8gYmUgc2FmZSB0byB1c2UgaW4gdGhlIGRpZmZlcmVudCBET00gY29udGV4dHMuXG4gKlxuICogRm9yIGV4YW1wbGUsIHdoZW4gYmluZGluZyBhIFVSTCBpbiBhbiBgPGEgW2hyZWZdPVwic29tZVZhbHVlXCI+YCBoeXBlcmxpbmssIGBzb21lVmFsdWVgIHdpbGwgYmVcbiAqIHNhbml0aXplZCBzbyB0aGF0IGFuIGF0dGFja2VyIGNhbm5vdCBpbmplY3QgZS5nLiBhIGBqYXZhc2NyaXB0OmAgVVJMIHRoYXQgd291bGQgZXhlY3V0ZSBjb2RlIG9uXG4gKiB0aGUgd2Vic2l0ZS5cbiAqXG4gKiBJbiBzcGVjaWZpYyBzaXR1YXRpb25zLCBpdCBtaWdodCBiZSBuZWNlc3NhcnkgdG8gZGlzYWJsZSBzYW5pdGl6YXRpb24sIGZvciBleGFtcGxlIGlmIHRoZVxuICogYXBwbGljYXRpb24gZ2VudWluZWx5IG5lZWRzIHRvIHByb2R1Y2UgYSBgamF2YXNjcmlwdDpgIHN0eWxlIGxpbmsgd2l0aCBhIGR5bmFtaWMgdmFsdWUgaW4gaXQuXG4gKiBVc2VycyBjYW4gYnlwYXNzIHNlY3VyaXR5IGJ5IGNvbnN0cnVjdGluZyBhIHZhbHVlIHdpdGggb25lIG9mIHRoZSBgYnlwYXNzU2VjdXJpdHlUcnVzdC4uLmBcbiAqIG1ldGhvZHMsIGFuZCB0aGVuIGJpbmRpbmcgdG8gdGhhdCB2YWx1ZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVzZSBzaXR1YXRpb25zIHNob3VsZCBiZSB2ZXJ5IHJhcmUsIGFuZCBleHRyYW9yZGluYXJ5IGNhcmUgbXVzdCBiZSB0YWtlbiB0byBhdm9pZCBjcmVhdGluZyBhXG4gKiBDcm9zcyBTaXRlIFNjcmlwdGluZyAoWFNTKSBzZWN1cml0eSBidWchXG4gKlxuICogV2hlbiB1c2luZyBgYnlwYXNzU2VjdXJpdHlUcnVzdC4uLmAsIG1ha2Ugc3VyZSB0byBjYWxsIHRoZSBtZXRob2QgYXMgZWFybHkgYXMgcG9zc2libGUgYW5kIGFzXG4gKiBjbG9zZSBhcyBwb3NzaWJsZSB0byB0aGUgc291cmNlIG9mIHRoZSB2YWx1ZSwgdG8gbWFrZSBpdCBlYXN5IHRvIHZlcmlmeSBubyBzZWN1cml0eSBidWcgaXNcbiAqIGNyZWF0ZWQgYnkgaXRzIHVzZS5cbiAqXG4gKiBJdCBpcyBub3QgcmVxdWlyZWQgKGFuZCBub3QgcmVjb21tZW5kZWQpIHRvIGJ5cGFzcyBzZWN1cml0eSBpZiB0aGUgdmFsdWUgaXMgc2FmZSwgZS5nLiBhIFVSTCB0aGF0XG4gKiBkb2VzIG5vdCBzdGFydCB3aXRoIGEgc3VzcGljaW91cyBwcm90b2NvbCwgb3IgYW4gSFRNTCBzbmlwcGV0IHRoYXQgZG9lcyBub3QgY29udGFpbiBkYW5nZXJvdXNcbiAqIGNvZGUuIFRoZSBzYW5pdGl6ZXIgbGVhdmVzIHNhZmUgdmFsdWVzIGludGFjdC5cbiAqXG4gKiBAc2VjdXJpdHkgQ2FsbGluZyBhbnkgb2YgdGhlIGBieXBhc3NTZWN1cml0eVRydXN0Li4uYCBBUElzIGRpc2FibGVzIEFuZ3VsYXIncyBidWlsdC1pblxuICogc2FuaXRpemF0aW9uIGZvciB0aGUgdmFsdWUgcGFzc2VkIGluLiBDYXJlZnVsbHkgY2hlY2sgYW5kIGF1ZGl0IGFsbCB2YWx1ZXMgYW5kIGNvZGUgcGF0aHMgZ29pbmdcbiAqIGludG8gdGhpcyBjYWxsLiBNYWtlIHN1cmUgYW55IHVzZXIgZGF0YSBpcyBhcHByb3ByaWF0ZWx5IGVzY2FwZWQgZm9yIHRoaXMgc2VjdXJpdHkgY29udGV4dC5cbiAqIEZvciBtb3JlIGRldGFpbCwgc2VlIHRoZSBbU2VjdXJpdHkgR3VpZGVdKGh0dHBzOi8vZy5jby9uZy9zZWN1cml0eSkuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEb21TYW5pdGl6ZXJJbXBsKX0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tU2FuaXRpemVyIGltcGxlbWVudHMgU2FuaXRpemVyIHtcbiAgLyoqXG4gICAqIEdldHMgYSBzYWZlIHZhbHVlIGZyb20gZWl0aGVyIGEga25vd24gc2FmZSB2YWx1ZSBvciBhIHZhbHVlIHdpdGggdW5rbm93biBzYWZldHkuXG4gICAqXG4gICAqIElmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbHJlYWR5IGEgYFNhZmVWYWx1ZWAsIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHVud3JhcHBlZCB2YWx1ZS5cbiAgICogSWYgdGhlIHNlY3VyaXR5IGNvbnRleHQgaXMgSFRNTCBhbmQgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gc3RyaW5nLCB0aGlzIG1ldGhvZFxuICAgKiBzYW5pdGl6ZXMgdGhlIHN0cmluZywgcmVtb3ZpbmcgYW55IHBvdGVudGlhbGx5IHVuc2FmZSBjb250ZW50LlxuICAgKiBGb3IgYW55IG90aGVyIHNlY3VyaXR5IGNvbnRleHQsIHRoaXMgbWV0aG9kIHRocm93cyBhbiBlcnJvciBpZiBwcm92aWRlZFxuICAgKiB3aXRoIGEgcGxhaW4gc3RyaW5nLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2FuaXRpemUoY29udGV4dDogU2VjdXJpdHlDb250ZXh0LCB2YWx1ZTogU2FmZVZhbHVlfHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGw7XG5cbiAgLyoqXG4gICAqIEJ5cGFzcyBzZWN1cml0eSBhbmQgdHJ1c3QgdGhlIGdpdmVuIHZhbHVlIHRvIGJlIHNhZmUgSFRNTC4gT25seSB1c2UgdGhpcyB3aGVuIHRoZSBib3VuZCBIVE1MXG4gICAqIGlzIHVuc2FmZSAoZS5nLiBjb250YWlucyBgPHNjcmlwdD5gIHRhZ3MpIGFuZCB0aGUgY29kZSBzaG91bGQgYmUgZXhlY3V0ZWQuIFRoZSBzYW5pdGl6ZXIgd2lsbFxuICAgKiBsZWF2ZSBzYWZlIEhUTUwgaW50YWN0LCBzbyBpbiBtb3N0IHNpdHVhdGlvbnMgdGhpcyBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuICAgKlxuICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xuICAgKiBzZWN1cml0eSByaXNrcyFcbiAgICovXG4gIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlOiBzdHJpbmcpOiBTYWZlSHRtbDtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBzdHlsZSB2YWx1ZSAoQ1NTKS5cbiAgICpcbiAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcbiAgICogc2VjdXJpdHkgcmlza3MhXG4gICAqL1xuICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWU6IHN0cmluZyk6IFNhZmVTdHlsZTtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBKYXZhU2NyaXB0LlxuICAgKlxuICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xuICAgKiBzZWN1cml0eSByaXNrcyFcbiAgICovXG4gIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RTY3JpcHQodmFsdWU6IHN0cmluZyk6IFNhZmVTY3JpcHQ7XG5cbiAgLyoqXG4gICAqIEJ5cGFzcyBzZWN1cml0eSBhbmQgdHJ1c3QgdGhlIGdpdmVuIHZhbHVlIHRvIGJlIGEgc2FmZSBzdHlsZSBVUkwsIGkuZS4gYSB2YWx1ZSB0aGF0IGNhbiBiZSB1c2VkXG4gICAqIGluIGh5cGVybGlua3Mgb3IgYDxpbWcgc3JjPmAuXG4gICAqXG4gICAqICoqV0FSTklORzoqKiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggdW50cnVzdGVkIHVzZXIgZGF0YSBleHBvc2VzIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTXG4gICAqIHNlY3VyaXR5IHJpc2tzIVxuICAgKi9cbiAgYWJzdHJhY3QgYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVVybDtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgYSBzYWZlIHJlc291cmNlIFVSTCwgaS5lLiBhIGxvY2F0aW9uIHRoYXQgbWF5XG4gICAqIGJlIHVzZWQgdG8gbG9hZCBleGVjdXRhYmxlIGNvZGUgZnJvbSwgbGlrZSBgPHNjcmlwdCBzcmM+YCwgb3IgYDxpZnJhbWUgc3JjPmAuXG4gICAqXG4gICAqICoqV0FSTklORzoqKiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggdW50cnVzdGVkIHVzZXIgZGF0YSBleHBvc2VzIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTXG4gICAqIHNlY3VyaXR5IHJpc2tzIVxuICAgKi9cbiAgYWJzdHJhY3QgYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlOiBzdHJpbmcpOiBTYWZlUmVzb3VyY2VVcmw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21TYW5pdGl6ZXJJbXBsRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgcmV0dXJuIG5ldyBEb21TYW5pdGl6ZXJJbXBsKGluamVjdG9yLmdldChET0NVTUVOVCkpO1xufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnLCB1c2VGYWN0b3J5OiBkb21TYW5pdGl6ZXJJbXBsRmFjdG9yeSwgZGVwczogW0luamVjdG9yXX0pXG5leHBvcnQgY2xhc3MgRG9tU2FuaXRpemVySW1wbCBleHRlbmRzIERvbVNhbml0aXplciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIHNhbml0aXplKGN0eDogU2VjdXJpdHlDb250ZXh0LCB2YWx1ZTogU2FmZVZhbHVlfHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBzd2l0Y2ggKGN0eCkge1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuTk9ORTpcbiAgICAgICAgcmV0dXJuIHZhbHVlIGFzIHN0cmluZztcbiAgICAgIGNhc2UgU2VjdXJpdHlDb250ZXh0LkhUTUw6XG4gICAgICAgIGlmIChhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc09yVGhyb3codmFsdWUsIEJ5cGFzc1R5cGUuSHRtbCkpIHtcbiAgICAgICAgICByZXR1cm4gdW53cmFwU2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Nhbml0aXplSHRtbCh0aGlzLl9kb2MsIFN0cmluZyh2YWx1ZSkpLnRvU3RyaW5nKCk7XG4gICAgICBjYXNlIFNlY3VyaXR5Q29udGV4dC5TVFlMRTpcbiAgICAgICAgaWYgKGFsbG93U2FuaXRpemF0aW9uQnlwYXNzT3JUaHJvdyh2YWx1ZSwgQnlwYXNzVHlwZS5TdHlsZSkpIHtcbiAgICAgICAgICByZXR1cm4gdW53cmFwU2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuU0NSSVBUOlxuICAgICAgICBpZiAoYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NPclRocm93KHZhbHVlLCBCeXBhc3NUeXBlLlNjcmlwdCkpIHtcbiAgICAgICAgICByZXR1cm4gdW53cmFwU2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc2FmZSB2YWx1ZSB1c2VkIGluIGEgc2NyaXB0IGNvbnRleHQnKTtcbiAgICAgIGNhc2UgU2VjdXJpdHlDb250ZXh0LlVSTDpcbiAgICAgICAgaWYgKGFsbG93U2FuaXRpemF0aW9uQnlwYXNzT3JUaHJvdyh2YWx1ZSwgQnlwYXNzVHlwZS5VcmwpKSB7XG4gICAgICAgICAgcmV0dXJuIHVud3JhcFNhZmVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zYW5pdGl6ZVVybChTdHJpbmcodmFsdWUpKTtcbiAgICAgIGNhc2UgU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTDpcbiAgICAgICAgaWYgKGFsbG93U2FuaXRpemF0aW9uQnlwYXNzT3JUaHJvdyh2YWx1ZSwgQnlwYXNzVHlwZS5SZXNvdXJjZVVybCkpIHtcbiAgICAgICAgICByZXR1cm4gdW53cmFwU2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuc2FmZSB2YWx1ZSB1c2VkIGluIGEgcmVzb3VyY2UgVVJMIGNvbnRleHQgKHNlZSAke1hTU19TRUNVUklUWV9VUkx9KWApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIFNlY3VyaXR5Q29udGV4dCAke2N0eH0gKHNlZSAke1hTU19TRUNVUklUWV9VUkx9KWApO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlOiBzdHJpbmcpOiBTYWZlSHRtbCB7XG4gICAgcmV0dXJuIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cbiAgb3ZlcnJpZGUgYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbHVlOiBzdHJpbmcpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFN0eWxlKHZhbHVlKTtcbiAgfVxuICBvdmVycmlkZSBieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlOiBzdHJpbmcpOiBTYWZlU2NyaXB0IHtcbiAgICByZXR1cm4gYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTY3JpcHQodmFsdWUpO1xuICB9XG4gIG92ZXJyaWRlIGJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodmFsdWU6IHN0cmluZyk6IFNhZmVVcmwge1xuICAgIHJldHVybiBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFVybCh2YWx1ZSk7XG4gIH1cbiAgb3ZlcnJpZGUgYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlOiBzdHJpbmcpOiBTYWZlUmVzb3VyY2VVcmwge1xuICAgIHJldHVybiBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFJlc291cmNlVXJsKHZhbHVlKTtcbiAgfVxufVxuIl19