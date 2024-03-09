block('footer').content()(function() {
    return[
        {
            block: 'wrapper',
            mix: {block: 'footer', elem: 'wrapper'},
            content: [
                {
                    block: 'footer',
                    elem: 'first',
                    content: [
                        {
                            tag: 'ul',
                            elem: 'column',
                            elemMods: {list: true},
                            mix: {block: 'list'},
                            content: [
                                {
                                    tag: 'li',
                                    elem: 'column',
                                    elemMods: {item: true},
                                    content: [
                                        {
                                            tag: 'a',
                                            block: 'link',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: [
                                                'Предложить новость'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: 'li',
                                    elem: 'column',
                                    elemMods: {item: true},
                                    content: [
                                        {
                                            tag: 'a',
                                            block: 'link',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: [
                                                'Поддержка'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: 'li',
                                    elem: 'column',
                                    elemMods: {item: true},
                                    content: [
                                        {
                                            tag: 'a',
                                            block: 'link',
                                            attrs: {
                                                href: 'tel:+78005353535'
                                            },
                                            content: [
                                                '+7 (800) 535-35-35'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'footer',
                    elem: 'second',
                    mix: {block: 'text', mods: {height: 'more'}},
                    content: [
                        {
                            tag: 'p',
                            elem: 'text',
                            content: [
                                'Ищем позитивных копирайтеров, улыбчивых контентмейкеров и friend-end разработчиков.'
                            ]
                        }
                    ]
                }
            ]
        }
    ];
})
