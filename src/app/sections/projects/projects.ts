import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { PROJECTS, Project } from '../../core/data/projects';
import { I18nService } from '../../core/i18n/i18n.service';
import { ProjectModal } from '../../shared/project-modal/project-modal';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-projects',
  imports: [Reveal, ProjectModal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly projects = PROJECTS;

  private readonly _activeProject = signal<Project | null>(null);
  protected readonly activeProject = this._activeProject.asReadonly();

  /** Guardado para devolver o foco ao botão que abriu o modal. */
  private trigger: HTMLElement | null = null;

  protected open(project: Project, trigger: HTMLElement): void {
    this.trigger = trigger;
    this._activeProject.set(project);
  }

  protected close(): void {
    this._activeProject.set(null);
    this.trigger?.focus();
    this.trigger = null;
  }
}
