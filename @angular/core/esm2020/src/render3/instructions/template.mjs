/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertFirstCreatePass } from '../assert';
import { attachPatchData } from '../context_discovery';
import { registerPostOrderHooks } from '../hooks';
import { isDirectiveHost } from '../interfaces/type_checks';
import { HEADER_OFFSET, RENDERER } from '../interfaces/view';
import { appendChild } from '../node_manipulation';
import { getLView, getTView, setCurrentTNode } from '../state';
import { getConstant } from '../util/view_utils';
import { addToViewTree, createDirectivesInstances, createLContainer, createTView, getOrCreateTNode, resolveDirectives, saveResolvedLocalsInData } from './shared';
function templateFirstCreatePass(index, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) {
    ngDevMode && assertFirstCreatePass(tView);
    ngDevMode && ngDevMode.firstCreatePass++;
    const tViewConsts = tView.consts;
    // TODO(pk): refactor getOrCreateTNode to have the "create" only version
    const tNode = getOrCreateTNode(tView, index, 4 /* TNodeType.Container */, tagName || null, getConstant(tViewConsts, attrsIndex));
    resolveDirectives(tView, lView, tNode, getConstant(tViewConsts, localRefsIndex));
    registerPostOrderHooks(tView, tNode);
    const embeddedTView = tNode.tViews = createTView(2 /* TViewType.Embedded */, tNode, templateFn, decls, vars, tView.directiveRegistry, tView.pipeRegistry, null, tView.schemas, tViewConsts);
    if (tView.queries !== null) {
        tView.queries.template(tView, tNode);
        embeddedTView.queries = tView.queries.embeddedTView(tNode);
    }
    return tNode;
}
/**
 * Creates an LContainer for an ng-template (dynamically-inserted view), e.g.
 *
 * <ng-template #foo>
 *    <div></div>
 * </ng-template>
 *
 * @param index The index of the container in the data array
 * @param templateFn Inline template
 * @param decls The number of nodes, local refs, and pipes for this template
 * @param vars The number of bindings for this template
 * @param tagName The name of the container element, if applicable
 * @param attrsIndex Index of template attributes in the `consts` array.
 * @param localRefs Index of the local references in the `consts` array.
 * @param localRefExtractor A function which extracts local-refs values from the template.
 *        Defaults to the current element associated with the local-ref.
 *
 * @codeGenApi
 */
