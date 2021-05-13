##Padrão middleware

o padrão chain of responsability(ou middleware) é bastante utilizado com o node pois o
principal framework dele é baseado nesse padrão

imagine que exista um processo A sendo resolvido com apenas uma função
dentro dessa função existem 3 passos distintos 
imagine que cada um desses passos poderiam ser reutilizados em outros pontos do código
podemos refatorar esse código de uma forma em que o processo A passa 
de uma única função para uma cadeia de 3 funções, cada uma responsavel
por um dos passos, sendo todas elas encadeadas gerando um acoplamento
(dependencia) entre elas, o passso A pode ser reusado mas o passo B 
será o proximo e em seguida o C mantendo uma amarração entre eles

no padrão middleware funciona dessa maneira mas não existe uma amarração
especifica sobre a sequencia de passos, quem "conhece" a sequencia é
a cadeia e não os passos, eles são independentes entre si, um passo 
receberá uma função como parametro que será responsavel por disparar 
o proximo passo, tirando essa responsabilidade que antes era do proprio passo

