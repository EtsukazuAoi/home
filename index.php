<!DOCTYPE html>
<html lang="fr">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- import html -->
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <div id="background"></div>
        <div id="navbar">
            <div id="logo">
                <img id="logopanda" src="./assets/img/PandaMor3ackV2.png" />
            </div>
            <div id="propos_nav" style="display: none;">
                <p id="mentionlegale" class="btn"></p>
            </div>
            <div class="navbarbtn btn" id="navbarbtn">
                <p></p>
            </div>
        </div>

        <h1 id="myproject">MES PROJECT</h1>
        <div id="project">
            <div class="projectL">
                <?php 
                    $arrFiles = scandir('./assets/project');
                    $project = array();
                    $maxl = 1;
                    foreach($arrFiles as $file)
                    {
                        if (!is_dir("./$file"))
                        {
                            if($maxl > 3){
                                $maxl = 1;
                                echo '</div><div class="projectL">';
                            }
                            echo '<div class="projectS btn" id="project_'.str_replace(".png", "", $file).'"><h3>'.str_replace(".png", "", $file).'</h3><img src="./assets/project/'.$file.'"></div>';
                            $project["project_".str_replace(".png", "", $file)] = str_replace(".png", "", $file);
                            $maxl = $maxl + 1;
                        }
                    }
                ?>
            </div>
        </div>
        <script type="text/javascript">
            const toggleDisplay = target => target.style.display = 
            (target.style.display == 'none') ?
                '' :
                'none';
             document.getElementById("navbarbtn").addEventListener("click", function(e) {
                 toggleDisplay(document.getElementById("propos_nav"));
             });
             document.getElementById("mentionlegale").addEventListener("click", function(e) {
                document.getElementById("conditions").style.display = "";
            });
            <?php
                // foreatch project for echo key and value
                foreach ($project as $key => $value) {
                    echo 'document.getElementById("'.$key.'").addEventListener("click", function(e) {
                        window.open("https://'.$value.'.pandatown.fr","_blank");
                    });';
                }

            ?>
        </script>
        <script type="text/javascript" src="conditions.js"></script>
    </body>
</html>