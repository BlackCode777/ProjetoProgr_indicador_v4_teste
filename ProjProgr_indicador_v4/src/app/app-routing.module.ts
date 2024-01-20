import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracoesComponent } from './componentes/configuracoes/configuracoes.component';
import { CuponsComponent } from './componentes/cupons/cupons.component';
import { EstatisticasComponent } from './componentes/estatisticas/estatisticas.component';
import { IndicadorDashboardComponent } from './componentes/indicador-dashboard/indicador-dashboard.component';
import { MediasComponent } from './componentes/medias/medias.component';
import { PagesComponent } from './componentes/pages/pages.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: IndicadorDashboardComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cupons', component: CuponsComponent },
  { path: 'estatisticas', component: EstatisticasComponent },
  { path: 'medias', component: MediasComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
