혹시 pages 폴더를 두지 않은 이유가 있나요?

pages가 없어서, 상위에서 부터 폴더구조를 파악하기 쉽지 않은 것 같아요!

또는 pages 폴더를 만들고 싶지 않다면, 컴포넌트의 파일 명을 Page라고 하는 것이 명시적일 것 같아요!

그리고, src안에 폴더가 많아서 찾기가 찾아가기가 꽤 어려운 것 같아요.
가장 중요하다고 생각하는 폴더에 
@Components 나 _Components 를 붙이는 것 어떨까요?
이렇게 하면 src의 맨 위로 폴더가 올라가요!

저는 @components, @pages, @hooks를 맨위로 올렸구요.
@components 내에서도 @common
@hooks 내에서도 @common을 제일 위로 올려보았어요!!
