<!DOCTYPE html>
<html lang="es">
    <head>
        <title>richistron.com | Otro dude más en el interwebs</title>
        <meta charset="utf-8" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <meta name="description" content="El blog del richistron">
        <meta name="keywords" content="richistron">
        <meta name="author" content="Ricardo Rivas">
        <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="css/customized.min.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <!-- main nav -->
        <div class="navbar navbar-fixed-top">            
            <div class="navbar-inner">
                <a class="brand logo" href="#" title="richistron.com">
                    &nbsp;
                    <span>Richistron.com <small> | Otro dude más en el interwebs</small></span>
                </a>
                <ul class="nav pull-left" id="mainNav">                                            
                    <li class="active"><a href="#blog">Blog</a></li>
                    <li class=""><a href="#hg">HackerGarage</a></li>
                    <li class=""><a href="#bbhx">@bbhx</a></li>
                    <li class=""><a href="#gabo">Gabo</a></li>
                </ul>                
                <ul class="nav pull-right">
                    <li class="active goTop"><a class="goTop" href="#">Go top</a></li>                        
                </ul>                
            </div>            
        </div>
        <!-- body -->        
        <div class="container main">            
            <div class="row-fluid">                
                <div id="blog" class="rrs_R row-fluid">
                    <dl>
                        <dt>El blog del richistron</dt>
                        <dd><a href="http://blog.richistron.com/feeds/posts/default">richistron.com</a></dd>
                    </dl>
                </div>
                <div id="hg" class="rrs_R row-fluid">
                    <dl>
                        <dt>Hacker garage</dt>
                        <dd><a href="http://hackergarage.mx/index.php/blog/rss.html">hackergarage.mx</a></dd>
                    </dl>
                </div>                
                <div id="gabo" class="rrs_R row-fluid">
                    <dl>
                        <dt>Gabriel Saldaña</dt>
                        <dd><a href="http://feeds.feedburner.com/nethazard?format=xml">Gabriel</a></dd>
                    </dl>
                </div>
                <div id="bbhx" class="rrs_R row-fluid">
                    <dl>
                        <dt>Bacilio Briceño</dt>
                        <dd><a href="http://briceno.mx/feed/">BBHX</a></dd>
                    </dl>
                </div>                
            </div>
        </div>
        <!-- footer -->
        <div class="navbar navbar-fixed-bottom">            
            <div class="navbar-inner">                
                <a class="brand logo copyright" href="#" title="richistron.com">
                    &nbsp;
                    <span>Richistron.com | Beta
<!--                        <small> | Legal, privacidad y derechos </small>-->
                    </span>
                </a>
                <ul class="nav pull-right">
                    <li class="active goBot"><a class="goBot" href="#goBot">Go Bot</a></li>                        
                </ul>
            </div>            
        </div>
        <!-- javascript -->
        <script src="js/jquery.js"></script>
        <script src="js/feeds.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/front.min.js"></script>                    
        <script>            
            $(document).ready(function(){              
                $('.rrs_R').richistron();                
            });
        </script>
    </body>
</html>