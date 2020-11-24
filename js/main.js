const templates={
    home:`
    <div id="home">
        <div class="row  justify-content-center  p-2 mr-0 mb-4 mt-4" >
            <div class=" col-12 col-lg-10 col-md-12 col-sm-12 " >
                <!--Carousel Wrapper-->
                <div id="carousel-thumb" class=" col-9 col-lg-9 col-md-9 col-sm-12 carousel slide carousel-fade carousel-thumbnails  mx-auto" data-ride="carousel">
                    <!--Slides-->
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img class="d-block w-100"  src="https://instagram.flpg1-1.fna.fbcdn.net/v/t51.2885-15/e35/c236.0.608.608a/121423310_118492979856810_8362715551321054932_n.jpg?_nc_ht=instagram.flpg1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0fiEyDtkocEAX8jnkEP&oh=bf4f9b03c9b5bfd83c98d856ed1a1684&oe=5FCC8537" height="360px"
                            alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100"  src='images/muffin.jpeg' height="360px"
                            alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100"  src='images/torta.jpeg' height="360px"
                            alt="Third slide">
                        </div>
                    </div>
                    <!--/.Slides-->
                    <!--Controls-->
                    <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <!--/.Controls-->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-thumb" data-slide-to="0" class="active">
                            <img src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg" width="100">
                        </li>
                        <li data-target="#carousel-thumb" data-slide-to="1">
                            <img src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" width="100">
                        </li>
                        <li data-target="#carousel-thumb" data-slide-to="2">
                            <img src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" width="100">
                        </li>
                    </ol>
                </div>
                <!--/.Carousel Wrapper-->
            </div>
        </div>

        <!-- Card -->
        <div class="row text-center m-0 " >
            <div class="card-content  col-11 col-lg-4 col-md-6 col-sm-12  mb-4 mx-auto"  v-for="todo in todos" >
                
                <div class="card booking-card ">

                    <!-- Card image -->
                    <div class="view overlay col-12 col-lg-12 col-md-10 col-sm-10 mx-auto ">
                        <a href="promo.html">
                            <img class="card-img-top" height="300px;" :src=todo.url :alt=todo.alt >
                        </a>
                        
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title font-weight-bold"><a>Dulces Flor</a></h4>
                        <!-- Data -->
                        <ul class="list-unstyled list-inline rating mb-0">
                            <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"> </i></li>
                            <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
                            <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
                            <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
                            <li class="list-inline-item"><i class="fas fa-star-half-alt amber-text"></i></li>
                            
                        </ul>
                        <!-- Text -->
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <hr class="my-4">
                        
                        <!-- Button -->
                        <a  v-on:click="view = 'promo'" class="btn btn-outline-info deep-purple-text p-1 mx-0 mb-0">Ver</a>

                    </div>

                </div>
                <!-- Card -->
            </div>
        </div>
      </div>  
        `,
    location:`
    <div id="location">
        <div class="text-center m-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52343.02542106066!2d-57.98818979668174!3d-34.92052327677525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1604586544895!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;max-width: 100%" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>    `,
    promo:`
    <div id="promo">
        <div class="row text-center m-4 p-2 card-content " >

        <div class="col-12 col-lg-4 col-md-6 col-sm-12 ">
            <img src="https://instagram.flpg1-1.fna.fbcdn.net/v/t51.2885-15/e35/c236.0.608.608a/121708333_4502548123152819_6438545991201558907_n.jpg?_nc_ht=instagram.flpg1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=_6iS2uQV6okAX_Sv-Dw&oh=ac14e7c1bd37fddab5ed2b0c543835fd&oe=5FC4EC2B" style="margin: 0 auto;" height="300px" alt="">
        </div>
        <div class="col-12 col-lg-8  col-md-6 col-sm-12">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto vero molestiae natus, accusantium, exercitationem necessitatibus ipsa ipsum voluptatem sunt ab ex enim porro est ut harum voluptatibus, eum nulla aperiam reiciendis excepturi consectetur magni. Nihil aspernatur hic itaque temporibus, labore alias deleniti eligendi iusto nisi. Eligendi, enim sint vel, atque molestias, quae repellat minima rerum ab quam dolor officia soluta temporibus. Ipsam libero et dolor ducimus cumque magni autem dolore. Ducimus aut expedita perspiciatis sunt doloremque magnam voluptates molestias officiis repellendus odio. Sequi non minima fugit aliquam facilis dolor odit, expedita rem numquam cumque, exercitationem quam quo maiores magni.</p>
        </div>
    
    </div>
    <div class="row text-center m-4 p-2 card-content " >

        <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img src="https://instagram.flpg1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.0.537.537a/122414953_2451770891792308_6665307401768669394_n.jpg?_nc_ht=instagram.flpg1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=7J-AFD1-y_YAX9j5KIX&oh=8e621f1467d6c55e889c41c80b40779f&oe=5FC6551E" style="margin: 0 auto;" height="300px" alt="">
        </div>
        <div class="col-12 col-lg-8  col-md-6 col-sm-12">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae qui sit ad commodi optio. Quisquam, laborum temporibus incidunt repudiandae natus provident eum officia numquam doloremque esse tempore nobis fugit, deserunt quos quo explicabo libero possimus iure voluptatem exercitationem quas. Eos voluptas deleniti placeat cumque soluta ex odio laboriosam nemo voluptate? Dicta, quo officia vel tenetur veniam maiores, alias modi unde delectus, maxime ea sed sit at quas esse voluptatem magnam ab rem ad? Asperiores perferendis cupiditate, vitae corrupti deserunt eveniet excepturi mollitia, eum voluptatem? Vel, nesciunt exercitationem nobis voluptas dignissimos sequi fugiat consequuntur at corporis, sapiente quidem molestiae rerum.</p>
        </div>
    
    </div>
   </div> `
    ,

}

var app=new Vue({
    el:"#app",
    data: {
        view : 'home',
    },
    components: {
        home: {
            data:function () {      
                return {
                    todos: [
                      { url: 'https://instagram.flpg1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/122708187_2499803643646250_3697017272747934706_n.jpg?_nc_ht=instagram.flpg1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=xvnuGjy1UOkAX89ozkh&_nc_tp=24&oh=3feb9208d78ec3607f8657b687b793fd&oe=5FC9D5E9' , alt:"brownie" },
                      { url: 'https://instagram.flpg1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/123008740_702400157074422_6833457852640997221_n.jpg?_nc_ht=instagram.flpg1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=xjbH0D0yVtwAX_vfS2C&_nc_tp=24&oh=005b76ac77e1c118b729d6401cf4d424&oe=5FCBA18F' , alt:"huevos" },
                      { url: 'images/lista/torta-21.jpeg' , alt:"torta-21" },
                      { url: 'images/lista/torta-85.jpeg' , alt:"torta-85" },
                      { url: 'https://instagram.flpg1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/121579325_190408275877588_4703904376821827249_n.jpg?_nc_ht=instagram.flpg1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=HrOKkxIN_0UAX8Wo5LU&oh=bfd59f0ef9cc41ed0df25ddde2127774&oe=5FC98CE8', alt:"galleta"},
                      { url: 'https://instagram.flpg1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.8.1080.1080a/s640x640/121512422_195983631924723_973417414367390507_n.jpg?_nc_ht=instagram.flpg1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=AYIr2fGaCV4AX_BsyRJ&oh=6ca011036a95c1384c99b24aa0dda98a&oe=5FCA2990', alt:"feliz"}
                    ],
        }},

            props: [],  //parametros
            template: templates.home
        },
         location: {
            props: [],
            template: templates.location
        },
         promo: {
            props: [],
            template: templates.promo
        }
        
    }
    
})