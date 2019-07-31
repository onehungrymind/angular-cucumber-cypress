import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { Project, ProjectsService } from '@workshop/core-data';
import { map } from 'rxjs/operators';

import {
  AddProject,
  DeleteProject,
  ProjectAdded,
  ProjectDeleted,
  ProjectsActionTypes,
  ProjectsLoaded,
  ProjectUpdated,
  LoadProjects,
  UpdateProject,
} from './projects.actions';
import { ProjectsState } from './projects.reducer';

@Injectable({providedIn: 'root'})
export class ProjectsEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(ProjectsActionTypes.ProjectsAction));

  @Effect()
  loadProjects$ = this.dataPersistence.fetch(ProjectsActionTypes.LoadProjects, {
    run: (action: LoadProjects, state: ProjectsState) => {
      return this.projectsService.all().pipe(map((res: Project[]) => new ProjectsLoaded(res)))
    },

    onError: (action: LoadProjects, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.AddProject, {
    run: (action: AddProject, state: ProjectsState) => {
      return this.projectsService.create(action.payload).pipe(map((res: Project) => new ProjectAdded(res)))
    },

    onError: (action: AddProject, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.UpdateProject, {
    run: (action: UpdateProject, state: ProjectsState) => {
      return this.projectsService.update(action.payload).pipe(map((res: Project) => new ProjectUpdated(res)))
    },

    onError: (action: UpdateProject, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.DeleteProject, {
    run: (action: DeleteProject, state: ProjectsState) => {
      return this.projectsService.delete(action.payload).pipe(map(_ => new ProjectDeleted(action.payload)))
    },

    onError: (action: DeleteProject, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectsState>,
    private projectsService: ProjectsService
  ) {}
}
