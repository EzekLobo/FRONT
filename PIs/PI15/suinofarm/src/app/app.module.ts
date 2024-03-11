// Importe os módulos necessários
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Importe os seus componentes aqui
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { SuinoCadastroComponent } from './suino-cadastro/suino-cadastro.component';
import { SuinoListagemComponent } from './suino-listagem/suino-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlePesoComponent,
    EdicaoPesoComponent,
    SuinoCadastroComponent,
    SuinoListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }