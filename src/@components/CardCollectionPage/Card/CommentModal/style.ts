import styled from "styled-components";

export const CommentWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 66rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.6rem;
  border-radius: 1.6rem 1.6rem 0 0;
  background: ${({ theme }) => theme.newColors.white};
`;

export const KnobWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 2rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Knob = styled.div`
  width: 4.2rem;
  height: 0.4rem;
  border-radius: 2.7rem;
  background: ${({ theme }) => theme.newColors.gray600};
`;

export const Comments = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  margin-top: 3.8rem;
  margin-bottom: 5.6rem;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  gap: 1.2rem;

  :first-child {
    color: ${({ theme }) => theme.newColors.green};
    > img {
      border: ${({ theme }) => theme.newColors.green} 0.2rem solid;
    }
  }
`;

export const ProfileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
`;

export const CommentContent = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 0.6rem;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.36px;

  white-space: pre-wrap;
`;

export const Gradient = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
  height: 8rem;

  background: linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
`;

export const InputWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  padding: 1.2rem 2rem;
  min-height: 5.6rem;
  background: ${({ theme }) => theme.newColors.gray100};
`;

export const Input = styled.textarea`
  width: 100%;

  overflow-y: hidden;

  border: none;
  overflow: auto;
  outline: none;

  resize: none;
  background: ${({ theme }) => theme.newColors.gray100};

  ${({ theme }) => theme.newFonts.h2};
`;

export const SubmitBtn = styled.button`
  width: 3.2rem;
  height: 3.2rem;
`;
