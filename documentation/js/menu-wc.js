'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tuyendung documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' : 'data-bs-target="#xs-controllers-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' :
                                            'id="xs-controllers-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' : 'data-bs-target="#xs-injectables-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' :
                                        'id="xs-injectables-links-module-AppModule-111638a95d7b035e1736c34ff79463d4e8c2ac4f51f0f0873537f5d8e9ed359bb5cc230558a11fc6a1ecdff847882e2782a31f34cb4951f649d2e5830f7ce928"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' :
                                            'id="xs-controllers-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' :
                                        'id="xs-injectables-links-module-AuthModule-e396c24f38ca4cdb63df1a722ded25c1b5a6eb1e2e1c00f7eea8bdaef7621832d05d467c41a77454d7737fe6b0534a1b4f3d4100b257919f0102a3e2b0e2ae76"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' :
                                            'id="xs-controllers-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' :
                                        'id="xs-injectables-links-module-CompaniesModule-ecb5d97fd08bdef6847f1898ad6fc2adb68513ed0f4e30f80d6c553d512816fecc1e3b21cb604c4938179ca2b0492c1d11d6f3bb409e922757d7914eb78bd216"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' :
                                            'id="xs-controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' :
                                        'id="xs-injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' :
                                            'id="xs-controllers-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' :
                                        'id="xs-injectables-links-module-FilesModule-5efe2643527b7daceb1e1418a560b27adec37d332f58285df685f250bfabb16630ead8df451cab56f5fd494f44411297575a4ec224d3a1c72e75816a8945fa26"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' :
                                            'id="xs-controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' :
                                        'id="xs-injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' :
                                            'id="xs-controllers-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' :
                                        'id="xs-injectables-links-module-PermissionsModule-11539dbe4b583aa4838599b0bfcfb3cc7da8db3cee2a4bd64d0e9354cde9401f0b12383131239039652b7b5031863b3d4ecc59c4cbdc4e0f929d261910782187"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' :
                                            'id="xs-controllers-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' :
                                        'id="xs-injectables-links-module-ResumesModule-1ad5abeb0057af51fc47e31b255ca2858167808119a44bd06a0804265326738e41035c7ebde5b92b587b68ea94813b5365fbf7900db910547db22f59349fba6f"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' :
                                            'id="xs-controllers-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' :
                                        'id="xs-injectables-links-module-RolesModule-2d8e8d0b0d03e4df3b6cad743b9e419279c3b1413b1b6b82375028d2e49e6ea880816c1f99b89f4331fdcfce7dd00b067d1010f1989a8fdcdd57f4748fcc2d4d"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' :
                                            'id="xs-controllers-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' :
                                        'id="xs-injectables-links-module-UsersModule-f0c850f3ad52bc98808fcde525a7f5e5cdf03afa9e1664d0d61819f15c522d42fdc6736315314c704b661d707465593e6a6a6d8dc5feb4813c046ec7ee9bff85"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedBy.html" data-type="entity-link" >UpdatedBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});