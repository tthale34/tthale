<?php
// Scan multiple directories for files with provided file extension,
$file_ext = array("jpg","bmp","png");
$dfiles = scanDir::scan('./design', $file_ext);
?>
<!--Portfolio-->
<div class="row">
    <div class=" col-xs-12 col-sm-12 ">
        <div id="col_inner_id-5eb6b660ec580" class="fw-col-inner" data-paddings="0px 0px 0px 0px">		
            <div class="block-title">
                <h2>Design & Websites</h2>
            </div>
            <div id="timeline-5eb6b660ec6d7" class="timeline clearfix">
                <?php for($i = 0; $i < count($dfiles); $i++):?>
                <div class="timeline-item clearfix">
                    <a href="<?php echo preg_replace('/\\\/','/',$dfiles[$i]);?>" class="lightbox">
                    <h5 class="item-period current">....</h5>
                    <img class="design_imgs" src="<?php echo preg_replace('/\\\/','/',$dfiles[$i]);?>">
                    <!--<h4 class="item-title">Freelance Developer</h4>-->
                    </a>
                </div>
                <?php endfor;?>
               <div class="timeline-item clearfix"></div>
            </div>
        </div>
    </div>
</div>
<!--/Portfolio-->