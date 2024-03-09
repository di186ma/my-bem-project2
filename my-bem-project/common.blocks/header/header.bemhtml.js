block('header').content()(function() {
    return[
        {
            block: 'wrapper',
            content: [
                {
                    block: 'header',
                    elem: 'up',
                    content: [
                        {
                            tag: 'a',
                            attrs:
                                {
                                    href: "#"
                                },
                            content:[
                                {
                                    tag: 'img',
                                    attrs:
                                        {
                                            src: 'img/socials.png',
                                            class: 'logo',
                                            alt: 'socials'
                                        }
                                }
                            ]

                        },
                        {
                            tag: 'form',
                            elem: 'form',
                            mix: {block: 'search-form'},
                            content: [
                                {
                                    tag: 'input',
                                    elem: 'search',
                                    attrs: {
                                        type: 'search',
                                        name: 'search'
                                    },
                                    mix: {block: 'search-form', elem: 'input'}
                                },
                                {
                                    tag: 'button',
                                    elem: 'button',
                                    mix: {block: 'button'},
                                    content:[
                                        "Поиск"
                                    ]
                                }
                            ]
                        },
                        {
                            tag: 'a',
                            elem: 'tel-icon',
                            mix: {block: 'link'},
                            attr: {
                                href: 'tel:+78005353535'
                            },
                            content: [
                                {
                                    tag: 'img',
                                    elem: 'icon',
                                    mix: {block: 'tel-icon'},
                                    attrs:{
                                        src: 'img/tel.png',
                                        alt: 'tel'
                                    }
                                }
                            ]
                        },
                        {
                            tag: 'a',
                            elem: 'tel-numb',
                            mix: {block: 'link'},
                            attrs:{
                                href: 'tel:+78005353535'
                            },
                            content: [
                                '+7 (800) 535-35-35'
                            ]
                        }
                    ]
                },
                {
                    block: 'header',
                    elem: 'down',
                    content: [
                        {
                            tag: 'ul',
                            elem: 'menu-list',
                            mix: {block: 'list-item'},
                            content: [
                                {
                                    tag: 'li',
                                    elem: 'menu-item',
                                    mix: {block: 'list-item'},
                                    content: [
                                        {
                                            tag: 'a',
                                            elem: 'link',
                                            mix: {block: 'link'},
                                            content:[
                                                'Новости'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: 'li',
                                    elem: 'menu-item',
                                    mix: {block: 'list-item'},
                                    content: [
                                        {
                                            tag: 'a',
                                            elem: 'link',
                                            mix: {block: 'link'},
                                            content:[
                                                'Общение'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: 'li',
                                    elem: 'menu-item',
                                    mix: {block: 'list-item'},
                                    content: [
                                        {
                                            tag: 'a',
                                            elem: 'link',
                                            mix: {block: 'link'},
                                            content:[
                                                'Помощь'
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]

        }
    ];
})
