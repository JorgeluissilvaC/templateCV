 var arrLang={
                    'es':{
                        'ho': 'Inicio',
                        'ab': 'Acerca de',
                        'se': 'Servicios',
                        'po': 'Portafolio',
                        'co': 'Contáctenos',
                        'i':  'Yo Soy',
                        'sis': 'Ingeniero de Sistemas',
                        'gam' : 'Desarrollador de VideoJuegos',
                        'im': 'Yo Soy Yesid Hernández',
                        'siste': 'Ingeniero de Sistemas y Desarrollador de VideoJuegos',
                        'desc': 'Mi nombre es Yesid Hernández de Colombia, soy una persona, proactiva, honesta, con mucha calidad humana, capacitada para trabajar en equipo, generando un buen ambiente de trabajo, con el firme propósito de ser un profesional sobresaliente y dedicado a mis objetivos profesionales.',
                        'gd': 'Desarrollo de VideoJuegos (Photo Networking, Unet, Realidad Aumentada (RA), Realidad Virtual (VR) & Unity 3D).',
                        'md': 'Administrador de Base de Datos (Firebase & SQL Server).',
                        'wd': 'Desarrollo Web (API Rest, Apache, Xampp & PHP).',
                        'sd': 'Desarrollo de Software (Android & IOS Hybrid).',
                        'vc': 'Control de Versiones (Github, Bitbucket, Tortoise).',
                        'myser': 'Mis Servicios',
                        'awe': 'INCREÍBLE',
                        'deve': 'Desarrollo',
                        'ideve':'Desarrollamos tu APP a la medida.',
                        'wdes':'Diseño Web',
                        'ide':'Diseñamos la web de tu negocio a la medida.',
                        'supp':'Soporte',
                        'isupp':'Te acompaño en el Desarrollo de tu APP.',
                        'mywor': 'Mis Trabajos',
                        'lpro': 'ÚLTIMOS PROYECTOS',
                        'all':'TODOS',
                        'conct':'Contáctate',
                        'wme':'CONMIGO',
                        'sendm':'ENVIAR MENSAJE',
                        'corre':'Correo Electrónico',
                        'phon':'Teléfono',
                        'allr':'Todos los derechos reservados. Yesid Hernández'

                    },

                    'en':{
                        'ho': 'Home',
                        'ab': 'About',
                        'se': 'Services',
                        'po': 'Portfolio',
                        'co': 'Contact',
                        'i':  'I Am',
                        'sis': 'System Engineer',
                        'gam': 'Game Developer',
                        'im': 'I´m Yesid Hernández',
                        'siste': 'System Engineer & Game Developer',
                        'desc': 'My name is Yesid Hernández From Colombia. I´m a person proactive, honest, with a lot of human quality, trained to work as a team, generating a good work environment, with the firm purpose of being an outstanding professional and dedicated to my professional goals.',
                        'gd': 'Game Development (Photo Networking, Unet, Augmented Reality(RA), Virtual Reality(VR) & Unity 3D).',
                        'md': 'Management Database (Firebase & SQL Server).',
                        'wd': 'Web Development (API Rest, Apache, Xampp & PHP).',
                        'sd': 'Software Development (Android & IOS Hybrid).',
                        'vc': 'Version Control (Github, Bitbucket, Tortoise).',
                        'myser': 'My Services',
                        'awe': 'Awesome',
                        'deve': 'Developments',
                        'ideve':'I develop your website to your business tailor-made.',
                        'wdes':'Web Design',
                        'ide':'I develop your website to your business tailor-made.',
                        'supp':'Support',
                        'isupp':'I accompany you in the development of your product digital.',
                        'mywor':'My Works',
                        'all': 'ALL',
                        'conct':'Contact',
                        'wme':'With Me',
                        'sendm':'SEND MESSAGE',
                        'corre':'E-mail',
                        'phon':'Phone',
                        'allr':'All Rights Reserved. Yesid Hernández'


                    }

                };

                $(function(){
                    $('.translate').click(function(){
                        var lang = $(this).attr('id');
                        $('.lang').each(function(index,element){
                            $(this).text(arrLang[lang][$(this).attr('key')]);
                        });
                    });
                });