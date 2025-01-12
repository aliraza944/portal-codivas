import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding: 20px;
`;

const Ratings = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const QuestionInfo = styled.div`
  flex: 1;
`;

const Rating = styled.p`
  font-size: 18px;
`;

const Heading = styled.h2`
  font-size: 32px;
  color: #78529c;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Badge = styled.div`
  align-self: flex-start;
  background-color: #78529c;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  text-align: center;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Avatar = styled.div`
  background-color: #78529c;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Questioner = styled.div`
  display: flex;
  align-items: center;
`;

const Question = ({
  title,
  description,
  badge,
  votes,
  answers,
  views,
  user,
  time,
}) => {
  return (
    <Wrapper>
      <Ratings>
        <Rating>
          {votes} <br /> votes
        </Rating>
        <Rating>
          {answers} <br /> answers
        </Rating>
        <Rating>
          {views} <br /> views
        </Rating>
      </Ratings>
      <QuestionInfo>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Flex>
          <Badge>{badge}</Badge>
          <div>
            <p>asked {time}</p>
            <Questioner>
              <Avatar>{user.substring(0, 2)}</Avatar>
              <p>{user}</p>
            </Questioner>
          </div>
        </Flex>
      </QuestionInfo>
    </Wrapper>
  );
};

export default Question;
