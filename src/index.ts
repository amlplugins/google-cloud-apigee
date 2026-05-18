/**
 * @amlplugins/google-cloud-apigee
 *
 * Thin namespaced re-export of the native @google-cloud/apigee-registry SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Apigee Registry.
 */

import * as _sdk from "@google-cloud/apigee-registry";
export * from "@google-cloud/apigee-registry";
export { _sdk as sdk };
export default _sdk;
