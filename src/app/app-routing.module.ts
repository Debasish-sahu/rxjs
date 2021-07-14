import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { MergeComponent } from './merge/merge.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SharereplayComponent } from './sharereplay/sharereplay.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { SwitchmapappComponent } from './switchmapapp/switchmapapp.component';
import { ZipForkjoinComponent } from './zip-forkjoin/zip-forkjoin.component';


const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObservableComponent, children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debouncetime', component: DebouncetimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergemap', component: MergemapComponent },
      { path: 'concatmap', component: ConcatmapComponent },
      { path: 'switchmap', component: SwitchmapComponent },
      { path: 'switchmapapp', component: SwitchmapappComponent },
      { path: 'exhaustmap', component: ExhaustmapComponent },
      { path: 'sharereplay', component: SharereplayComponent },
      { path: 'combinelatest', component: CombinelatestComponent },
      { path: 'zip-forkjoin', component: ZipForkjoinComponent }
    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
