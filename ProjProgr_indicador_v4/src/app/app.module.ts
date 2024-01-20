import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ConfiguracoesComponent } from './componentes/configuracoes/configuracoes.component';
import { CuponsComponent } from './componentes/cupons/cupons.component';
import { EstatisticasComponent } from './componentes/estatisticas/estatisticas.component';
import { IndicadorDashboardComponent } from './componentes/indicador-dashboard/indicador-dashboard.component';
import { MediasComponent } from './componentes/medias/medias.component';
import { PagesComponent } from './componentes/pages/pages.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SidenavComponent, IndicadorDashboardComponent, ProdutosComponent, EstatisticasComponent, CuponsComponent, PagesComponent, MediasComponent, ConfiguracoesComponent],
  imports: [
    RouterLink,
    RouterLinkActive,
    OverlayModule,
    CdkMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