export function ɵɵtemplate(index, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex, localRefExtractor) {
    const lView = getLView();
    const tView = getTView();
    const adjustedIndex = index + HEADER_OFFSET;
    const tNode = tView.firstCreatePass ? templateFirstCreatePass(adjustedIndex, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) :
        tView.data[adjustedIndex];
    setCurrentTNode(tNode, false);
    const comment = lView[RENDERER].createComment(ngDevMode ? 'container' : '');
    appendChild(tView, lView, comment, tNode);
    attachPatchData(comment, lView);
    addToViewTree(lView, lView[adjustedIndex] = createLContainer(comment, lView, comment, tNode));
    if (isDirectiveHost(tNode)) {
        createDirectivesInstances(tView, lView, tNode);
    }
    if (localRefsIndex != null) {
        saveResolvedLocalsInData(lView, tNode, localRefExtractor);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy90ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUdoRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBUyxRQUFRLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDcEYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUM3RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFJaEssU0FBUyx1QkFBdUIsQ0FDNUIsS0FBYSxFQUFFLEtBQVksRUFBRSxLQUFZLEVBQUUsVUFBdUMsRUFDbEYsS0FBYSxFQUFFLElBQVksRUFBRSxPQUFxQixFQUFFLFVBQXdCLEVBQzVFLGNBQTRCO0lBQzlCLFNBQVMsSUFBSSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxTQUFTLElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakMsd0VBQXdFO0lBQ3hFLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixDQUMxQixLQUFLLEVBQUUsS0FBSywrQkFBdUIsT0FBTyxJQUFJLElBQUksRUFDbEQsV0FBVyxDQUFjLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXZELGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBVyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRixzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFckMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLDZCQUN4QixLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUMzRSxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTFELElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FDdEIsS0FBYSxFQUFFLFVBQXVDLEVBQUUsS0FBYSxFQUFFLElBQVksRUFDbkYsT0FBcUIsRUFBRSxVQUF3QixFQUFFLGNBQTRCLEVBQzdFLGlCQUFxQztJQUN2QyxNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUN6QixNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUN6QixNQUFNLGFBQWEsR0FBRyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBRTVDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUNuQixhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFtQixDQUFDO0lBQ2xGLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFOUIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUUsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUU5RixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQix5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFO1FBQzFCLHdCQUF3QixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztLQUMzRDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7YXNzZXJ0Rmlyc3RDcmVhdGVQYXNzfSBmcm9tICcuLi9hc3NlcnQnO1xuaW1wb3J0IHthdHRhY2hQYXRjaERhdGF9IGZyb20gJy4uL2NvbnRleHRfZGlzY292ZXJ5JztcbmltcG9ydCB7cmVnaXN0ZXJQb3N0T3JkZXJIb29rc30gZnJvbSAnLi4vaG9va3MnO1xuaW1wb3J0IHtDb21wb25lbnRUZW1wbGF0ZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7TG9jYWxSZWZFeHRyYWN0b3IsIFRBdHRyaWJ1dGVzLCBUQ29udGFpbmVyTm9kZSwgVE5vZGVUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtpc0RpcmVjdGl2ZUhvc3R9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwZV9jaGVja3MnO1xuaW1wb3J0IHtIRUFERVJfT0ZGU0VULCBMVmlldywgUkVOREVSRVIsIFRWaWV3LCBUVmlld1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2FwcGVuZENoaWxkfSBmcm9tICcuLi9ub2RlX21hbmlwdWxhdGlvbic7XG5pbXBvcnQge2dldExWaWV3LCBnZXRUVmlldywgc2V0Q3VycmVudFROb2RlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge2dldENvbnN0YW50fSBmcm9tICcuLi91dGlsL3ZpZXdfdXRpbHMnO1xuaW1wb3J0IHthZGRUb1ZpZXdUcmVlLCBjcmVhdGVEaXJlY3RpdmVzSW5zdGFuY2VzLCBjcmVhdGVMQ29udGFpbmVyLCBjcmVhdGVUVmlldywgZ2V0T3JDcmVhdGVUTm9kZSwgcmVzb2x2ZURpcmVjdGl2ZXMsIHNhdmVSZXNvbHZlZExvY2Fsc0luRGF0YX0gZnJvbSAnLi9zaGFyZWQnO1xuXG5cblxuZnVuY3Rpb24gdGVtcGxhdGVGaXJzdENyZWF0ZVBhc3MoXG4gICAgaW5kZXg6IG51bWJlciwgdFZpZXc6IFRWaWV3LCBsVmlldzogTFZpZXcsIHRlbXBsYXRlRm46IENvbXBvbmVudFRlbXBsYXRlPGFueT58bnVsbCxcbiAgICBkZWNsczogbnVtYmVyLCB2YXJzOiBudW1iZXIsIHRhZ05hbWU/OiBzdHJpbmd8bnVsbCwgYXR0cnNJbmRleD86IG51bWJlcnxudWxsLFxuICAgIGxvY2FsUmVmc0luZGV4PzogbnVtYmVyfG51bGwpOiBUQ29udGFpbmVyTm9kZSB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRGaXJzdENyZWF0ZVBhc3ModFZpZXcpO1xuICBuZ0Rldk1vZGUgJiYgbmdEZXZNb2RlLmZpcnN0Q3JlYXRlUGFzcysrO1xuICBjb25zdCB0Vmlld0NvbnN0cyA9IHRWaWV3LmNvbnN0cztcbiAgLy8gVE9ETyhwayk6IHJlZmFjdG9yIGdldE9yQ3JlYXRlVE5vZGUgdG8gaGF2ZSB0aGUgXCJjcmVhdGVcIiBvbmx5IHZlcnNpb25cbiAgY29uc3QgdE5vZGUgPSBnZXRPckNyZWF0ZVROb2RlKFxuICAgICAgdFZpZXcsIGluZGV4LCBUTm9kZVR5cGUuQ29udGFpbmVyLCB0YWdOYW1lIHx8IG51bGwsXG4gICAgICBnZXRDb25zdGFudDxUQXR0cmlidXRlcz4odFZpZXdDb25zdHMsIGF0dHJzSW5kZXgpKTtcblxuICByZXNvbHZlRGlyZWN0aXZlcyh0VmlldywgbFZpZXcsIHROb2RlLCBnZXRDb25zdGFudDxzdHJpbmdbXT4odFZpZXdDb25zdHMsIGxvY2FsUmVmc0luZGV4KSk7XG4gIHJlZ2lzdGVyUG9zdE9yZGVySG9va3ModFZpZXcsIHROb2RlKTtcblxuICBjb25zdCBlbWJlZGRlZFRWaWV3ID0gdE5vZGUudFZpZXdzID0gY3JlYXRlVFZpZXcoXG4gICAgICBUVmlld1R5cGUuRW1iZWRkZWQsIHROb2RlLCB0ZW1wbGF0ZUZuLCBkZWNscywgdmFycywgdFZpZXcuZGlyZWN0aXZlUmVnaXN0cnksXG4gICAgICB0Vmlldy5waXBlUmVnaXN0cnksIG51bGwsIHRWaWV3LnNjaGVtYXMsIHRWaWV3Q29uc3RzKTtcblxuICBpZiAodFZpZXcucXVlcmllcyAhPT0gbnVsbCkge1xuICAgIHRWaWV3LnF1ZXJpZXMudGVtcGxhdGUodFZpZXcsIHROb2RlKTtcbiAgICBlbWJlZGRlZFRWaWV3LnF1ZXJpZXMgPSB0Vmlldy5xdWVyaWVzLmVtYmVkZGVkVFZpZXcodE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHROb2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gTENvbnRhaW5lciBmb3IgYW4gbmctdGVtcGxhdGUgKGR5bmFtaWNhbGx5LWluc2VydGVkIHZpZXcpLCBlLmcuXG4gKlxuICogPG5nLXRlbXBsYXRlICNmb28+XG4gKiAgICA8ZGl2PjwvZGl2PlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqXG4gKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjb250YWluZXIgaW4gdGhlIGRhdGEgYXJyYXlcbiAqIEBwYXJhbSB0ZW1wbGF0ZUZuIElubGluZSB0ZW1wbGF0ZVxuICogQHBhcmFtIGRlY2xzIFRoZSBudW1iZXIgb2Ygbm9kZXMsIGxvY2FsIHJlZnMsIGFuZCBwaXBlcyBmb3IgdGhpcyB0ZW1wbGF0ZVxuICogQHBhcmFtIHZhcnMgVGhlIG51bWJlciBvZiBiaW5kaW5ncyBmb3IgdGhpcyB0ZW1wbGF0ZVxuICogQHBhcmFtIHRhZ05hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50LCBpZiBhcHBsaWNhYmxlXG4gKiBAcGFyYW0gYXR0cnNJbmRleCBJbmRleCBvZiB0ZW1wbGF0ZSBhdHRyaWJ1dGVzIGluIHRoZSBgY29uc3RzYCBhcnJheS5cbiAqIEBwYXJhbSBsb2NhbFJlZnMgSW5kZXggb2YgdGhlIGxvY2FsIHJlZmVyZW5jZXMgaW4gdGhlIGBjb25zdHNgIGFycmF5LlxuICogQHBhcmFtIGxvY2FsUmVmRXh0cmFjdG9yIEEgZnVuY3Rpb24gd2hpY2ggZXh0cmFjdHMgbG9jYWwtcmVmcyB2YWx1ZXMgZnJvbSB0aGUgdGVtcGxhdGUuXG4gKiAgICAgICAgRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGxvY2FsLXJlZi5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXRlbXBsYXRlKFxuICAgIGluZGV4OiBudW1iZXIsIHRlbXBsYXRlRm46IENvbXBvbmVudFRlbXBsYXRlPGFueT58bnVsbCwgZGVjbHM6IG51bWJlciwgdmFyczogbnVtYmVyLFxuICAgIHRhZ05hbWU/OiBzdHJpbmd8bnVsbCwgYXR0cnNJbmRleD86IG51bWJlcnxudWxsLCBsb2NhbFJlZnNJbmRleD86IG51bWJlcnxudWxsLFxuICAgIGxvY2FsUmVmRXh0cmFjdG9yPzogTG9jYWxSZWZFeHRyYWN0b3IpIHtcbiAgY29uc3QgbFZpZXcgPSBnZXRMVmlldygpO1xuICBjb25zdCB0VmlldyA9IGdldFRWaWV3KCk7XG4gIGNvbnN0IGFkanVzdGVkSW5kZXggPSBpbmRleCArIEhFQURFUl9PRkZTRVQ7XG5cbiAgY29uc3QgdE5vZGUgPSB0Vmlldy5maXJzdENyZWF0ZVBhc3MgPyB0ZW1wbGF0ZUZpcnN0Q3JlYXRlUGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCwgdFZpZXcsIGxWaWV3LCB0ZW1wbGF0ZUZuLCBkZWNscywgdmFycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSwgYXR0cnNJbmRleCwgbG9jYWxSZWZzSW5kZXgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Vmlldy5kYXRhW2FkanVzdGVkSW5kZXhdIGFzIFRDb250YWluZXJOb2RlO1xuICBzZXRDdXJyZW50VE5vZGUodE5vZGUsIGZhbHNlKTtcblxuICBjb25zdCBjb21tZW50ID0gbFZpZXdbUkVOREVSRVJdLmNyZWF0ZUNvbW1lbnQobmdEZXZNb2RlID8gJ2NvbnRhaW5lcicgOiAnJyk7XG4gIGFwcGVuZENoaWxkKHRWaWV3LCBsVmlldywgY29tbWVudCwgdE5vZGUpO1xuICBhdHRhY2hQYXRjaERhdGEoY29tbWVudCwgbFZpZXcpO1xuXG4gIGFkZFRvVmlld1RyZWUobFZpZXcsIGxWaWV3W2FkanVzdGVkSW5kZXhdID0gY3JlYXRlTENvbnRhaW5lcihjb21tZW50LCBsVmlldywgY29tbWVudCwgdE5vZGUpKTtcblxuICBpZiAoaXNEaXJlY3RpdmVIb3N0KHROb2RlKSkge1xuICAgIGNyZWF0ZURpcmVjdGl2ZXNJbnN0YW5jZXModFZpZXcsIGxWaWV3LCB0Tm9kZSk7XG4gIH1cblxuICBpZiAobG9jYWxSZWZzSW5kZXggIT0gbnVsbCkge1xuICAgIHNhdmVSZXNvbHZlZExvY2Fsc0luRGF0YShsVmlldywgdE5vZGUsIGxvY2FsUmVmRXh0cmFjdG9yKTtcbiAgfVxufVxuIl19