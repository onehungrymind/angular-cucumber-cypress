import { Component, OnInit } from '@angular/core';
import { Project, Customer } from '@demo/core-data';
import { Observable } from 'rxjs';
import { ProjectsFacade, CustomersFacade } from '@demo/core-state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  customers$: Observable<Customer[]> = this.customersFacade.allCustomers$;
  projects$: Observable<Project[]> = this.projectsFacade.allProjects$;
  currentProject$: Observable<Project> = this.projectsFacade.currentProject$;

  constructor(
    private projectsFacade: ProjectsFacade,
    private customersFacade: CustomersFacade
  ) { }

  ngOnInit() {
    this.customersFacade.loadCustomers();
    this.projectsFacade.loadProjects();
    this.projectsFacade.mutations$.subscribe(_ => this.resetCurrentProject());
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.selectProject({id: null});
  }

  selectProject(project) {
    this.projectsFacade.selectProject(project.id);
  }

  saveProject(project) {
    if (!project.id) {
      this.projectsFacade.addProject(project);
    } else {
      this.projectsFacade.updateProject(project);
    }
  }

  deleteProject(project) {
    this.projectsFacade.deleteProject(project);
  }
}

