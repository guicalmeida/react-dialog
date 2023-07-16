# Desafio Lemon Energia - Componente Dialog

Este projeto implementa um componente de dialog desenvolvido com React, Vite, Styled Components e Vitest para os testes. O componente Dialog foi concebido para funcionar em telas de celular, não sendo pensado para outros breakpoints, conforme o detalhamento do desafio. Ele fornece uma sobreposição modal com duas camadas: uma cobre toda a tela e impede a interação com o conteúdo oculto, e a outra camada exibe o conteúdo.





## Instalação

Para instalar o projeto e suas dependências, siga estes passos:

1. Clone o repositório:

   ```bash
   git clone <repository-url>
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd lemon-dialog
   ```

3. Instale as dependências usando o npm:

   ```bash
   npm install
   ```

## Uso

Para utilizar o componente Dialog, siga estes passos:

1. Importe o componente Dialog para seu arquivo:

   ```jsx
   import Dialog from './components/Dialog';
   ```

2. Utilize o componente Dialog em seu código:

   ```jsx
   const [isOpen, setIsOpen] = useState(false);

   const handleClose = () => {
     setIsOpen(false);
   };

   // ...

   <Dialog
     isOpen={isOpen}
     onClose={handleClose}
     title="Meu dialog"
     closeOnOverlayClick={true}
   >
     {/* Conteúdo vai aqui */}
   </Dialog>
   ```

   Certifique-se de criar um estado (`isOpen`) para controlar a abertura e fechamento do Dialog. A função `handleClose` será responsável por atualizar o estado para fechar o Dialog.

3. Substitua `handleClose` pela função apropriada para lidar com o evento de fechamento.

## Exemplos de Uso

Já existem 4 exemplos de uso do Dialog implementados no arquivo `App.tsx`:
- Com conteúdo suficiente para que seja necessário rolar a tela;
- com pouco conteúdo e tamanho do dialog de acordo;
- sem conteúdo;
- Dentro de um parent com a estilização `position: relative`; 

## Props

O componente Dialog aceita as seguintes props:

- `title` (string, opcional): O conteúdo a ser exibido na parte superior do Dialog.
- `isOpen` (booleano, obrigatório): Especifica se o Dialog está aberto (`true`) ou fechado (`false`).
- `onClose` (função, obrigatória): Função de retorno de chamada a ser invocada sempre que o Dialog for fechado.
- `closeOnOverlayClick` (booleano, obrigatório): Quando definido como `true`, permite que o Dialog seja fechado quando o usuário clicar na camada de sobreposição.
- `children` (ReactNode, opcional): O conteúdo do Dialog.

## Funcionalidade

O componente Dialog funciona da seguinte maneira:

- Ele possui duas camadas, sendo que a camada superior ocupa toda a tela e a camada inferior exibe o conteúdo.
- O Dialog apresenta seu conteúdo até uma certa altura na tela. Se o conteúdo exceder essa altura, o comportamento de rolagem será aplicado ao corpo do Dialog.
- A visibilidade do Dialog é controlada pela prop `isOpen`, de forma que o componente sequer é renderizado se não for `true`.
- A função de retorno de chamada `onClose` é invocada sempre que o usuário realiza uma ação que fecha o Dialog:
  - Clicar no botão de fechar
  - Clicar na camada de sobreposição se a prop `closeOnOverlayClick` estiver definida como `true`.
  - Pressionar a tecla ESC.

## Conclusão

Este dialog foi desenvolvido ao longo do fim de semana e espero que esta implementação esteja alinhada com as expectativas e os padrões de qualidade da Lemon.

Tenho acompanhado a empresa desde que a descobri no início do ano e tenho um interesse genuíno não apenas em seu produto e linha de atuação, mas também em sua cultura como um todo.

Li o guia de cultura, o FAQ do processo seletivo e o Design Definition Document da Lemon elaborado pelo Luciano e disponível em seu LinkedIn. Portanto, considero que participar deste processo é uma decisão cuidadosamente considerada. Essa pesquisa me permitiu compreender claramente o que esperar em termos de cultura e desafios de negócio, além de me identificar com a filosofia e os valores da Lemon. Estou verdadeiramente empolgado com a oportunidade de contribuir para seu sucesso. 

Aguardo ansiosamente o retorno!