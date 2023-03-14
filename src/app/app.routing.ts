import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR MODULOS COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';

//ARRAY DE RUTAS
const appRoutes: Routes = [

    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'createproject', component: CreateComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'proyecto/:id', component: DetailComponent },
    { path: '#ComponentExperience', component: AboutComponent },
    { path: '#ComponentSkills', component: AboutComponent },
    { path: '#ComponentContacto', component: AboutComponent },
    { path: '**', component: AboutComponent }
];

//exports
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
