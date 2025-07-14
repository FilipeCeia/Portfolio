
        let menuVisible = false;

        //Função que oculta ou mostra o menu
        function mostrarOcultarMenu(){
            if(menuVisible){
                document.getElementById("nav").classList ="";
                menuVisible = false;
            }else{
                document.getElementById("nav").classList ="responsive";
                menuVisible = true;
            }
        }

        function seleccionar(){
            //oculto o menu uma vez que selecciono uma opção
            document.getElementById("nav").classList = "";
            menuVisible = false;
        }

        //Função que aplica as animações das habilidades
        function efectoHabilidades(){
            var skills = document.getElementById("skills");
            var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
            if(distancia_skills >= 300){
                let habilidades = document.getElementsByClassName("progreso");
                
                // Array com todas as animações das habilidades organizadas por categoria
                let skillNames = [
                    // Frontend Frameworks
                    'nextjs', 'react', 'vue', 'angular',
                    // Backend Technologies
                    'nodejs', 'python', 'php', 'csharp',
                    // Mobile Development
                    'flutter', 'reactnative', 'pwa', 'ionic',
                    // Database & Storage
                    'mysql', 'mongodb', 'redis', 'firebase',
                    // Real-time & WebSockets
                    'socketio', 'websockets', 'sse', 'realtime',
                    // Authentication & Security
                    'jwt', 'auth0', 'csrf', 'ratelimit',
                    // Programming Paradigms
                    'oop', 'functional', 'patterns', 'solid',
                    // DevOps & Tools
                    'docker', 'git', 'ubuntu', 'cicd',
                    // APIs & Integration
                    'restapi', 'graphql', 'microservices', 'payment',
                    // Professional Skills
                    'lideranca', 'gestao', 'resolucao', 'comunicacao'
                ];
                
                // Aplicar animações para todas as habilidades
                for(let i = 0; i < habilidades.length && i < skillNames.length; i++) {
                    if(skillNames[i]) {
                        habilidades[i].classList.add(skillNames[i]);
                    }
                }
            }
        }

        //detecto o scrolling para aplicar a animação da barra de habilidades
        window.onscroll = function(){
            efectoHabilidades();
        }

        // Animação de entrada dos elementos
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observar seções para animação minha empre
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.contenido-seccion, .categoria, .projeto, .contacto-item');
            sections.forEach(section => observer.observe(section));
        });
    
