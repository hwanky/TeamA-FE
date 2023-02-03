import Button from 'components/common/Button';
import { Modal, ModalOkCancel } from 'components/common/Modal';
import { PageContent, SvgPosition, Title } from 'pages/Mypage/MyPageStyle';
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';

const PasswordChange = () => {
  const [display, setDisplay] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const [password, setPassword] = useState({
    oldPW: '',
    newPW: '',
    compPW: '',
  });

  const { oldPW, newPW, compPW } = password;

  function changePW(e) {
    const { id, value } = e.target;
    setPassword({
      ...password,
      [id]: value,
    });
  }

  function onReset(e) {
    setPassword({
      oldPW: '',
      newPW: '',
      compPW: '',
    });
  }

  function ChangePassword() {
    try {
      // 비밀번호 변경
      console.log(password);
    } catch (error) {
      setModal(true);
      setModalText('오류가 발생하였습니다.');
      onReset();
    } finally {
      setModal(true);
      setModalText('비밀번호가 변경되었습니다.');
      onReset();
    }
  }

  return (
    <PageContent>
      {modal ? <Modal modalText={modalText} /> : null}
      <Title>
        비밀번호 변경
        <SvgPosition
          $display={display}
          onClick={() => {
            setDisplay(!display);
          }}
        >
          <RiArrowDownSLine size="35" />
        </SvgPosition>
      </Title>
      <WithdrawalContent $display={display}>
        <p>회원님의 정보 보호를 위해 비밀번호를 정기적으로 변경해주세요.</p>
        <ChangePW>
          <li>
            <InputForm>
              <label htmlFor="oldPW">현재 비밀번호</label>
              <input
                type="password"
                id="oldPW"
                value={oldPW}
                onChange={changePW}
                placeholder="현재 비밀번호를 입력해주세요"
              ></input>
            </InputForm>
          </li>
          <li>
            <InputForm>
              <label htmlFor="newPW">신규 비밀번호</label>
              <input
                type="password"
                id="newPW"
                value={newPW}
                onChange={changePW}
                placeholder="새 비밀번호를 입력해주세요"
              ></input>
            </InputForm>
          </li>
          <li>
            <InputForm>
              <label htmlFor="compPW">비밀번호 확인</label>
              <input
                type="password"
                id="compPW"
                value={compPW}
                onChange={changePW}
                placeholder="새 비밀번호를 다시 입력해주세요"
              ></input>
            </InputForm>
          </li>
        </ChangePW>
        <Button
          text="변경"
          width="100px"
          height="40px"
          onClick={() => {
            ModalOkCancel('비밀번호를 변경하시겠습니까?', null, ChangePassword);
          }}
        />
      </WithdrawalContent>
    </PageContent>
  );
};

const WithdrawalContent = styled.div`
  margin-left: 7px;
  ${(props) =>
    props.$display
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  p {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 25px;
  }
  button {
    float: right;
    margin-right: 20px;
  }
`;

const ChangePW = styled.ul`
  li {
    margin-bottom: 25px;
  }
`;

const InputForm = styled.div`
  display: flex;
  label {
    flex: 0 0 128px;
    color: #404040;
    font-size: 17px;
    font-weight: 600;
    line-height: 40px;
    cursor: pointer;
  }
  input {
    width: 40%;
    display: block;
    height: 38px;
    padding: 0 15px;
    color: #606060;
    font-size: inherit;
    line-height: 40px;
    border: 1px solid #eaeaea;
    background-color: #fff;
    border-radius: 8px;
    &:hover {
      border: 1px solid #ff385c;
    }
    &:focus {
      border: 1px solid #ff385c;
      outline: 0;
    }
    div {
      display: none;
    }
  }
`;

export default PasswordChange;
