$(window).on('load', function(){
    const width = $(window).width();

    //スマホ画面におけるテキストスタイル最適化
    if(width < 750){
        $('.strengh_titleText__logic').html('非合理を排した' + '<br>' +'最高品質への献身');
        $('.strengh_titleText__freedom').html('美の型を否定する' + '<br>' +'自立した個性の哲学');
        $('.strengh_titleText__material').html('独占的な希少素材と' + '<br>' +'透明なサプライチェーン');

        $('.products_itemTitle').removeClass('products_itemTitle__r');
        $('.products_itemDescription').removeClass('products_itemDescription__r');
    }
    //スマホ画面におけるl-features内のタイトル文言最適化終了

    //loadingPage fadeOut   mainPage fadeIn 
    setTimeout(function() {
        $('.l-loadingPage').addClass('l-loadingPage__is-hidden');
        $('.l-loadingPage').attr("aria-hidden", "true");
        $('#body').css({
            'overflow-y': 'auto'
        })

        $('.l-mainPage').fadeIn(1500); 
        $('.l-mainPage').attr("aria-hidden", "false");
    },1500);
    //loadingPage fadeOut   mainPage fadeIn終了

    $(window).on('scroll', function(){
        const scrollTop = $(window).scrollTop();

        //ヘッダー表示制御アニメーション
        if(width < 750)/*スマホ用*/{
            //トップページ
                if(scrollTop > 300) {
                    $('.l-header').addClass('l-header__is-open');

                    $('.l-header').attr("aria-hidden", "false");

                }if(scrollTop > 500){
                    $('.nav__sp__toppage').css({
                        'background-color': 'transparent',
                        'box-shadow': 'none'
                    });

                }if(scrollTop <= 500){
                    $('.nav__sp__toppage').css({
                        'background-color': 'white',
                        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)'
                    });
                }
        }else/*PC用*/{
            //トップページ
                if (scrollTop > 500) {
                    $('.l-header').addClass('l-header__is-open');

                    $('.l-header').attr("aria-hidden", "false");
                }            
        }
        //ヘッダー表示アニメーション終了

        //スクロール表示アニメーション
        const windowHeight = jQuery(window).height();
        $('.subheadText').each(function() {
            const subheadTextTop = $(this).offset().top;

            if (scrollTop > subheadTextTop - windowHeight*.9) {
                $(this).addClass('subheadText__is-open');
                $(this).attr("aria-hidden", "false");
            } 
        });

        $('.products_itemText').each(function() {
            const productsItemTextTop = $(this).offset().top;

            if (scrollTop > productsItemTextTop - windowHeight*.9) {
                $(this).addClass('products_itemText__is-open');
                $(this).attr("aria-hidden", "false");
            } 
        });
        //スクロール表示アニメーション終了

        //パララックスアニメーション
        const $target = $('.strengh_text');
        const $parentLogic = $('.features_strengh__logic');
        const $parentFreedom = $('.features_strengh__freedom');
        const $parentMaterial = $('.features_strengh__material');
        
        const logicTop = $parentLogic.offset().top;
        const logicHeight = $parentLogic.outerHeight();
        const freedomHeight = $parentFreedom.outerHeight();
        const materialHeight = $parentMaterial.outerHeight();

        const targetHeight = $target.outerHeight();

        const endFixed = logicTop + logicHeight + freedomHeight + materialHeight - targetHeight;
        const firstTurn = logicTop + logicHeight - targetHeight;
        const secoundTurn = logicTop + logicHeight + freedomHeight - targetHeight;

        if(scrollTop < logicTop){
            if($target.hasClass('strengh_text__is-proceed')){
                $target.removeClass('strengh_text__is-end');
                $target.removeClass('strengh_text__is-fixed');
            };
        }else if (logicTop <= scrollTop && scrollTop < endFixed){
            if($target.hasClass('strengh_text__is-end')){
                $target.removeClass('strengh_text__is-end');
            }
            $target.addClass('strengh_text__is-fixed');

            if(logicTop <= scrollTop && scrollTop < firstTurn){
                if($('.strengh_text').hasClass('strengh_text__is-proceed')){
                    const $elementsToFadeOutLogic = $('.strengh_titleText__freedom, .strengh_desc__freedom, .strengh_titleText__material, .strengh_desc__material');

                    $elementsToFadeOutLogic.stop(true, true).fadeOut(200).attr("aria-hidden", "true").promise().done(function(){
                        const $elementsToFadeInLogic = $('.strengh_desc__logic, .strengh_titleText__logic');
                        $elementsToFadeInLogic.fadeIn(200).attr("aria-hidden", "false");
                    });
                }
            }else if(firstTurn <= scrollTop && scrollTop < secoundTurn){
                const $elementsToFadeOutFreedom = $('.strengh_titleText__logic, .strengh_desc__logic, .strengh_titleText__material, .strengh_desc__material');
                $elementsToFadeOutFreedom.stop(true, true).fadeOut(200).attr("aria-hidden", "true").promise().done(function(){
                    const $elementsToFadeInFreedom = $('.strengh_desc__freedom, .strengh_titleText__freedom');
                    $elementsToFadeInFreedom.fadeIn(200).attr("aria-hidden", "false");
                });
                if(!$('.strengh_text').hasClass('strengh_text__is-proceed')){
                    $('.strengh_text').addClass('strengh_text__is-proceed');
                };
            }else if(secoundTurn <= scrollTop && scrollTop < endFixed){
                const $elementsToFadeOutMaterial = $('.strengh_titleText__logic, .strengh_desc__logic, .strengh_titleText__freedom, .strengh_desc__freedom');
                $elementsToFadeOutMaterial.stop(true, true).fadeOut(200).attr("aria-hidden", "true").promise().done(function(){
                    const $elementsToFadeInMaterial = $('.strengh_desc__material, .strengh_titleText__material');
                    $elementsToFadeInMaterial.fadeIn(200).attr("aria-hidden", "false");
                });
                if(!$('.strengh_text').hasClass('strengh_text__is-proceed')){
                    $('.strengh_text').addClass('strengh_text__is-proceed');
                };
            }
        }else if(endFixed <= scrollTop){
            if($target.hasClass('strengh_text__is-fixed')){
                $target.removeClass('strengh_text__is-fixed');
            }
            $target.addClass('strengh_text__is-end')
        }
    })
    //パララックスアニメーション終了

    //キーボードフォーカスヘッダー展開引火
    $('.headerOpenSwitch').keydown(
        function(){
            $('.l-header').addClass('l-header__is-open');
            $('.l-header').attr("aria-hidden", "false");
        }
    ).blur(
        function(){
            $(this).css({
                'display': 'none'
            });
        }
    )
    //キーボードフォーカスヘッダー展開引火終了

    //フォーカス・クリックによる各種class属性変化
    $('.container__hamburger').click(
        function(){
            $('.line1').addClass('line1__is-active');
            $('.line2').addClass('line2__is-active');
            $('.line3').addClass('line3__is-active');
            $('.navSp_dropdown').addClass('navSp_dropdown__is-open');

            $(this).attr("aria-expanded", "false");
            $('.navSp_dropdown').attr("aria-hidden", "false");
        }
    );
    $('.container__hamburger').keydown(
        function(){
            $('.line1').addClass('line1__is-active');
            $('.line2').addClass('line2__is-active');
            $('.line3').addClass('line3__is-active');
            $('.navSp_dropdown').addClass('navSp_dropdown__is-open');

            $(this).attr("aria-expanded", "false");
            $('.navSp_dropdown').attr("aria-hidden", "false");
        }
    );

    $('.dropdown_itemText__close').click(
        function(){
            $('.line1').removeClass('line1__is-active');
            $('.line2').removeClass('line2__is-active');
            $('.line3').removeClass('line3__is-active');
            $('.navSp_dropdown').removeClass('navSp_dropdown__is-open');

            $('.container__hamburger').attr("aria-expanded", "true");
            $('.navSp_dropdown').attr("aria-hidden", "true");
        }
    );
    $('.dropdown_itemText__close').keydown(
        function(){
            $('.line1').removeClass('line1__is-active');
            $('.line2').removeClass('line2__is-active');
            $('.line3').removeClass('line3__is-active');
            $('.navSp_dropdown').removeClass('navSp_dropdown__is-open');
        }
    );

    $('.navSp_contact').click(
        function(){
            $(this).css({
                'transform': 'scale(1.1)',
                'transition': 'transform .2s'
            });
            setTimeout(() => {
                $(this).css({
                    'transform': 'scale(1)',
                    'transition': 'transform .2s'
            });
        }, 1000);
    });

    $('.dropdown_item').click(
        function(){
            jQuery(this).css({
                'transform': 'scale(1.1)',
                'transition': 'transform .2s'
            });
            setTimeout(() => {
                $(this).css({
                    'transform': 'scale(1)',
                    'transition': 'transform .2s'
                });
        }, 1000);
    });
    //フォーカス・クリックによる各種class属性変化等終了
})








