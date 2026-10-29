/**
 * 영어회화 100일의 기적 학습 데이터베이스 (DAY 001 ~ DAY 010)
 * 100강까지 lectures 배열에 객체를 계속 추가할 수 있습니다.
 */
const lectures = [
  {
    "day": 1,
    "dayFormatted": "DAY 001",
    "title": "봄꽃나들이",
    "videoId": "funxAndCr7c",
    "dialogues": [
      {
        "id": "d1_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "넌 봄이 되면 뭐가 좋아?",
        "en": "What do you like about spring?",
        "time": "00:43",
        "seconds": 43,
        "note": "What do you like about ~? : ~은 어떤 점이 좋아?",
        "extras": [
          {
            "en": "What do you like about your boyfriend?",
            "kr": "네 남자친구는 뭐가 좋아?"
          }
        ]
      },
      {
        "id": "d1_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "전국적으로 나무에 꽃이 만개하잖아.",
        "en": "A lot of trees burst into blossom all across the country.",
        "time": "01:00",
        "seconds": 60,
        "note": "burst into blossom : 꽃망울을 터뜨리다 (만개하다) / all across the country : 전국적으로",
        "extras": [
          {
            "en": "burst into tears",
            "kr": "눈물을 왈칵 터뜨리다"
          },
          {
            "en": "all over the country",
            "kr": "전국적으로"
          }
        ]
      },
      {
        "id": "d1_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "내일 벚꽃축제 같이 가자.",
        "en": "Let's check out the cherry blossom festival tomorrow.",
        "time": "01:41",
        "seconds": 101,
        "note": "check out ~ : ~을 보러 가다, 확인하다 / cherry blossom festival : 벚꽃 축제",
        "extras": [
          {
            "en": "cherry blossom",
            "kr": "벚꽃"
          }
        ]
      },
      {
        "id": "d1_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "좋아. 일찍 출발해서 교통혼잡을 피하자.",
        "en": "Sure. We have to leave early to beat the traffic.",
        "time": "02:01",
        "seconds": 121,
        "note": "leave early : 일찍 출발하다 / beat the traffic : 교통혼잡을 피하다",
        "extras": [
          {
            "en": "beat the heat",
            "kr": "더위를 피하다"
          }
        ]
      },
      {
        "id": "d1_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "일어나자마자 바로 전화할게.",
        "en": "I'll call you first thing in the morning.",
        "time": "02:37",
        "seconds": 157,
        "note": "first thing in the morning : 아침에 일어나자마자 (가장 먼저)",
        "extras": []
      },
      {
        "id": "d1_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "내가 도시락 많이 싸올게.",
        "en": "I'll pack a big lunch for us.",
        "time": "02:57",
        "seconds": 177,
        "note": "pack a lunch : 도시락을 싸다",
        "extras": [
          {
            "en": "Don't forget to pack a lunch.",
            "kr": "도시락 싸는 거 잊지 마."
          }
        ]
      }
    ]
  },
  {
    "day": 2,
    "dayFormatted": "DAY 002",
    "title": "약속시간 잡기",
    "videoId": "OX8NbBmZ_s8",
    "dialogues": [
      {
        "id": "d2_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "영화가 6시에 시작해. 5시쯤 출발하자.",
        "en": "The movie begins at six. Let's leave around five.",
        "time": "00:44",
        "seconds": 44,
        "note": "begin/start : 행위를 시작하다 / leave : 장소를 떠나다 / around five : 5시경에",
        "extras": [
          {
            "en": "around five",
            "kr": "5시경에 (5시쯤)"
          }
        ]
      },
      {
        "id": "d2_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "좋아. 그 시간에는 차가 안 막히니까.",
        "en": "Okay. The traffic isn't bad at that time of day.",
        "time": "01:10",
        "seconds": 70,
        "note": "The traffic isn't bad : 차가 안 막힌다 / at that time of day : 그 시간대에는",
        "extras": [
          {
            "en": "The traffic is bad. / The traffic is heavy.",
            "kr": "차가 많이 막힌다."
          },
          {
            "en": "at this time of day",
            "kr": "이 시간에는"
          }
        ]
      },
      {
        "id": "d2_3",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "내가 너희 집으로 데리러 갈게.",
        "en": "I'll pick you up from your place.",
        "time": "01:36",
        "seconds": 96,
        "note": "pick somebody up from + 장소 : ~를 데리러 가다 / your place : 너희 집",
        "extras": []
      },
      {
        "id": "d2_4",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "고마운데 너무 무리는 하지 마.",
        "en": "Thanks, but don't go out of your way.",
        "time": "01:51",
        "seconds": 111,
        "note": "go out of one's way : 일부러 무리해서 ~하다",
        "extras": [
          {
            "en": "Don't bother to pick me up.",
            "kr": "일부러 데리러 오지 않아도 돼."
          }
        ]
      },
      {
        "id": "d2_5",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "괜찮아. 영화관 가는 길이야.",
        "en": "No problem. It's on my way to the cinema.",
        "time": "02:21",
        "seconds": 141,
        "note": "be on one's way to + 장소 : ~로 가는 길이다",
        "extras": [
          {
            "en": "I'm on my way to work.",
            "kr": "출근하는 길이야."
          },
          {
            "en": "I'm on my way to school.",
            "kr": "학교 가는 길이야."
          }
        ]
      },
      {
        "id": "d2_6",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "출발할 때 전화해.",
        "en": "Give me a call when you're about to leave.",
        "time": "02:52",
        "seconds": 172,
        "note": "give somebody a call : ~에게 전화하다 / be about to + 동사원형 : 막 ~하려고 하다",
        "extras": [
          {
            "en": "when you're about to leave",
            "kr": "막 출발하려고 할 때"
          }
        ]
      }
    ]
  },
  {
    "day": 3,
    "dayFormatted": "DAY 003",
    "title": "마트 가는 날",
    "videoId": "SJGBNMVqs8c",
    "dialogues": [
      {
        "id": "d3_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "충동구매는 그만. 2시간째야.",
        "en": "No more impulsive shopping. We've been here for two hours.",
        "time": "00:45",
        "seconds": 45,
        "note": "impulsive shopping : 충동구매 / No more ~ : ~은 이제 그만",
        "extras": [
          {
            "en": "No more questions, please.",
            "kr": "질문은 그만 받겠습니다."
          },
          {
            "en": "We've been dating for two months.",
            "kr": "우리 사귄 지 두 달 됐어요."
          }
        ]
      },
      {
        "id": "d3_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "재촉하지 마. 최선을 다하고 있어.",
        "en": "Don't push me. I'm trying my best.",
        "time": "00:58",
        "seconds": 58,
        "note": "push : 재촉하다, 밀어붙이다 / try one's best : 최선을 다하다",
        "extras": [
          {
            "en": "Don't push yourself.",
            "kr": "너무 무리하지 마세요."
          }
        ]
      },
      {
        "id": "d3_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "제발 부탁이야. 쇼핑 목록에 충실하자.",
        "en": "Please. Let's stick to the shopping list.",
        "time": "01:23",
        "seconds": 83,
        "note": "stick to ~ : ~을 고수하다, 충실하다",
        "extras": [
          {
            "en": "I'll stick to my diet.",
            "kr": "나 다이어트 계속 지킬 거야."
          }
        ]
      },
      {
        "id": "d3_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "그만 좀 해. 힘들게 좀 하지 마.",
        "en": "Cut it out. Don't try my patience.",
        "time": "02:24",
        "seconds": 144,
        "note": "Cut it out : 그만 좀 해 / try one's patience : 인내심을 시험하다",
        "extras": []
      },
      {
        "id": "d3_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "일단 흩어지자. 맥주 좀 사 올게.",
        "en": "Let's split up. I'll go get some beer.",
        "time": "02:50",
        "seconds": 170,
        "note": "split up : 흩어지다 / go get ~ : 가서 ~를 가져오다(사 오다)",
        "extras": []
      },
      {
        "id": "d3_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "알았어. 10분 후에 계산대에서 만나.",
        "en": "Okay. See you at the cashier in ten minutes.",
        "time": "03:12",
        "seconds": 192,
        "note": "cashier : 계산대, 계산원 / in ten minutes : 10분 후에",
        "extras": [
          {
            "en": "See you at the airport.",
            "kr": "공항에서 보자."
          },
          {
            "en": "See you at the station.",
            "kr": "역에서 보자."
          }
        ]
      }
    ]
  },
  {
    "day": 4,
    "dayFormatted": "DAY 004",
    "title": "다이어트 결심",
    "videoId": "4dLyGaIi9h0",
    "dialogues": [
      {
        "id": "d4_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "무슨 일이야? 왜 이렇게 조금만 먹어?",
        "en": "What's going on? Why do you eat like a bird?",
        "time": "00:49",
        "seconds": 49,
        "note": "What's going on? : 무슨 일이야? / eat like a bird : (새처럼) 아주 조금씩 먹다, 소식하다",
        "extras": [
          {
            "en": "What's up? / What's happening?",
            "kr": "무슨 일이야?"
          }
        ]
      },
      {
        "id": "d4_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "살이 찌고 있어서 탄수화물 섭취를 줄이려고 노력 중이야.",
        "en": "I'm gaining weight. I'm trying to cut down on carbs.",
        "time": "01:20",
        "seconds": 80,
        "note": "gain weight : 살이 찌다 / cut down on ~ : ~을 줄이다 / carbs : 탄수화물",
        "extras": [
          {
            "en": "I'll cut down on smoking.",
            "kr": "담배를 줄일 거야."
          },
          {
            "en": "I'm trying to cut down on coffee.",
            "kr": "커피 좀 줄이려고 노력 중이야."
          }
        ]
      },
      {
        "id": "d4_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "네가 할 수 있을까? 너 탄수화물 엄청 좋아하잖아.",
        "en": "I doubt you can do it. You're a big fan of carbs.",
        "time": "01:57",
        "seconds": 117,
        "note": "I doubt ~ : ~할지 의문이다, 확신하지 못하다 / be a big fan of ~ : ~을 대단히 좋아하다",
        "extras": [
          {
            "en": "I'm a big fan of BTS.",
            "kr": "저는 BTS의 열렬한 팬입니다."
          },
          {
            "en": "I'm a big fan of wine.",
            "kr": "난 와인을 정말 좋아해."
          }
        ]
      },
      {
        "id": "d4_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "이젠 아니야. 체중조절을 해야지.",
        "en": "Not anymore. I have to watch my weight.",
        "time": "02:41",
        "seconds": 161,
        "note": "Not anymore : 이젠 아니야, 더 이상은 아니야 / watch one's weight : 체중을 조절하다, 신경 쓰다",
        "extras": []
      },
      {
        "id": "d4_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "지금도 괜찮아 보이는 것 같은데.",
        "en": "I think you look good the way you are.",
        "time": "03:05",
        "seconds": 185,
        "note": "look + 형용사 : ~해 보이다 / the way you are : 너의 지금 모습 그대로",
        "extras": [
          {
            "en": "You look down. / You look tired.",
            "kr": "너 우울해 보여. / 피곤해 보여."
          },
          {
            "en": "You're amazing, just the way you are.",
            "kr": "넌 지금 있는 그대로도 멋져."
          }
        ]
      },
      {
        "id": "d4_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "말리지 마. 다이어트하기로 마음먹었어.",
        "en": "Don't stop me. I have my heart set on dieting.",
        "time": "03:44",
        "seconds": 224,
        "note": "Don't stop me : 나 말리지 마 / have one's heart set on ~ : ~하기로 굳게 마음먹다",
        "extras": [
          {
            "en": "I have my heart set on studying.",
            "kr": "공부하기로 마음먹었어."
          },
          {
            "en": "I have my heart set on buying a new car.",
            "kr": "새 차를 사기로 마음먹었어."
          }
        ]
      }
    ]
  },
  {
    "day": 5,
    "dayFormatted": "DAY 005",
    "title": "속이 더부룩해",
    "videoId": "r37j9YGRbPw",
    "dialogues": [
      {
        "id": "d5_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "저녁 먹으러 나갈 준비됐어?",
        "en": "Are you ready to go out for dinner?",
        "time": "00:43",
        "seconds": 43,
        "note": "be ready to + 동사원형 : ~할 준비가 되다 / go out for ~ : ~하러 외출하다",
        "extras": [
          {
            "en": "go out for a walk / go out for a drive",
            "kr": "산책하러 나가다 / 드라이브하러 나가다"
          },
          {
            "en": "go out for lunch",
            "kr": "점심 먹으러 나가다"
          }
        ]
      },
      {
        "id": "d5_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "응, 근데 속이 좀 더부룩해.",
        "en": "Yes, but I'm feeling a bit bloated.",
        "time": "01:21",
        "seconds": 81,
        "note": "feel bloated : 속이 더부룩하다, 배에 가스가 차다",
        "extras": [
          {
            "en": "I feel heavy in the stomach.",
            "kr": "속이 답답하고 더부룩해."
          }
        ]
      },
      {
        "id": "d5_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "정말? 점심때 뭐 먹었는데?",
        "en": "Really? What did you have for lunch?",
        "time": "01:55",
        "seconds": 115,
        "note": "What did you have for + 식사? : 점심/저녁으로 뭐 먹었어?",
        "extras": [
          {
            "en": "What did you have for breakfast?",
            "kr": "아침으로 뭐 먹었어?"
          }
        ]
      },
      {
        "id": "d5_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "오후에 떡볶이를 좀 먹은 것 같아.",
        "en": "I think I ate some tteokbokki in the afternoon.",
        "time": "02:27",
        "seconds": 147,
        "note": "I think + 주어 + 동사 : ~인 것 같다",
        "extras": [
          {
            "en": "I think it will rain.",
            "kr": "비가 올 것 같아."
          },
          {
            "en": "I think I'm lost.",
            "kr": "길을 잃은 것 같아."
          },
          {
            "en": "I think you're right.",
            "kr": "네 말이 맞는 것 같아."
          }
        ]
      },
      {
        "id": "d5_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "속 편하게 해줄 것 좀 사다 줄까?",
        "en": "Can I get you something to ease your stomach?",
        "time": "02:52",
        "seconds": 172,
        "note": "get somebody something : ~에게 ~을 갖다주다 / ease one's stomach : 속을 편하게 가라앉히다",
        "extras": [
          {
            "en": "Can you get me some water?",
            "kr": "물 좀 갖다 줄래?"
          },
          {
            "en": "Can I get you something to drink?",
            "kr": "마실 것 좀 드릴까요?"
          }
        ]
      },
      {
        "id": "d5_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "아니 괜찮아. 죽 배달시킬 거야.",
        "en": "No, thanks. I'll have some porridge delivered.",
        "time": "03:26",
        "seconds": 206,
        "note": "have + 목적어 + delivered : ~을 배달시키다 (사역구조)",
        "extras": [
          {
            "en": "I had my hair cut.",
            "kr": "나 머리 잘랐어."
          },
          {
            "en": "I had my suit dry-cleaned.",
            "kr": "정장 드라이클리닝 맡겼어."
          }
        ]
      }
    ]
  },
  {
    "day": 6,
    "dayFormatted": "DAY 006",
    "title": "외모가 경쟁력",
    "videoId": "MPDkoCx3p8A",
    "dialogues": [
      {
        "id": "d6_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "웬일이야! 파마한 것 같은데?",
        "en": "Look at you! It looks like you got a perm.",
        "time": "00:44",
        "seconds": 44,
        "note": "Look at you! : 이게 누구야! 웬일이야! (멋진 모습에 감탄) / get a perm : 파마하다",
        "extras": [
          {
            "en": "It looks like you're busy.",
            "kr": "너 바쁜 것 같구나."
          },
          {
            "en": "get a haircut / get a massage",
            "kr": "머리를 자르다 / 마사지를 받다"
          }
        ]
      },
      {
        "id": "d6_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "맞아. 알아보겠어? 어때 보여?",
        "en": "Yes. Can you tell? How do I look?",
        "time": "01:31",
        "seconds": 91,
        "note": "Can you tell? : 티 나? 알아차리겠어? / How do I look? : 나 어때 보여?",
        "extras": [
          {
            "en": "You can't tell.",
            "kr": "못 알아채겠어 (티 안 나)."
          }
        ]
      },
      {
        "id": "d6_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "보기 좋은데. 나이보다 어려 보여.",
        "en": "It looks great. You look younger than your age.",
        "time": "02:00",
        "seconds": 120,
        "note": "look younger than one's age : 실제 나이보다 더 젊어 보이다",
        "extras": [
          {
            "en": "You look younger than I expected.",
            "kr": "제가 예상한 것보다 더 젊어 보이시네요."
          }
        ]
      },
      {
        "id": "d6_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "정말? 그게 내가 늘 바라던 거야.",
        "en": "Really? That's what I've always wanted.",
        "time": "02:22",
        "seconds": 142,
        "note": "That's what I've always wanted : 그게 바로 내가 언제나 바라던 바야",
        "extras": []
      },
      {
        "id": "d6_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "외모 관리에 너무 신경 쓰는데?",
        "en": "You're really into taking care of your looks.",
        "time": "02:43",
        "seconds": 163,
        "note": "be into ~ : ~에 푹 빠져있다, 관심이 많다 / take care of one's looks : 외모를 가꾸다, 관리하다",
        "extras": [
          {
            "en": "I'm into cooking these days.",
            "kr": "나 요즘 요리에 푹 빠져 있어."
          },
          {
            "en": "take care of one's health",
            "kr": "건강을 관리하다"
          }
        ]
      },
      {
        "id": "d6_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "저녁에 데이트가 있어. 좋은 인상을 남겨야지.",
        "en": "I have a date tonight. I want to leave a good impression.",
        "time": "03:21",
        "seconds": 201,
        "note": "have a date : 데이트가 있다 / leave a good impression : 좋은 인상을 남기다",
        "extras": [
          {
            "en": "go out with somebody",
            "kr": "~와 사귀다"
          },
          {
            "en": "make a good impression",
            "kr": "좋은 인상을 주다"
          }
        ]
      }
    ]
  },
  {
    "day": 7,
    "dayFormatted": "DAY 007",
    "title": "버스노선 묻기",
    "videoId": "GBcOfc7AsqE",
    "dialogues": [
      {
        "id": "d7_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "고속버스 터미널까지 어떻게 가나요?",
        "en": "How can I get to the express bus terminal?",
        "time": "00:43",
        "seconds": 43,
        "note": "How can I get to + 장소? : ~에 어떻게 가나요? (길 묻기 기본 표현)",
        "extras": [
          {
            "en": "How can I get to City Hall?",
            "kr": "시청은 어떻게 가나요?"
          },
          {
            "en": "How can I get to the airport?",
            "kr": "공항에는 어떻게 가나요?"
          }
        ]
      },
      {
        "id": "d7_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "건너편에서 3번 버스를 타시면 됩니다.",
        "en": "You can take bus number 3 across the street.",
        "time": "01:05",
        "seconds": 65,
        "note": "You can + 동사원형 : ~하시면 됩니다 (가벼운 제안/안내) / across the street : 길 건너편에서",
        "extras": [
          {
            "en": "Can I have some water?",
            "kr": "물 좀 주실래요? (가벼운 요청)"
          }
        ]
      },
      {
        "id": "d7_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "도로를 건너야 한다는 뜻이죠?",
        "en": "You mean I have to cross the road?",
        "time": "01:47",
        "seconds": 107,
        "note": "You mean + 문장? : ~라는 말씀이시죠? (상대 말 확인)",
        "extras": [
          {
            "en": "You mean I have to do it again?",
            "kr": "그러니까 제가 다시 해야 한다는 뜻이죠?"
          }
        ]
      },
      {
        "id": "d7_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "네. 제가 알기로는 20분마다 운행해요.",
        "en": "Right. From what I know, it runs every 20 minutes.",
        "time": "02:09",
        "seconds": 129,
        "note": "From what I know : 제가 알기로는 / run every + 시간 : ~마다 운행하다",
        "extras": [
          {
            "en": "As far as I know",
            "kr": "내가 아는 한은"
          },
          {
            "en": "From what I hear",
            "kr": "내가 듣기로는"
          },
          {
            "en": "I drink water every 2 hours.",
            "kr": "나는 2시간마다 물을 마셔."
          }
        ]
      },
      {
        "id": "d7_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "고마워요. 저기 버스가 오네요.",
        "en": "Thank you. There comes the bus.",
        "time": "02:57",
        "seconds": 177,
        "note": "There comes + 명사 : 저기 ~가 온다 (대명사는 There it comes)",
        "extras": [
          {
            "en": "There he comes.",
            "kr": "저기 그가 온다."
          }
        ]
      },
      {
        "id": "d7_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "신호등이 파란불이네요. 뛰세요!",
        "en": "The traffic light is green. Run!",
        "time": "03:18",
        "seconds": 198,
        "note": "The traffic light is green : 신호등이 초록불(파란불)이다",
        "extras": []
      }
    ]
  },
  {
    "day": 8,
    "dayFormatted": "DAY 008",
    "title": "셀카봉이 필요해",
    "videoId": "8YddIxd-kws",
    "dialogues": [
      {
        "id": "d8_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "전망 진짜 좋다! 너무 좋아.",
        "en": "What a nice view! It's too good to be true.",
        "time": "00:43",
        "seconds": 43,
        "note": "What a + 형용사 + 명사! : 감탄문 / too good to be true : 믿기지 않을 만큼 너무 좋다",
        "extras": [
          {
            "en": "What a beautiful house! / How beautiful it is!",
            "kr": "정말 아름다운 집이네요!"
          },
          {
            "en": "You're just too good to be true.",
            "kr": "당신은 믿기지 않을 만큼 너무 아름다워요."
          }
        ]
      },
      {
        "id": "d8_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "사진 한 장 찍자. 셀카봉 가져왔어?",
        "en": "Let's take a picture. Did you bring your selfie stick?",
        "time": "01:52",
        "seconds": 112,
        "note": "take a picture : 사진을 찍다 / selfie stick : 셀카봉",
        "extras": [
          {
            "en": "take a selfie",
            "kr": "셀카를 찍다"
          },
          {
            "en": "Shall we take a selfie?",
            "kr": "우리 셀카 찍을까?"
          }
        ]
      },
      {
        "id": "d8_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "이런, 호텔 방에 두고 왔나 봐.",
        "en": "Oh, no. I think I left it in my hotel room.",
        "time": "02:20",
        "seconds": 140,
        "note": "leave ~ in/at : ~을 두고 오다, 깜빡 잊고 남겨두다",
        "extras": [
          {
            "en": "I left my cell phone in my car.",
            "kr": "휴대폰을 차에 두고 왔어."
          }
        ]
      },
      {
        "id": "d8_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "다른 사람한테 찍어 달라고 하자.",
        "en": "Let's ask someone else to take one.",
        "time": "02:39",
        "seconds": 159,
        "note": "ask somebody to + 동사원형 : ~에게 ~해 달라고 부탁하다",
        "extras": [
          {
            "en": "Please ask him to call me back.",
            "kr": "그 사람에게 저한테 다시 전화해 달라고 전해주세요."
          },
          {
            "en": "Let's ask him to help us.",
            "kr": "그 사람에게 도와달라고 부탁하자."
          }
        ]
      },
      {
        "id": "d8_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "실례지만, 사진 한 장 찍어 주시겠어요?",
        "en": "Excuse me. Would you take a picture of us?",
        "time": "03:06",
        "seconds": 186,
        "note": "take a picture of us : 우리 사진을 찍어주다 (for 대신 of 가능)",
        "extras": [
          {
            "en": "Could you take a picture of me?",
            "kr": "제 사진 한 장만 찍어 주시겠어요?"
          }
        ]
      },
      {
        "id": "d8_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "분수가 배경으로 나오게 찍어 주세요.",
        "en": "Try to get the fountain in the background.",
        "time": "03:30",
        "seconds": 210,
        "note": "get ~ in the background : ~가 배경으로 나오게 하다",
        "extras": [
          {
            "en": "Try to get the lake in the background.",
            "kr": "호수가 배경으로 나오게 찍어 주세요."
          }
        ]
      }
    ]
  },
  {
    "day": 9,
    "dayFormatted": "DAY 009",
    "title": "수제 돈가스",
    "videoId": "frSrrhYswqw",
    "dialogues": [
      {
        "id": "d9_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "여기가 동네에서 최고인 것 같아.",
        "en": "I think this place is the best in town.",
        "time": "00:43",
        "seconds": 43,
        "note": "the best in town : 이 동네/도시에서 최고인",
        "extras": [
          {
            "en": "He is the best singer in town.",
            "kr": "그는 이 동네에서 노래를 가장 잘해."
          }
        ]
      },
      {
        "id": "d9_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "메뉴 중에 가장 인기 있는 건 뭐야?",
        "en": "What's the most popular item on the menu?",
        "time": "01:03",
        "seconds": 63,
        "note": "the most popular item on the menu : 메뉴 중 가장 인기 있는 요리/품목",
        "extras": [
          {
            "en": "What are the most popular menu items?",
            "kr": "가장 인기 있는 메뉴들(복수)은 무엇인가요?"
          }
        ]
      },
      {
        "id": "d9_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "수제 돈가스가 꽤 유명해.",
        "en": "It's pretty well-known for handmade pork cutlet.",
        "time": "01:37",
        "seconds": 97,
        "note": "be well-known for ~ : ~로 잘 알려져 있다 / pork cutlet : 돈가스",
        "extras": [
          {
            "en": "This village is well known for wine grapes.",
            "kr": "이 마을은 포도 재배로 잘 알려져 있어."
          },
          {
            "en": "BTS is famous worldwide.",
            "kr": "BTS는 전 세계적으로 유명해 (famous vs well-known)."
          }
        ]
      },
      {
        "id": "d9_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "빨리 먹고 싶다. 배에서 꼬르륵 소리가 나.",
        "en": "I can't wait to eat. My stomach is growling.",
        "time": "02:23",
        "seconds": 143,
        "note": "can't wait to + 동사원형 : 너무 ~하고 싶다 / stomach is growling : 배에서 꼬르륵 소리가 나다",
        "extras": [
          {
            "en": "I can't wait to go back home.",
            "kr": "빨리 집에 가고 싶어 죽겠어."
          },
          {
            "en": "I can't wait to see you.",
            "kr": "너를 너무 보고 싶어."
          }
        ]
      },
      {
        "id": "d9_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "음식 나온다. 맛이 어때?",
        "en": "Here it comes. How do you like it?",
        "time": "03:02",
        "seconds": 182,
        "note": "How do you like ~? : ~은 어때? 마음에 들어?",
        "extras": [
          {
            "en": "How do you like living in Jeju Island?",
            "kr": "제주도 사는 건 어때요?"
          },
          {
            "en": "How do you like your steak?",
            "kr": "스테이크 굽기는 어떻게 해드릴까요?"
          }
        ]
      },
      {
        "id": "d9_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "와, 진짜 맛있는데! (이 세상 맛이 아니야)",
        "en": "Wow, this is out of this world!",
        "time": "03:35",
        "seconds": 215,
        "note": "out of this world : (현실을 초월할 정도로) 대단히 훌륭한, 엄청나게 맛있는",
        "extras": []
      }
    ]
  },
  {
    "day": 10,
    "dayFormatted": "DAY 010",
    "title": "김칫국 마시지 마",
    "videoId": "GNMbmqV4MRY",
    "dialogues": [
      {
        "id": "d10_1",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "오늘 멋지다. 무슨 날이야?",
        "en": "You look sharp today. What's the occasion?",
        "time": "00:45",
        "seconds": 45,
        "note": "look sharp : 세련되고 말쑥해 보이다 / What's the occasion? : 무슨 날이야? 무슨 일 있어?",
        "extras": [
          {
            "en": "You're dressed to kill.",
            "kr": "너 오늘 옷차림이 끝내준다(죽인다)."
          }
        ]
      },
      {
        "id": "d10_2",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "친구가 오늘 저녁에 소개팅을 주선해 줬어.",
        "en": "My friend set me up on a blind date tonight.",
        "time": "01:19",
        "seconds": 79,
        "note": "set somebody up on a blind date : ~에게 소개팅을 주선해 주다",
        "extras": [
          {
            "en": "My friend set me up with his colleague.",
            "kr": "내 친구가 직장 동료를 소개시켜 줬어."
          }
        ]
      },
      {
        "id": "d10_3",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "잘됐네. 잘되면 좋겠다.",
        "en": "Good for you. I hope it works out.",
        "time": "02:02",
        "seconds": 122,
        "note": "Good for you : 잘됐다 / work out : 일이 잘 풀리다",
        "extras": [
          {
            "en": "I hope everything works out for you.",
            "kr": "모든 일이 잘 풀리길 바라."
          }
        ]
      },
      {
        "id": "d10_4",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "이번엔 왠지 느낌이 좋아.",
        "en": "For some reason, I have good vibes about this.",
        "time": "02:32",
        "seconds": 152,
        "note": "For some reason : 왠지 모르게 / have good vibes about ~ : ~에 대해 좋은 느낌(예감)이 들다",
        "extras": [
          {
            "en": "I have good vibes about this interview.",
            "kr": "이번 면접은 느낌이 좋아."
          }
        ]
      },
      {
        "id": "d10_5",
        "role": "A",
        "roleLabel": "A (여성)",
        "kr": "김칫국 좀 마시지 마.",
        "en": "Don't count your chickens before they hatch.",
        "time": "03:00",
        "seconds": 180,
        "note": "Don't count your chickens before they hatch : 부화도 전에 병아리 수부터 세지 마라 (김칫국 마시지 마라)",
        "extras": []
      },
      {
        "id": "d10_6",
        "role": "B",
        "roleLabel": "B (남성)",
        "kr": "진짜야. 내 말 믿어도 돼.",
        "en": "It's for real. You can take my word for it.",
        "time": "03:18",
        "seconds": 198,
        "note": "It's for real : 진짜야, 농담 아니야 / take one's word for it : ~의 말을 믿다",
        "extras": [
          {
            "en": "You have my word.",
            "kr": "내 말 믿어도 좋아 (약속할게)."
          }
        ]
      }
    ]
  }
];
