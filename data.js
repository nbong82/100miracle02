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
  },
  // --- DAY 011 ---
  {
    day: 11,
    dayFormatted: "DAY 011",
    title: "지하철 환승",
    videoId: "qb1JB2TDT7E",
    dialogues: [
      {
        id: "d11_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이쪽이 수서역 가는 길이 맞나요?",
        en: "Is this the right way to Suseo Station?",
        time: "00:44",
        seconds: 44,
        note: "Is this the right way to ~? : 이쪽이 ~로 가는 길이 맞나요? (방향 확인 기본 표현)",
        extras: [
          { en: "Is this the right way to Niagara Falls?", kr: "이쪽이 나이아가라 폭포 가는 길이 맞나요?" },
          { en: "Could you show me the way to City Hall?", kr: "시청 가는 길 좀 알려주시겠어요?" }
        ]
      },
      {
        id: "d11_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아니요. 반대편으로 가셔야 합니다.",
        en: "No. You have to go to the other side.",
        time: "01:29",
        seconds: 89,
        note: "to the other side : 반대편으로 / on the other side : 반대편에서",
        extras: [
          { en: "You can take bus number 9 on the other side.", kr: "반대편에서 9번 버스를 타시면 됩니다." }
        ]
      },
      {
        id: "d11_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "고맙습니다. 열차를 갈아타야 하나요?",
        en: "Thank you. Do I have to change trains?",
        time: "01:54",
        seconds: 114,
        note: "change trains : 열차를 갈아타다 (환승하다) / transfer to ~ : ~로 환승하다",
        extras: [
          { en: "How many times do I have to change trains?", kr: "열차를 몇 번 갈아타야 하나요?" },
          { en: "You can transfer to line number 5.", kr: "5호선으로 갈아타시면 됩니다." }
        ]
      },
      {
        id: "d11_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네. 교대역에서 3호선으로 갈아타세요.",
        en: "Yes. Transfer to line number 3 at Seoul National University of Education.",
        time: "02:30",
        seconds: 150,
        note: "transfer to line number ~ : ~호선으로 환승하다",
        extras: []
      },
      {
        id: "d11_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정말 친절하시네요. 너무 감사합니다.",
        en: "That's so nice of you. Thanks a million.",
        time: "02:38",
        seconds: 158,
        note: "That's so nice of you : 정말 친절하시네요 / Thanks a million : 백만 번 감사해요 (대단히 감사합니다)",
        extras: [
          { en: "That's so sweet of you.", kr: "정말 자상하시네요." }
        ]
      },
      {
        id: "d11_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "천만에요. 도움이 돼서 기뻐요.",
        en: "Not at all. It's my pleasure to help you.",
        time: "03:22",
        seconds: 202,
        note: "Not at all : 천만에요 / It's my pleasure to ~ : ~해서 제 기쁨입니다",
        extras: [
          { en: "Don't mention it.", kr: "별말씀을요." }
        ]
      }
    ]
  },

  // --- DAY 012 ---
  {
    day: 12,
    dayFormatted: "DAY 012",
    title: "생일파티 계획",
    videoId: "pEcK8FmcuS4",
    dialogues: [
      {
        id: "d12_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "금요일에 조이의 생일파티를 할 거야. 올 수 있어?",
        en: "I'm throwing a birthday party for Joy on Friday. Can you come?",
        time: "00:46",
        seconds: 46,
        note: "throw a party / have a party : 파티를 열다",
        extras: [
          { en: "Let's have a party at my place.", kr: "우리 집에서 파티하자." }
        ]
      },
      {
        id: "d12_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "농담해? 무슨 일이 있어도 참석해야지.",
        en: "Are you kidding? I wouldn't miss it for the world.",
        time: "01:09",
        seconds: 69,
        note: "Are you kidding? : 농담해? / wouldn't miss it for the world : 무슨 일이 있어도 꼭 갈게 (놓치지 않을게)",
        extras: [
          { en: "I'm joking. / I'm kidding.", kr: "농담이야." }
        ]
      },
      {
        id: "d12_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "대학교 동창들 몇 명 초대할 거야.",
        en: "I'll invite a few friends from university.",
        time: "01:47",
        seconds: 107,
        note: "invite somebody / have somebody over : ~를 초대하다",
        extras: [
          { en: "I'm having a few friends over tonight.", kr: "오늘 저녁에 친구 몇 명을 초대할 거야." },
          { en: "Thanks for having me.", kr: "초대해 주셔서 감사합니다." }
        ]
      },
      {
        id: "d12_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네가 괜찮다면 몇 명 연락해 볼게.",
        en: "I can make contact with some guys if it's okay.",
        time: "02:24",
        seconds: 144,
        note: "make contact with ~ / keep in touch with ~ : ~와 연락하다, 접촉하다",
        extras: [
          { en: "I'll keep in touch.", kr: "계속 연락할게." }
        ]
      },
      {
        id: "d12_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "고맙지만 조촐하게 하려고.",
        en: "Thanks, but we're having a small party.",
        time: "02:51",
        seconds: 171,
        note: "have a small party : 조촐하게 파티를 열다",
        extras: [
          { en: "We're having a small barbecue.", kr: "조촐하게 바비큐 파티를 하려고 해." }
        ]
      },
      {
        id: "d12_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그럼 더 좋지. 재미있겠다.",
        en: "That sounds even better. It sounds like fun.",
        time: "03:19",
        seconds: 199,
        note: "That sounds even better : 그게 훨씬 더 낫겠다 / It sounds like fun : 재미있겠다",
        extras: [
          { en: "The more, the merrier.", kr: "사람이 많을수록 더 좋지." }
        ]
      }
    ]
  },

  // --- DAY 013 ---
  {
    day: 13,
    dayFormatted: "DAY 013",
    title: "오늘 휴가 냈어",
    videoId: "4IyK0lUcdYA",
    dialogues: [
      {
        id: "d13_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "여보, 일어나. 오늘 일 안 해?",
        en: "Honey, wake up. Don't you have work today?",
        time: "00:45",
        seconds: 45,
        note: "wake up : 잠에서 깨다, 정신 차리다 / have work : 일(출근)이 있다",
        extras: [
          { en: "Wake up and listen carefully.", kr: "정신 차리고 잘 들어." }
        ]
      },
      {
        id: "d13_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 말 안 했나? 쉬는 날이야.",
        en: "Didn't I tell you? I have the day off.",
        time: "01:14",
        seconds: 74,
        note: "Didn't I tell you? : 내가 말 안 했어? / have the day off (take the day off) : 하루 쉬다(휴가 내다)",
        extras: [
          { en: "It's my day off. / I'm off today.", kr: "오늘 쉬는 날이야." }
        ]
      },
      {
        id: "d13_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아니, 그런 말 한 적 없는데.",
        en: "No, you didn't tell me that.",
        time: "01:41",
        seconds: 101,
        note: "You didn't tell me that : 나한테 그런 얘기 안 했어",
        extras: []
      },
      {
        id: "d13_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "요즘 자주 깜빡하네. 나들이 좀 갈까?",
        en: "I've been so forgetful lately. Shall we go on a picnic?",
        time: "01:49",
        seconds: 109,
        note: "forgetful : 잘 깜빡하는, 건망증이 있는 / go on a picnic : 소풍 가다",
        extras: [
          { en: "I've become so forgetful in recent years.", kr: "최근 몇 년 사이에 건망증이 심해졌어." },
          { en: "go on a trip / go on a business trip / go on a diet", kr: "여행 가다 / 출장 가다 / 다이어트하다" }
        ]
      },
      {
        id: "d13_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋지! 우리 데이트한 지 얼마 만이야?",
        en: "Great! How long has it been since we had a date?",
        time: "02:30",
        seconds: 150,
        note: "How long has it been since ~? : ~한 지 얼마나 됐지?",
        extras: [
          { en: "How long has it been since you saw your parents?", kr: "부모님 뵌 지 얼마나 됐어?" },
          { en: "I want to date her.", kr: "그녀와 데이트하고 싶어." }
        ]
      },
      {
        id: "d13_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안, 보고서 쓰느라 좀 바빴어.",
        en: "Sorry. I've been busy writing some reports.",
        time: "03:19",
        seconds: 199,
        note: "be busy + 동사-ing / be busy with + 명사 : ~하느라 바쁘다",
        extras: [
          { en: "I was busy taking care of my kids.", kr: "아이들 돌보느라 바빴어." },
          { en: "I was busy with my English homework.", kr: "영어 숙제 하느라 바빴어." }
        ]
      }
    ]
  },

  // --- DAY 014 ---
  {
    day: 14,
    dayFormatted: "DAY 014",
    title: "온라인 게임",
    videoId: "6iyok_CPWkc",
    dialogues: [
      {
        id: "d14_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "주말에 뭐 하고 놀았어?",
        en: "What did you do over the weekend?",
        time: "00:42",
        seconds: 42,
        note: "over the weekend : 주말 동안에",
        extras: [
          { en: "Did you have a good weekend?", kr: "주말 잘 보냈어?" }
        ]
      },
      {
        id: "d14_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "밤새 온라인 게임에 푹 빠져 있었어.",
        en: "I was hooked on online games all night.",
        time: "01:05",
        seconds: 65,
        note: "be hooked on ~ : ~에 푹 빠져있다, 중독되다 / all night : 밤새도록",
        extras: [
          { en: "I'm hooked on this drama.", kr: "나 이 드라마에 푹 빠졌어." }
        ]
      },
      {
        id: "d14_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아직도 게임을 좋아해? 나잇값 좀 해라.",
        en: "You still play games? Act your age.",
        time: "01:45",
        seconds: 105,
        note: "Act your age : 나이에 맞게 행동해라, 나잇값 좀 해라",
        extras: [
          { en: "Grow up!", kr: "철 좀 들어라!" }
        ]
      },
      {
        id: "d14_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "스트레스 풀기에는 게임이 최고야.",
        en: "There's nothing like games to relieve stress.",
        time: "02:15",
        seconds: 135,
        note: "There is nothing like ~ to ... : …하는 데는 ~만한 게 없다 / relieve stress : 스트레스를 해소하다",
        extras: [
          { en: "There's nothing like hot soup on a cold day.", kr: "추운 날엔 따뜻한 국물만 한 게 없어." }
        ]
      },
      {
        id: "d14_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그래도 시간 낭비하지 마.",
        en: "Even so, don't waste your time.",
        time: "02:48",
        seconds: 168,
        note: "Even so : 그렇다 하더라도, 그래도 / waste one's time : 시간을 낭비하다",
        extras: []
      },
      {
        id: "d14_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 잔소리 좀 그만해.",
        en: "Okay. Stop nagging me.",
        time: "03:12",
        seconds: 192,
        note: "nag somebody : ~에게 바가지 긁다, 잔소리하다",
        extras: [
          { en: "Stop nagging at me.", kr: "잔소리 좀 그만 늘어놓아." }
        ]
      }
    ]
  },

  // --- DAY 015 ---
  {
    day: 15,
    dayFormatted: "DAY 015",
    title: "갑작스러운 회식",
    videoId: "tkQ-76qKpZM",
    dialogues: [
      {
        id: "d15_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 밤에 한잔하러 갈래?",
        en: "Do you want to go grab a drink tonight?",
        time: "00:44",
        seconds: 44,
        note: "grab a drink / grab a bite : 가볍게 한잔하다 / 간단히 먹다",
        extras: [
          { en: "Let's go grab a coffee.", kr: "커피 한잔하러 가자." }
        ]
      },
      {
        id: "d15_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오늘 회식이 잡혀 있어.",
        en: "We have a company dinner scheduled today.",
        time: "01:12",
        seconds: 72,
        note: "company dinner : 회식 / have something scheduled : ~가 예정되어 있다",
        extras: []
      },
      {
        id: "d15_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "갑자기 잡힌 거야?",
        en: "Was it arranged on short notice?",
        time: "01:46",
        seconds: 106,
        note: "on short notice : 촉박하게, 갑작스럽게",
        extras: [
          { en: "Thanks for coming on short notice.", kr: "갑작스러운 요청에도 와줘서 고마워." }
        ]
      },
      {
        id: "d15_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 팀장님이 갑자기 결정하셨어.",
        en: "Yeah, our team manager made a last-minute decision.",
        time: "02:18",
        seconds: 138,
        note: "last-minute decision : 막판(임박한) 결정",
        extras: [
          { en: "a last-minute change", kr: "마지막 순간의 변경" }
        ]
      },
      {
        id: "d15_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "빠질 수 없는 자리야?",
        en: "Can't you get out of it?",
        time: "02:50",
        seconds: 170,
        note: "get out of ~ : (약속, 의무 등에서) 빠져나오다, 피하다",
        extras: [
          { en: "I can't get out of this meeting.", kr: "이 회의에서 빠질 수가 없어." }
        ]
      },
      {
        id: "d15_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "필수 참석이라 어쩔 수 없어.",
        en: "Attendance is mandatory, so I have no choice.",
        time: "03:15",
        seconds: 195,
        note: "mandatory : 의무적인, 필수의 / have no choice : 선택의 여지가 없다",
        extras: []
      }
    ]
  },

  // --- DAY 016 ---
  {
    day: 16,
    dayFormatted: "DAY 016",
    title: "길을 잃었어",
    videoId: "sDqJhETsGKI",
    dialogues: [
      {
        id: "d16_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어디야? 약속 시간에 늦었잖아.",
        en: "Where are you? You're late for the appointment.",
        time: "00:43",
        seconds: 43,
        note: "be late for ~ : ~에 늦다 / appointment : 약속",
        extras: []
      },
      {
        id: "d16_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "미안해. 근처에서 완전히 길을 잃었어.",
        en: "I'm sorry. I got totally lost near here.",
        time: "01:08",
        seconds: 68,
        note: "get lost : 길을 잃다 / totally : 완전히",
        extras: [
          { en: "I lost my way.", kr: "길을 잃었어요." }
        ]
      },
      {
        id: "d16_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "주변에 눈에 띄는 랜드마크 있어?",
        en: "Are there any landmarks around you?",
        time: "01:42",
        seconds: 102,
        note: "landmark : 눈에 띄는 건물이나 지형물",
        extras: []
      },
      {
        id: "d16_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "큰 주유소 앞에 서 있어.",
        en: "I'm standing in front of a big gas station.",
        time: "02:11",
        seconds: 131,
        note: "in front of ~ : ~의 앞에 / gas station : 주유소",
        extras: []
      },
      {
        id: "d16_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "거기 가만히 있어. 내가 데리러 갈게.",
        en: "Stay right there. I'll come pick you up.",
        time: "02:40",
        seconds: 160,
        note: "Stay right there : 거기 그대로 있어 / come pick somebody up : 데리러 가다",
        extras: []
      },
      {
        id: "d16_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말 고마워. 기다리고 있을게.",
        en: "Thanks a lot. I'll be waiting for you.",
        time: "03:05",
        seconds: 185,
        note: "wait for somebody : ~를 기다리다",
        extras: []
      }
    ]
  },

  // --- DAY 017 ---
  {
    day: 17,
    dayFormatted: "DAY 017",
    title: "다이어트",
    videoId: "UbQfQqVbxkk",
    dialogues: [
      {
        id: "d17_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘 몸매가 정말 날씬해졌어.",
        en: "You've gotten really in shape these days.",
        time: "00:45",
        seconds: 45,
        note: "get in shape / be in shape : 몸매를 가꾸다, 좋은 몸 상태를 유지하다",
        extras: [
          { en: "be out of shape", kr: "운동 부족이다, 체형이 무너지다" }
        ]
      },
      {
        id: "d17_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "식단을 조절하고 헬스장에 꾸준히 다니고 있어.",
        en: "I've been watching my diet and hitting the gym regularly.",
        time: "01:15",
        seconds: 75,
        note: "watch one's diet : 식단을 조절하다 / hit the gym : 헬스장에 가다",
        extras: []
      },
      {
        id: "d17_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "효과가 대단한데! 비결이 뭐야?",
        en: "It really paid off! What's your secret?",
        time: "01:50",
        seconds: 110,
        note: "pay off : 성과를 거두다, 빛을 발하다",
        extras: [
          { en: "Hard work pays off.", kr: "노력은 보상을 받는 법이다." }
        ]
      },
      {
        id: "d17_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "야식을 끊은 게 가장 큰 비결이야.",
        en: "Cutting out late-night snacks was the biggest factor.",
        time: "02:22",
        seconds: 142,
        note: "cut out ~ : ~을 끊다(중단하다) / late-night snacks : 야식",
        extras: []
      },
      {
        id: "d17_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나도 독하게 마음먹고 시작해야겠어.",
        en: "I should make up my mind and get started too.",
        time: "02:54",
        seconds: 174,
        note: "make up one's mind : 결심하다, 마음먹다",
        extras: []
      },
      {
        id: "d17_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "작심삼일로 끝나지 않게 조심해.",
        en: "Make sure your resolution doesn't fizzle out.",
        time: "03:20",
        seconds: 200,
        note: "fizzle out : 흐지부지 끝나다 (작심삼일)",
        extras: []
      }
    ]
  },

  // --- DAY 018 ---
  {
    day: 18,
    dayFormatted: "DAY 018",
    title: "날씨가 왜 이래",
    videoId: "PZddm9C3HcI",
    dialogues: [
      {
        id: "d18_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "하늘 좀 봐. 금방이라도 비가 쏟아질 것 같아.",
        en: "Look at the sky. It looks like it's going to pour.",
        time: "00:44",
        seconds: 44,
        note: "pour : (비가) 퍼붓다, 쏟아지다",
        extras: [
          { en: "It's raining cats and dogs.", kr: "비가 억수같이 쏟아진다." }
        ]
      },
      {
        id: "d18_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "일기예보에서 오늘 맑다고 했는데.",
        en: "The weather forecast said it would be sunny today.",
        time: "01:10",
        seconds: 70,
        note: "weather forecast : 일기예보",
        extras: []
      },
      {
        id: "d18_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "날씨가 정말 변덕스럽네.",
        en: "The weather is so unpredictable.",
        time: "01:42",
        seconds: 102,
        note: "unpredictable : 예측할 수 없는, 변덕스러운",
        extras: [
          { en: "freak weather", kr: "이상 기후" }
        ]
      },
      {
        id: "d18_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우산 챙겨왔어?",
        en: "Did you bring an umbrella with you?",
        time: "02:14",
        seconds: 134,
        note: "bring ~ with you : ~을 챙겨오다",
        extras: []
      },
      {
        id: "d18_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아니, 두고 왔어. 편의점에서 하나 사야겠어.",
        en: "No, I left it behind. I should buy one at the convenience store.",
        time: "02:45",
        seconds: 165,
        note: "leave something behind : 뒤에 두고 오다 / convenience store : 편의점",
        extras: []
      },
      {
        id: "d18_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내 우산 같이 쓰자. 내가 씌워줄게.",
        en: "We can share mine. I'll share an umbrella with you.",
        time: "03:15",
        seconds: 195,
        note: "share an umbrella with ~ : ~와 우산을 같이 쓰다",
        extras: []
      }
    ]
  },

  // --- DAY 019 ---
  {
    day: 19,
    dayFormatted: "DAY 019",
    title: "느낌이 필요해",
    videoId: "BDUIAVy82nE",
    dialogues: [
      {
        id: "d19_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "새 프로젝트 아이디어가 전혀 안 떠올라.",
        en: "I can't come up with any ideas for the new project.",
        time: "00:43",
        seconds: 43,
        note: "come up with ~ : (아이디어 등을) 떠올리다, 생각해 내다",
        extras: []
      },
      {
        id: "d19_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너무 부담 갖지 말고 머리를 식혀봐.",
        en: "Don't put too much pressure on yourself. Clear your head.",
        time: "01:12",
        seconds: 72,
        note: "put pressure on ~ : ~에게 부담을 주다 / clear one's head : 머리를 식히다",
        extras: []
      },
      {
        id: "d19_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "마감일이 코앞이라 마음이 급해.",
        en: "The deadline is right around the corner, so I'm anxious.",
        time: "01:48",
        seconds: 108,
        note: "right around the corner : (시간, 공간적으로) 코앞에 닥친",
        extras: []
      },
      {
        id: "d19_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "바람이나 쐬러 나가자. 영감을 얻을 수도 있잖아.",
        en: "Let's go get some fresh air. You might get some inspiration.",
        time: "02:20",
        seconds: 140,
        note: "get fresh air : 바람을 쐬다 / get inspiration : 영감을 얻다",
        extras: []
      },
      {
        id: "d19_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋아. 기분 전환이 필요하긴 해.",
        en: "Sounds good. I definitely need a change of pace.",
        time: "02:51",
        seconds: 171,
        note: "a change of pace : 기분 전환, 일상의 변화",
        extras: []
      },
      {
        id: "d19_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 맛있는 커피 한잔 살게.",
        en: "Coffee is on me. Let's go.",
        time: "03:16",
        seconds: 196,
        note: "Something is on me : ~는 내가 낼게(살게)",
        extras: [
          { en: "It's my treat.", kr: "내가 대접할게." }
        ]
      }
    ]
  },

  // --- DAY 020 ---
  {
    day: 20,
    dayFormatted: "DAY 020",
    title: "야식 먹고 싶어",
    videoId: "DrF9G5LpQLY",
    dialogues: [
      {
        id: "d20_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 시간에 갑자기 치킨이 너무 당겨.",
        en: "I'm craving fried chicken all of a sudden at this hour.",
        time: "00:44",
        seconds: 44,
        note: "crave ~ : ~가 간절히 당기다(먹고 싶다) / all of a sudden : 갑자기",
        extras: [
          { en: "I have a craving for pizza.", kr: "피자가 너무 당겨." }
        ]
      },
      {
        id: "d20_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지금 밤 11시야. 살찌고 싶어?",
        en: "It's 11 PM now. Do you want to gain weight?",
        time: "01:10",
        seconds: 70,
        note: "gain weight : 살이 찌다",
        extras: []
      },
      {
        id: "d20_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 하루 종일 일하느라 힘들었단 말이야.",
        en: "I've had a rough day working all day long.",
        time: "01:45",
        seconds: 105,
        note: "have a rough day : 힘든 하루를 보내다 / all day long : 하루 종일",
        extras: []
      },
      {
        id: "d20_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내일 아침에 얼굴 붓는 건 어쩌려고 그래?",
        en: "What about your face getting bloated tomorrow morning?",
        time: "02:18",
        seconds: 138,
        note: "face getting bloated / puffy : 얼굴이 붓다",
        extras: []
      },
      {
        id: "d20_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "맛있게 먹으면 0칼로리잖아!",
        en: "Guilt-free calories don't count!",
        time: "02:50",
        seconds: 170,
        note: "don't count : 포함되지 않는다 (위트 있는 표현)",
        extras: []
      },
      {
        id: "d20_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "못 말린다 정말. 반반으로 시키자.",
        en: "There's no stopping you. Let's order half and half.",
        time: "03:15",
        seconds: 195,
        note: "There is no stopping you : 넌 정말 못 말린다 / half and half : 반반",
        extras: []
      }
    ]
  },
  // --- DAY 021 ---
  {
    day: 21,
    dayFormatted: "DAY 021",
    title: "건망증 대장",
    videoId: "XDm5_0C7nJ4",
    dialogues: [
      {
        id: "d21_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이런! 200달러를 날리게 생겼네.",
        en: "Oh, no! $200 is down the drain.",
        time: "00:44",
        seconds: 44,
        note: "go down the drain / be down the drain : (배수구로 흘러내려 가듯) 수포로 돌아가다, 돈을 날리다",
        extras: [
          { en: "Everything has gone down the drain.", kr: "모든 것이 수포로 돌아갔어." },
          { en: "My plan went down the drain.", kr: "내 계획이 물거품이 되어 버렸어." }
        ]
      },
      {
        id: "d21_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "뭐 잃어버리기라도 했어?",
        en: "Did you lose something or what?",
        time: "01:19",
        seconds: 79,
        note: "or what? : (문장 끝에 붙여 짜증이나 의구심을 나타내며) 아니면 뭐란 말이야?",
        extras: []
      },
      {
        id: "d21_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "휴게소에 선글라스를 두고 온 것 같아.",
        en: "I think I left my sunglasses in the rest area.",
        time: "01:45",
        seconds: 105,
        note: "leave something in/at ~ : ~에 물건을 두고 오다 / rest area : 고속도로 휴게소",
        extras: [
          { en: "I left my bag on the bus.", kr: "가방을 버스에 두고 내린 것 같아." },
          { en: "I left my passport at home.", kr: "여권을 집에 두고 온 것 같아." }
        ]
      },
      {
        id: "d21_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "두고 왔다고? 농담하지 마.",
        en: "You left them behind? Stop pulling my leg.",
        time: "02:15",
        seconds: 135,
        note: "leave ~ behind : 뒤에 남겨두고 오다 / pull one's leg : 농담하다, 놀리다",
        extras: [
          { en: "Are you pulling my leg?", kr: "너 지금 농담하는 거지?" }
        ]
      },
      {
        id: "d21_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "확실해. 샅샅이 찾아봤어.",
        en: "I'm positive. I searched high and low.",
        time: "03:07",
        seconds: 187,
        note: "be positive : 확신하다 (=be sure) / search high and low : 샅샅이 (구석구석) 뒤지다",
        extras: [
          { en: "I searched high and low for my car keys.", kr: "차 키를 찾으려고 구석구석 다 뒤졌어." }
        ]
      },
      {
        id: "d21_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "시도 때도 없이 자랑하더니 꼴좋다.",
        en: "You were showing them off all the time.",
        time: "03:46",
        seconds: 226,
        note: "show off : 과시하다, 자랑하다 / all the time : 항상, 시도 때도 없이",
        extras: [
          { en: "She likes to show off her cooking skills.", kr: "그녀는 요리 실력을 뽐내는 걸 좋아해." }
        ]
      }
    ]
  },

  // --- DAY 022 ---
  {
    day: 22,
    dayFormatted: "DAY 022",
    title: "짠돌이 친구",
    videoId: "V8TJbtxk4sk",
    dialogues: [
      {
        id: "d22_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "점심 약속 있어?",
        en: "Do you have any plans for lunch?",
        time: "00:49",
        seconds: 49,
        note: "have plans for ~ : ~ 약속이나 일정이 있다 (약속이 하나여도 plans 복수 사용)",
        extras: [
          { en: "I have plans with my girlfriend.", kr: "여자친구랑 선약이 있어." }
        ]
      },
      {
        id: "d22_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아직. 오랜만에 나가서 먹을까?",
        en: "Not yet. Shall we eat out for a change?",
        time: "02:13",
        seconds: 133,
        note: "eat out : 외식하다 / for a change : 기분 전환 삼아, 오랜만에",
        extras: [
          { en: "Let's go catch a movie for a change.", kr: "기분 전환 삼아 영화 보러 가자." }
        ]
      },
      {
        id: "d22_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "좋은 곳을 알고 있어. 작지만 검증된 맛집이야.",
        en: "I know a great place. It's a hole-in-the-wall, but it's tried and true.",
        time: "02:36",
        seconds: 156,
        note: "hole-in-the-wall : 작고 허름하지만 맛있는 숨은 식당 / tried and true : 검증된, 신뢰할 수 있는",
        extras: [
          { en: "It's a hole-in-the-wall, but the food is good.", kr: "가게는 허름하지만 음식은 훌륭해." }
        ]
      },
      {
        id: "d22_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 살게. 지난번에 네가 샀잖아.",
        en: "I got it. You treated me last time.",
        time: "03:15",
        seconds: 195,
        note: "I got it : 내가 계산할게 / treat somebody : ~에게 한턱내다",
        extras: [
          { en: "Let me treat you this time.", kr: "이번에는 내가 낼게." }
        ]
      },
      {
        id: "d22_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "번갈아가며 사지 않아도 돼. 친구 좋다는 게 뭐야?",
        en: "We don't have to take turns. What are friends for?",
        time: "03:51",
        seconds: 231,
        note: "take turns + 동사-ing : 번갈아 가며 ~하다 / What are friends for? : 친구 좋다는 게 뭐야?",
        extras: [
          { en: "That's what friends are for.", kr: "그런 게 다 친구 좋다는 거지." }
        ]
      },
      {
        id: "d22_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "싼 건 내가 살게. 넌 대신 저녁 사.",
        en: "I can buy something cheap. You pay for dinner instead.",
        time: "04:50",
        seconds: 290,
        note: "pay for ~ : ~의 비용을 치르다 / instead : 대신에",
        extras: []
      }
    ]
  },

  // --- DAY 023 ---
  {
    day: 23,
    dayFormatted: "DAY 023",
    title: "해외여행 추천",
    videoId: "6xn0Vd1GndA",
    dialogues: [
      {
        id: "d23_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "최근에 다낭에 다녀왔다면서?",
        en: "I heard you've been to Da Nang recently.",
        time: "00:51",
        seconds: 51,
        note: "have been to + 장소 : ~에 다녀온 적이 있다, 갔다 오다",
        extras: [
          { en: "Have you ever been to Paris?", kr: "파리에 가본 적 있어?" }
        ]
      },
      {
        id: "d23_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말 최고였어! 강력 추천해.",
        en: "It couldn't be better! I highly recommend it.",
        time: "01:22",
        seconds: 82,
        note: "It couldn't be better : 더할 나위 없이 좋다, 최고다 / highly recommend : 강력히 추천하다",
        extras: [
          { en: "Your timing couldn't be better.", kr: "타이밍이 정말 완벽해." }
        ]
      },
      {
        id: "d23_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "비행기 표를 저가 항공사에서 구했어?",
        en: "You got the plane tickets from a low-cost carrier?",
        time: "02:17",
        seconds: 137,
        note: "low-cost carrier (LCC) : 저가 항공사",
        extras: []
      },
      {
        id: "d23_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 저렴해. 300달러 정도 들었어.",
        en: "Yeah, it's easy on the wallet. It only cost around $300.",
        time: "02:31",
        seconds: 151,
        note: "easy on the wallet : 지갑 부담이 덜한, 가격이 저렴한",
        extras: [
          { en: "Plane tickets are easy on the wallet in the off-season.", kr: "비수기에는 비행기 표가 저렴해." }
        ]
      },
      {
        id: "d23_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "듣기만 해도 설렌다. 현지 음식은 어땠어?",
        en: "I'm thrilled to hear it. How about the local cuisine?",
        time: "03:01",
        seconds: 181,
        note: "be thrilled to + 동사원형 : ~하게 되어 매우 설레다 / local cuisine : 현지 요리/음식",
        extras: [
          { en: "French cuisine / Italian cuisine", kr: "프랑스 요리 / 이탈리아 요리" }
        ]
      },
      {
        id: "d23_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "대체로 내 입맛에 맞지는 않았어.",
        en: "Mostly, the food was not to my taste.",
        time: "03:56",
        seconds: 236,
        note: "not to one's taste : 입맛(취향)에 맞지 않는",
        extras: [
          { en: "This music is not to my taste.", kr: "이 음악은 내 취향이 아니야." }
        ]
      }
    ]
  },

  // --- DAY 024 ---
  {
    day: 24,
    dayFormatted: "DAY 024",
    title: "국물이 시원하다",
    videoId: "iV5A21ECYks",
    dialogues: [
      {
        id: "d24_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "바로 이 맛이야! 숙취가 좀 풀린다.",
        en: "This hits the spot. It's relieving my hangover.",
        time: "00:44",
        seconds: 44,
        note: "hit the spot : (원하던 맛이나 상태에) 딱 들어맞다, 바로 이 맛이다 / relieve a hangover : 숙취를 풀다",
        extras: []
      },
      {
        id: "d24_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "상태 안 좋아 보이네. 왜 그렇게 많이 마셨어?",
        en: "You look terrible. Why did you drink so much?",
        time: "01:35",
        seconds: 95,
        note: "look terrible : (안색이나 상태가) 안 좋아 보이다",
        extras: [
          { en: "You look upset.", kr: "너 화나 보여." }
        ]
      },
      {
        id: "d24_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아무리 마셔도 질리지 않는 걸 어떡해.",
        en: "No matter how much I drink, it never gets old.",
        time: "02:05",
        seconds: 125,
        note: "No matter how ~ : 아무리 ~하더라도 / never gets old : 결코 질리지 않는다",
        extras: [
          { en: "No matter how much I eat, I don't gain weight.", kr: "난 아무리 많이 먹어도 살이 안 쪄." }
        ]
      },
      {
        id: "d24_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너 알코올에 중독될까 봐 걱정돼.",
        en: "I'm worried that you'll get addicted to alcohol.",
        time: "03:00",
        seconds: 180,
        note: "be worried that ~ : ~할까 봐 걱정되다 / get addicted to ~ : ~에 중독되다",
        extras: []
      },
      {
        id: "d24_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "걱정해 줘서 고마워. 커피나 한잔하러 가자.",
        en: "Thanks for your concern. Let's go grab some coffee.",
        time: "03:16",
        seconds: 196,
        note: "Thanks for your concern : 걱정해 줘서 고마워 / grab some coffee : 커피 한잔하다",
        extras: [
          { en: "Let's go grab a beer.", kr: "맥주 한잔하러 가자." }
        ]
      },
      {
        id: "d24_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "쇼핑몰 있는 곳으로 가자.",
        en: "Let's go to the place that has a shopping mall.",
        time: "03:56",
        seconds: 236,
        note: "the place that has ~ : ~가 있는 장소",
        extras: []
      }
    ]
  },

  // --- DAY 025 ---
  {
    day: 25,
    dayFormatted: "DAY 025",
    title: "생활비 고민",
    videoId: "HXYIBUiZwDA",
    dialogues: [
      {
        id: "d25_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 달 생활비가 빠듯해.",
        en: "Money is tight for living expenses this month.",
        time: "00:45",
        seconds: 45,
        note: "Money is tight : 돈(예산)이 빠듯하다 / living expenses : 생활비",
        extras: [
          { en: "My budget is tight.", kr: "내 예산이 빠듯해." }
        ]
      },
      {
        id: "d25_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "월급이 통장을 그냥 스쳐 지나가는구나.",
        en: "Your paycheck is just passing through your bank account.",
        time: "01:15",
        seconds: 75,
        note: "paycheck : 급여, 월급 / pass through : 통과하다, 스쳐 지나가다",
        extras: []
      },
      {
        id: "d25_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "불필요한 지출을 줄여야겠어.",
        en: "I need to cut back on unnecessary spending.",
        time: "01:50",
        seconds: 110,
        note: "cut back on ~ : ~을 줄이다 / unnecessary spending : 불필요한 지출",
        extras: [
          { en: "cut back on expenses", kr: "지출을 줄이다" }
        ]
      },
      {
        id: "d25_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가계부를 쓰는 게 도움이 될 거야.",
        en: "Keeping a household ledger will be helpful.",
        time: "02:25",
        seconds: 145,
        note: "keep a household ledger : 가계부를 쓰다",
        extras: []
      },
      {
        id: "d25_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "작은 것부터 아껴 써야겠어.",
        en: "I should scrimp and save on small things.",
        time: "02:55",
        seconds: 175,
        note: "scrimp and save : 절약하다, 알뜰살뜰 아끼다",
        extras: []
      },
      {
        id: "d25_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "티끌 모아 태산이라는 말도 있잖아.",
        en: "Every little bit counts, as they say.",
        time: "03:25",
        seconds: 205,
        note: "Every little bit counts : 작은 것도 다 도움이 된다 (티끌 모아 태산)",
        extras: []
      }
    ]
  },

  // --- DAY 026 ---
  {
    day: 26,
    dayFormatted: "DAY 026",
    title: "과일 코너에서",
    videoId: "NnN7sswO4eg",
    dialogues: [
      {
        id: "d26_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이 사과들 정말 싱싱해 보인다.",
        en: "These apples look really fresh.",
        time: "00:43",
        seconds: 43,
        note: "look fresh : 신선해 보이다",
        extras: []
      },
      {
        id: "d26_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지금이 제철이라 제일 달고 맛있을 때야.",
        en: "They're in season now, so they're at their sweetest.",
        time: "01:10",
        seconds: 70,
        note: "in season : 제철인 / out of season : 제철이 아닌",
        extras: [
          { en: "Strawberries are in season.", kr: "딸기가 제철이야." }
        ]
      },
      {
        id: "d26_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "한 상자 사서 나눠 가질까?",
        en: "Shall we buy a box and split it?",
        time: "01:45",
        seconds: 105,
        note: "split : 나누다, 반씩 가르다",
        extras: []
      },
      {
        id: "d26_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아. 마침 1+1 행사 중이네.",
        en: "Sure. They happen to be on a buy-one-get-one-free sale.",
        time: "02:20",
        seconds: 140,
        note: "buy-one-get-one-free (BOGO) : 1+1 무료 증정",
        extras: []
      },
      {
        id: "d26_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "맛보기도 할 수 있나 봐.",
        en: "It looks like we can try a sample.",
        time: "02:50",
        seconds: 170,
        note: "try a sample : 시식해 보다",
        extras: []
      },
      {
        id: "d26_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "먹어보고 결정하자.",
        en: "Let's taste it and decide.",
        time: "03:15",
        seconds: 195,
        note: "decide : 결정하다",
        extras: []
      }
    ]
  },

  // --- DAY 027 ---
  {
    day: 27,
    dayFormatted: "DAY 027",
    title: "자동차가 말썽이야",
    videoId: "F0Rm58CLvyM",
    dialogues: [
      {
        id: "d27_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내 차가 또 말썽을 부리네.",
        en: "My car is acting up again.",
        time: "00:45",
        seconds: 45,
        note: "act up : (기계나 신체 부위가) 말을 안 듣다, 말썽을 부리다",
        extras: [
          { en: "My computer is acting up.", kr: "컴퓨터가 또 말썽이야." }
        ]
      },
      {
        id: "d27_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "시동이 안 걸려?",
        en: "Won't the engine start?",
        time: "01:12",
        seconds: 72,
        note: "engine won't start : 시동이 안 걸리다",
        extras: []
      },
      {
        id: "d27_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "응, 배터리가 방전된 것 같아.",
        en: "Yeah, I think the battery is dead.",
        time: "01:45",
        seconds: 105,
        note: "battery is dead : 배터리가 방전되다",
        extras: [
          { en: "My phone battery is dead.", kr: "휴대폰 배터리가 다 닳았어." }
        ]
      },
      {
        id: "d27_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "보험회사에 긴급출동 서비스를 요청해.",
        en: "Call roadside assistance through your insurance company.",
        time: "02:18",
        seconds: 138,
        note: "roadside assistance : 긴급출동 서비스",
        extras: []
      },
      {
        id: "d27_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오래 걸릴까 봐 걱정돼.",
        en: "I'm worried it might take a long time.",
        time: "02:48",
        seconds: 168,
        note: "take a long time : 시간이 오래 걸리다",
        extras: []
      },
      {
        id: "d27_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "보통 20분 내로 와.",
        en: "They usually show up within 20 minutes.",
        time: "03:15",
        seconds: 195,
        note: "show up : 나타나다, 도착하다 / within ~ : ~ 이내에",
        extras: []
      }
    ]
  },

  // --- DAY 028 ---
  {
    day: 28,
    dayFormatted: "DAY 028",
    title: "단 것 좀 그만 먹어",
    videoId: "pHEGdO-H8Xg",
    dialogues: [
      {
        id: "d28_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "초콜릿 또 먹는 거야?",
        en: "Are you eating chocolate again?",
        time: "00:44",
        seconds: 44,
        note: "again : 또, 다시",
        extras: []
      },
      {
        id: "d28_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "피곤할 때는 당 충전을 좀 해줘야 해.",
        en: "I need a sugar rush when I'm tired.",
        time: "01:10",
        seconds: 70,
        note: "sugar rush : 당분 섭취로 인한 급격한 활력(당 충전)",
        extras: []
      },
      {
        id: "d28_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 단것을 너무 심하게 좋아해.",
        en: "You have such a sweet tooth.",
        time: "01:42",
        seconds: 102,
        note: "have a sweet tooth : 단것을 유난히 좋아하다",
        extras: []
      },
      {
        id: "d28_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "스트레스 받을 때 기분 전환이 되거든.",
        en: "It cheers me up when I'm stressed out.",
        time: "02:15",
        seconds: 135,
        note: "cheer somebody up : 기운을 북돋우다, 기분 전환을 시켜주다",
        extras: []
      },
      {
        id: "d28_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "혈당 건강도 생각해야지.",
        en: "You should think about your blood sugar levels.",
        time: "02:46",
        seconds: 166,
        note: "blood sugar level : 혈당 수치",
        extras: []
      },
      {
        id: "d28_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오늘까지만 먹고 내일부터 줄일게.",
        en: "I'll enjoy it today and cut down starting tomorrow.",
        time: "03:15",
        seconds: 195,
        note: "cut down : 양을 줄이다",
        extras: []
      }
    ]
  },

  // --- DAY 029 ---
  {
    day: 29,
    dayFormatted: "DAY 029",
    title: "반려동물 키우기",
    videoId: "tdxbaFyfBVA",
    dialogues: [
      {
        id: "d29_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "강아지 한 마리 입양할까 고민 중이야.",
        en: "I'm thinking of adopting a puppy.",
        time: "00:45",
        seconds: 45,
        note: "think of ~ing : ~할까 고려(고민) 중이다 / adopt : 입양하다",
        extras: []
      },
      {
        id: "d29_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말 큰 책임감이 따르는 일이야.",
        en: "It comes with huge responsibility.",
        time: "01:12",
        seconds: 72,
        note: "come with ~ : ~이 수반되다, 뒤따르다 / responsibility : 책임감",
        extras: []
      },
      {
        id: "d29_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "알아. 매일 산책도 시켜줘야 하잖아.",
        en: "I know. I'd have to walk it every day.",
        time: "01:48",
        seconds: 108,
        note: "walk a dog : 개를 산책시키다",
        extras: []
      },
      {
        id: "d29_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "병원비용도 만만치 않게 들어.",
        en: "Vet bills can cost an arm and a leg.",
        time: "02:22",
        seconds: 142,
        note: "vet : 수의사, 동물병원 / cost an arm and a leg : 매우 큰 비용이 들다",
        extras: []
      },
      {
        id: "d29_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "신중하게 더 생각해 봐야겠어.",
        en: "I should give it more careful thought.",
        time: "02:52",
        seconds: 172,
        note: "give it careful thought : 신중히 생각해 보다",
        extras: []
      },
      {
        id: "d29_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 평생을 책임져야 하는 생명이니까.",
        en: "Right, because it's a life you must commit to.",
        time: "03:20",
        seconds: 200,
        note: "commit to ~ : ~에 헌신하다, 책임을 다하다",
        extras: []
      }
    ]
  },

  // --- DAY 030 ---
  {
    day: 30,
    dayFormatted: "DAY 030",
    title: "가짜뉴스",
    videoId: "xR5OevZIMOg",
    dialogues: [
      {
        id: "d30_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "인터넷에서 본 이 기사 진짜일까?",
        en: "Do you think this article online is true?",
        time: "00:43",
        seconds: 43,
        note: "article : 기사 / online : 온라인상의",
        extras: []
      },
      {
        id: "d30_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제목이 너무 낚시성인 것 같은데.",
        en: "The headline sounds like clickbait.",
        time: "01:10",
        seconds: 70,
        note: "headline : 기사 제목 / clickbait : 낚시성 기사/콘텐츠",
        extras: []
      },
      {
        id: "d30_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘은 가짜뉴스가 너무 판을 쳐.",
        en: "Fake news is rampant these days.",
        time: "01:45",
        seconds: 105,
        note: "fake news : 가짜뉴스 / rampant : 걷잡을 수 없이 만연한, 판치는",
        extras: []
      },
      {
        id: "d30_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "출처를 반드시 확인해 봐야 해.",
        en: "You should definitely verify the source.",
        time: "02:18",
        seconds: 138,
        note: "verify : 사실 여부를 확인하다, 입증하다 / source : 출처",
        extras: []
      },
      {
        id: "d30_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "믿기 전에 한 번 더 걸러들어야겠어.",
        en: "I should take it with a grain of salt.",
        time: "02:50",
        seconds: 170,
        note: "take ~ with a grain of salt : ~을 가려서(에누리해서) 듣다",
        extras: []
      },
      {
        id: "d30_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "무턱대고 다른 사람에게 퍼 나르면 안 돼.",
        en: "Don't spread it blindly to others.",
        time: "03:16",
        seconds: 196,
        note: "spread : 퍼뜨리다 / blindly : 무턱대고, 맹목적으로",
        extras: []
      }
    ]
  },
  // --- DAY 031 ---
  {
    day: 31,
    dayFormatted: "DAY 031",
    title: "때 이른 더위",
    videoId: "KWMr72SfdNU",
    dialogues: [
      {
        id: "d31_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너무 덥다. 살인적이야.",
        en: "It's terribly hot. This is murder.",
        time: "00:49",
        seconds: 49,
        note: "terribly hot : 끔찍하게 덥다 / This is murder : (날씨 등이) 살인적이다, 참기 힘들다",
        extras: [
          { en: "scorching hot", kr: "타는 듯이 더운" },
          { en: "sizzling hot", kr: "(기름이 끓듯) 찌는 듯이 더운" }
        ]
      },
      {
        id: "d31_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아직 5월인데 벌써 더워.",
        en: "It's still May, but it's already hot.",
        time: "01:16",
        seconds: 76,
        note: "still : 아직 / already : 벌써, 이미",
        extras: []
      },
      {
        id: "d31_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그래도 추운 겨울보다 더운 여름이 좋아.",
        en: "Still, I prefer hot summer to cold winter.",
        time: "01:37",
        seconds: 97,
        note: "prefer A to B : B보다 A를 더 좋아하다/선호하다",
        extras: [
          { en: "I prefer walking to running.", kr: "난 달리는 것보다 걷는 게 더 좋아." },
          { en: "I prefer the countryside to the city.", kr: "난 도시보다 시골이 더 좋아." }
        ]
      },
      {
        id: "d31_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그러고 보니 넌 땀을 별로 안 흘리는 것 같은데.",
        en: "That reminds me, you don't seem to sweat a lot.",
        time: "02:04",
        seconds: 124,
        note: "That reminds me : 그러고 보니, 생각난 김에 / don't seem to ~ : ~하지 않는 것 같다 / sweat : 땀을 흘리다",
        extras: [
          { en: "That reminds me, I need to withdraw some cash.", kr: "그러고 보니 나 현금 좀 찾아야 해." },
          { en: "You don't seem to have a fever.", kr: "너 열은 없는 것 같은데." }
        ]
      },
      {
        id: "d31_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "말 나온 김에 운동이나 좀 하자.",
        en: "Since you bring it up, let's get some exercise.",
        time: "03:00",
        seconds: 180,
        note: "Since you bring it up : 말 나온 김에, 얘기가 나와서 말인데 / get some exercise : 운동하다",
        extras: [
          { en: "Now that you mention it", kr: "네가 그 말을 하니 말인데" }
        ]
      },
      {
        id: "d31_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "땀 흘리고 나서 아이스커피 한잔 살게.",
        en: "I'll buy iced coffee after working up a sweat.",
        time: "03:48",
        seconds: 228,
        note: "work up a sweat : 땀을 흠뻑 흘리다",
        extras: [
          { en: "work up an appetite", kr: "입맛을 돋우다" },
          { en: "work up the courage", kr: "용기를 내다" }
        ]
      }
    ]
  },

  // --- DAY 032 ---
  {
    day: 32,
    dayFormatted: "DAY 032",
    title: "반려견 돌보기",
    videoId: "NGb6dX4sDB0",
    dialogues: [
      {
        id: "d32_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "있잖아, 부탁 하나 해도 될까?",
        en: "You know what? Can I ask you a favor?",
        time: "00:44",
        seconds: 44,
        note: "You know what? : 있잖아 (대화 환기) / ask somebody a favor : ~에게 부탁하다",
        extras: [
          { en: "Can you do me a favor?", kr: "부탁 하나 들어줄 수 있어?" }
        ]
      },
      {
        id: "d32_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그래, 말해봐. 뭔데?",
        en: "Sure, go ahead. What is it?",
        time: "01:20",
        seconds: 80,
        note: "go ahead : (어서) 말해봐, 진행해",
        extras: []
      },
      {
        id: "d32_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "여행을 좀 가려는데 강아지 좀 봐줄래?",
        en: "I'm going to take a short trip. Can you watch my dog?",
        time: "01:35",
        seconds: 95,
        note: "take a short trip : 짧은 여행을 가다 / watch : 돌보다, 맡아주다",
        extras: [
          { en: "Let's take a short trip this weekend.", kr: "이번 주말에 짧게 여행 다녀오자." }
        ]
      },
      {
        id: "d32_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물론이지. 나 개 좋아하잖아.",
        en: "No problem. You know I'm a dog person.",
        time: "02:21",
        seconds: 141,
        note: "dog person : 개를 좋아하는 사람 (cat person: 고양이를 좋아하는 사람)",
        extras: [
          { en: "people person", kr: "사람들과 잘 어울리는 사교적인 사람" }
        ]
      },
      {
        id: "d32_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "도와줘서 고마워. 선물 사 올게.",
        en: "Thanks for the help. I'll get you a present.",
        time: "02:35",
        seconds: 155,
        note: "get somebody something : ~에게 ~을 사다/갖다주다",
        extras: [
          { en: "I'll get you something to eat.", kr: "먹을 것 좀 갖다줄게." }
        ]
      },
      {
        id: "d32_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정 그렇다면 좋아. 여행 잘 다녀와.",
        en: "Well, if you insist. Have a good trip.",
        time: "03:03",
        seconds: 183,
        note: "if you insist : 정 그렇게 우긴다면(원한다면) 좋아 / Have a good trip : 여행 잘 다녀와",
        extras: []
      }
    ]
  },

  // --- DAY 033 ---
  {
    day: 33,
    dayFormatted: "DAY 033",
    title: "과식의 대가",
    videoId: "mebr6eMGNjk",
    dialogues: [
      {
        id: "d33_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너무 힘들다. 정말 오랜만에 운동하러 갔어.",
        en: "I'm so beat. I haven't hit the gym in ages.",
        time: "00:48",
        seconds: 48,
        note: "be beat : 녹초가 되다, 매우 피곤하다 / in ages : 오랫동안, 정말 오랜만에 / hit the gym : 헬스장에 가다",
        extras: [
          { en: "I haven't played soccer in ages.", kr: "축구 안 한 지 정말 오래됐어." },
          { en: "hit the books / hit the road", kr: "공부하다 / 여행을 떠나다" }
        ]
      },
      {
        id: "d33_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "운동을 그렇게 열심히 하는 특별한 이유가 있어?",
        en: "Any special reason for working out that hard?",
        time: "02:02",
        seconds: 122,
        note: "work out : 운동하다 (주로 피트니스/웨이트) / that hard : 그렇게나 열심히",
        extras: []
      },
      {
        id: "d33_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "휴일에 너무 많이 먹었어. 대가를 치러야지.",
        en: "I pigged out on the holidays. I have to pay for it.",
        time: "02:24",
        seconds: 144,
        note: "pig out : 게걸스럽게 과식하다 / pay for ~ : ~에 대한 대가를 치르다",
        extras: []
      },
      {
        id: "d33_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지금도 좋아 보이는데. 너무 무리하지 마.",
        en: "You're looking good for now. Don't overdo it.",
        time: "02:52",
        seconds: 172,
        note: "for now : 지금으로서는, 현재는 / overdo it : 무리하다, 과하게 하다",
        extras: [
          { en: "Take it easy.", kr: "무리하지 말고 살살 해." }
        ]
      },
      {
        id: "d33_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 기분 좋게 하려고 하는 말인 거 알아.",
        en: "I know you're saying that to make me feel better.",
        time: "03:24",
        seconds: 204,
        note: "make somebody feel better : ~의 기분을 더 낫게(좋게) 만들다",
        extras: [
          { en: "Take a hot bath. It'll make you feel better.", kr: "따뜻한 물에 목욕해 봐. 기분이 한결 나아질 거야." }
        ]
      },
      {
        id: "d33_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아니, 정말이야. 나 거짓말 못하잖아.",
        en: "No, I'm serious. I don't know how to lie.",
        time: "03:46",
        seconds: 226,
        note: "be serious : 진심이다, 농담이 아니다 / know how to ~ : ~하는 법을 알다",
        extras: []
      }
    ]
  },

  // --- DAY 034 ---
  {
    day: 34,
    dayFormatted: "DAY 034",
    title: "옛날로 돌아갈래",
    videoId: "n8rpRyfi4YA",
    dialogues: [
      {
        id: "d34_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "지난 두 달간 체중이 3kg 늘었어.",
        en: "I've put on 3 kilograms over the past two months.",
        time: "00:47",
        seconds: 47,
        note: "put on weight / gain weight : 체중이 늘다 / over the past ~ : 지난 ~ 동안",
        extras: [
          { en: "I suddenly put on some weight.", kr: "갑자기 살이 좀 쪘어." }
        ]
      },
      {
        id: "d34_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "농담이지? 어쩌다 그렇게 됐어?",
        en: "Are you kidding? How did that happen?",
        time: "01:16",
        seconds: 76,
        note: "How did that happen? : 어쩌다 그런 일이 일어났어?",
        extras: []
      },
      {
        id: "d34_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "밤늦게 군것질하는 습관이 생겼거든.",
        en: "I picked up a habit of snacking late at night.",
        time: "01:50",
        seconds: 110,
        note: "pick up a habit : 습관이 들다 / snack : 간식을 먹다 / late at night : 밤늦게",
        extras: [
          { en: "I picked up a habit of getting up early.", kr: "일찍 일어나는 습관이 생겼어." }
        ]
      },
      {
        id: "d34_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "건강을 해치잖아. 원래대로 돌아가야 해.",
        en: "It'll harm your health. You should get back to normal.",
        time: "02:20",
        seconds: 140,
        note: "harm one's health : 건강을 해치다 / get back to normal : 정상(원래 상태)으로 돌아가다",
        extras: [
          { en: "It's time to get back to normal.", kr: "이제 일상으로 돌아갈 때야." }
        ]
      },
      {
        id: "d34_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "맞는 말이야. 나쁜 습관을 고칠 거야.",
        en: "You have a point. I'll kick the bad habit.",
        time: "02:58",
        seconds: 178,
        note: "You have a point : 일리가 있네, 네 말이 맞아 / kick/break a habit : 습관을 끊다/고치다",
        extras: [
          { en: "Please tell me how to break bad habits.", kr: "나쁜 습관 고치는 방법 좀 알려줘." }
        ]
      },
      {
        id: "d34_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "먹을 때 식재료도 따져봐야 해.",
        en: "Take into account ingredients when you eat.",
        time: "03:29",
        seconds: 209,
        note: "take ~ into account : ~을 고려하다, 감안하다 / ingredients : 식재료, 성분",
        extras: [
          { en: "You have to take into account how much you get paid.", kr: "급여를 얼마나 받는지도 고려해야 해." }
        ]
      }
    ]
  },

  // --- DAY 035 ---
  {
    day: 35,
    dayFormatted: "DAY 035",
    title: "자장면 주문",
    videoId: "xG_WoRURChA",
    dialogues: [
      {
        id: "d35_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 점심은 중국집 배달시켜 먹자.",
        en: "Let's order Chinese food for lunch today.",
        time: "00:44",
        seconds: 44,
        note: "order ~ for lunch : 점심으로 ~을 주문하다/배달시키다",
        extras: [
          { en: "Let's get some takeout.", kr: "포장 음식 시켜 먹자." }
        ]
      },
      {
        id: "d35_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아! 난 자장면 곱빼기로 먹을래.",
        en: "Sounds great! I'll go with a large bowl of jajangmyeon.",
        time: "01:10",
        seconds: 70,
        note: "go with ~ : ~을 선택하다 / a large bowl : 곱빼기",
        extras: []
      },
      {
        id: "d35_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "탕수육도 같이 시킬까?",
        en: "Shall we get sweet and sour pork too?",
        time: "01:45",
        seconds: 105,
        note: "sweet and sour pork : 탕수육",
        extras: []
      },
      {
        id: "d35_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "세트 메뉴로 시키면 더 저렴해.",
        en: "It's cheaper if we order the combo meal.",
        time: "02:18",
        seconds: 138,
        note: "combo meal / set menu : 세트 메뉴",
        extras: []
      },
      {
        id: "d35_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "군만두 서비스 주는지 물어봐 줘.",
        en: "Ask them if they can throw in some fried dumplings.",
        time: "02:50",
        seconds: 170,
        note: "throw in ~ : 덤으로(서비스로) 끼워주다 / fried dumplings : 군만두",
        extras: [
          { en: "on the house", kr: "식당 측에서 무료 서비스로 주는" }
        ]
      },
      {
        id: "d35_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "배달앱 요청 사항에 적어둘게.",
        en: "I'll put it in the delivery notes.",
        time: "03:15",
        seconds: 195,
        note: "delivery notes : 배달 요청 사항",
        extras: []
      }
    ]
  },

  // --- DAY 036 ---
  {
    day: 36,
    dayFormatted: "DAY 036",
    title: "신나는 워터파크",
    videoId: "0WomO5Ck7y8",
    dialogues: [
      {
        id: "d36_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 주말에 워터파크 가자.",
        en: "Let's hit the water park this weekend.",
        time: "00:43",
        seconds: 43,
        note: "hit ~ : ~에 가다 / water park : 워터파크",
        extras: []
      },
      {
        id: "d36_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "사람들로 엄청 붐빌 텐데.",
        en: "It's going to be packed with people.",
        time: "01:12",
        seconds: 72,
        note: "be packed with ~ : ~로 꽉 차다, 붐비다",
        extras: [
          { en: "jam-packed", kr: "발 디딜 틈 없이 빽빽한" }
        ]
      },
      {
        id: "d36_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "개장 시간에 맞춰 일찍 가면 돼.",
        en: "We can just get there early right when it opens.",
        time: "01:46",
        seconds: 106,
        note: "right when it opens : 문을 여는 바로 그 시점에",
        extras: []
      },
      {
        id: "d36_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "워터슬라이드 타려면 줄을 오래 서야 해.",
        en: "We'll have to wait in line forever for the water slides.",
        time: "02:20",
        seconds: 140,
        note: "wait in line : 줄 서서 기다리다 / forever : (과장하여) 한참 동안",
        extras: []
      },
      {
        id: "d36_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "기다릴 만한 가치가 있잖아!",
        en: "It's totally worth the wait!",
        time: "02:52",
        seconds: 172,
        note: "worth the wait : 기다릴 가치가 있는",
        extras: [
          { en: "worth every penny", kr: "한 푼도 아깝지 않은" }
        ]
      },
      {
        id: "d36_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 방수팩부터 챙겨야겠다.",
        en: "Alright. I should pack waterproof pouches first.",
        time: "03:18",
        seconds: 198,
        note: "waterproof pouch : 방수 팩/파우치",
        extras: []
      }
    ]
  },

  // --- DAY 037 ---
  {
    day: 37,
    dayFormatted: "DAY 037",
    title: "최신 인기영화",
    videoId: "JRvwC0pHcBc",
    dialogues: [
      {
        id: "d37_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘 박스오피스 1위 영화 봤어?",
        en: "Have you seen the number one movie at the box office?",
        time: "00:44",
        seconds: 44,
        note: "box office : 매표소, 박스오피스(흥행 순위)",
        extras: []
      },
      {
        id: "d37_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아직 못 봤어. 평점이 어때?",
        en: "Not yet. What are the ratings like?",
        time: "01:11",
        seconds: 71,
        note: "What are the ratings like? : 평점이 어때?",
        extras: []
      },
      {
        id: "d37_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "관객 평점도 좋고 입소문이 자자해.",
        en: "It has great reviews and good word of mouth.",
        time: "01:48",
        seconds: 108,
        note: "word of mouth : 입소문",
        extras: [
          { en: "spread by word of mouth", kr: "입소문으로 퍼지다" }
        ]
      },
      {
        id: "d37_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "스포일러 당하기 전에 얼른 봐야겠네.",
        en: "I'd better watch it before getting spoiled.",
        time: "02:22",
        seconds: 142,
        note: "had better + 동사원형 : ~하는 게 좋겠다 / spoil : 스포일러 하다",
        extras: [
          { en: "No spoilers, please.", kr: "스포일러 하지 마세요." }
        ]
      },
      {
        id: "d37_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "주말에는 매진될 수 있으니 예매해 둬.",
        en: "It might sell out on the weekend, so book in advance.",
        time: "02:55",
        seconds: 175,
        note: "sell out : 매진되다 / book in advance : 미리 예매하다",
        extras: []
      },
      {
        id: "d37_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지금 바로 좋은 좌석으로 예매할게.",
        en: "I'll book good seats right away.",
        time: "03:19",
        seconds: 199,
        note: "right away : 즉시, 당장",
        extras: []
      }
    ]
  },

  // --- DAY 038 ---
  {
    day: 38,
    dayFormatted: "DAY 038",
    title: "타고난 수영실력",
    videoId: "EDw36PqIr3w",
    dialogues: [
      {
        id: "d38_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 수영 정말 잘한다!",
        en: "You're such a great swimmer!",
        time: "00:45",
        seconds: 45,
        note: "such a + 형용사 + 명사 : 정말 대단한 ~",
        extras: []
      },
      {
        id: "d38_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어릴 때부터 물을 좋아했어.",
        en: "I've loved being in the water since I was a kid.",
        time: "01:14",
        seconds: 74,
        note: "since I was a kid : 어릴 적부터",
        extras: []
      },
      {
        id: "d38_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "물개처럼 물에 착 달라붙어 수영하네.",
        en: "You take to water like a fish.",
        time: "01:50",
        seconds: 110,
        note: "take to water like a fish : 물 만난 물고기 같다, 타고나다",
        extras: []
      },
      {
        id: "d38_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "따로 레슨을 받은 적은 없어.",
        en: "I've never taken formal lessons though.",
        time: "02:25",
        seconds: 145,
        note: "take lessons : 강습/수업을 받다",
        extras: []
      },
      {
        id: "d38_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "완전 타고난 체질이구나.",
        en: "You're a natural-born swimmer.",
        time: "02:56",
        seconds: 176,
        note: "natural-born : 타고난, 천부적인",
        extras: []
      },
      {
        id: "d38_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "원하면 내가 기본 영법 좀 가르쳐 줄게.",
        en: "I can teach you basic strokes if you want.",
        time: "03:22",
        seconds: 202,
        note: "stroke : (수영) 영법",
        extras: []
      }
    ]
  },

  // --- DAY 039 ---
  {
    day: 39,
    dayFormatted: "DAY 039",
    title: "나 먼저 가 볼게",
    videoId: "uNIsfKnWki4",
    dialogues: [
      {
        id: "d39_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "시간이 벌써 이렇게 됐네. 나 먼저 가볼게.",
        en: "Look at the time. I'd better get going.",
        time: "00:43",
        seconds: 43,
        note: "Look at the time : 벌써 시간이 이렇게 됐네 / had better get going : 가보는 게 좋겠다",
        extras: [
          { en: "I should get going.", kr: "나 이만 가봐야겠어." }
        ]
      },
      {
        id: "d39_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "벌써 가게? 조금만 더 있다 가지.",
        en: "Leaving already? Stay a little longer.",
        time: "01:10",
        seconds: 70,
        note: "stay a little longer : 조금만 더 머무르다",
        extras: []
      },
      {
        id: "d39_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내일 아침 일찍 회의가 있거든.",
        en: "I have a meeting first thing tomorrow morning.",
        time: "01:44",
        seconds: 104,
        note: "first thing in the morning : 아침 일찍 가장 먼저",
        extras: []
      },
      {
        id: "d39_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아쉽다. 조심히 들어가.",
        en: "That's too bad. Get home safely.",
        time: "02:18",
        seconds: 138,
        note: "That's too bad : 아쉽다, 안타깝다 / get home safely : 조심히 들어가",
        extras: []
      },
      {
        id: "d39_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 정말 즐거웠어. 도착하면 톡 할게.",
        en: "I had a blast today. I'll text you when I get home.",
        time: "02:50",
        seconds: 170,
        note: "have a blast : 정말 즐거운 시간을 보내다 / text somebody : ~에게 문자를 보내다",
        extras: []
      },
      {
        id: "d39_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 주말에 다시 연락하자.",
        en: "Sure, let's catch up again this weekend.",
        time: "03:15",
        seconds: 195,
        note: "catch up : 밀린 이야기를 나누다, 만나다",
        extras: []
      }
    ]
  },

  // --- DAY 040 ---
  {
    day: 40,
    dayFormatted: "DAY 040",
    title: "집안 심부름",
    videoId: "tnOjWWM34r4",
    dialogues: [
      {
        id: "d40_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나가는 길에 분리수거 좀 버려줄래?",
        en: "Can you take out the recycling on your way out?",
        time: "00:45",
        seconds: 45,
        note: "take out the recycling : 분리수거를 내놓다 / on your way out : 나가는 길에",
        extras: [
          { en: "take out the trash", kr: "쓰레기를 내다 버리다" }
        ]
      },
      {
        id: "d40_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 종량제 봉투도 사 올까?",
        en: "Sure. Should I buy some trash bags too?",
        time: "01:12",
        seconds: 72,
        note: "trash bag : 쓰레기봉투(종량제 봉투)",
        extras: []
      },
      {
        id: "d40_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "응, 마트에 들러서 20리터짜리로 사다 줘.",
        en: "Yeah, stop by the mart and get the 20-liter ones.",
        time: "01:46",
        seconds: 106,
        note: "stop by ~ : ~에 잠시 들르다",
        extras: []
      },
      {
        id: "d40_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우유나 계란 같은 건 더 필요한 거 없어?",
        en: "Do we need anything else like milk or eggs?",
        time: "02:20",
        seconds: 140,
        note: "anything else : 그 밖에 다른 것",
        extras: []
      },
      {
        id: "d40_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "식빵 하나만 더 사다 줘.",
        en: "Just grab a loaf of bread, please.",
        time: "02:51",
        seconds: 171,
        note: "a loaf of bread : 식빵 한 덩이/봉지",
        extras: []
      },
      {
        id: "d40_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "깜빡하지 않게 목록 적어둘게.",
        en: "I'll make a list so I won't forget.",
        time: "03:17",
        seconds: 197,
        note: "make a list : 목록을 작성하다 / so that ~ : ~하도록",
        extras: []
      }
    ]
  },
  // --- DAY 041 ---
  {
    day: 41,
    dayFormatted: "DAY 041",
    title: "얼리 어답터",
    videoId: "CidQbE_Izr8",
    dialogues: [
      {
        id: "d41_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내 충전기 어디 있지? 배터리가 얼마 없어.",
        en: "Where is my charger? I'm low on battery.",
        time: "00:47",
        seconds: 47,
        note: "be low on ~ : ~가 얼마 남지 않다, 부족하다 / charger : 충전기",
        extras: [
          { en: "I'm low on gas.", kr: "자동차 기름이 거의 떨어졌어." },
          { en: "I'm running low on money.", kr: "돈이 거의 다 떨어져 가." }
        ]
      },
      {
        id: "d41_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네 배터리는 너무 빨리 소모되는 것 같아.",
        en: "I think your battery goes out too quickly.",
        time: "01:09",
        seconds: 69,
        note: "go out : (전기, 불, 배터리 등이) 나가다, 꺼지다",
        extras: [
          { en: "The light goes out at 6 in the morning.", kr: "그 조명은 아침 6시에 꺼져." }
        ]
      },
      {
        id: "d41_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "설상가상으로 액정도 깨졌어. 바꿀 때가 됐나 봐.",
        en: "To add insult to injury, the screen is cracked. I guess it's time to change.",
        time: "01:34",
        seconds: 94,
        note: "to add insult to injury : 설상가상으로, 엎친 데 덮친 격으로 / crack : 금이 가다, 깨지다",
        extras: [
          { en: "I overslept. To add insult to injury, I got a flat tire.", kr: "늦잠을 잤는데 설상가상으로 타이어 펑크까지 났어." }
        ]
      },
      {
        id: "d41_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그건 보험 처리가 돼. 배터리만 교체하면 돼.",
        en: "It can be covered by insurance. You only have to get your battery changed.",
        time: "02:11",
        seconds: 131,
        note: "be covered by insurance : 보험 적용/처리가 되다 / get one's battery changed : 배터리를 교체받다",
        extras: [
          { en: "Is this covered by insurance?", kr: "이거 보험 처리되나요?" },
          { en: "You only have to pay $5.", kr: "5달러만 추가로 내시면 됩니다." }
        ]
      },
      {
        id: "d41_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "난 새로운 기능 때문에 최신형이 필요해.",
        en: "I need the latest model for the new features.",
        time: "03:17",
        seconds: 197,
        note: "the latest model : 최신 모델 / feature : 기능, 특징",
        extras: []
      },
      {
        id: "d41_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 새 스마트폰 정말 좋아하는구나.",
        en: "Alright. A new smartphone is your best friend.",
        time: "03:28",
        seconds: 208,
        note: "Something is one's best friend : ~을 유난히 아주 좋아하다, 푹 빠져있다",
        extras: []
      }
    ]
  },

  // --- DAY 042 ---
  {
    day: 42,
    dayFormatted: "DAY 042",
    title: "음식조심",
    videoId: "pQXPcRwolvs",
    dialogues: [
      {
        id: "d42_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "힘든 하루였어. 술 한잔 마시고 싶다.",
        en: "It was a tough day. I could use a drink.",
        time: "00:44",
        seconds: 44,
        note: "a tough day / a long day : 힘든 하루 / could use ~ : ~이 간절히 필요하다, 당기다",
        extras: [
          { en: "I could use some pizza.", kr: "피자 좀 먹었으면 좋겠어." },
          { en: "I could use a nap.", kr: "낮잠 좀 잤으면 딱 좋겠어." }
        ]
      },
      {
        id: "d42_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나 요즘 술을 좀 멀리하고 있어.",
        en: "I'm staying away from booze these days.",
        time: "01:27",
        seconds: 87,
        note: "stay away from ~ : ~을 멀리하다, 거리를 두다 / booze : (구어) 술",
        extras: [
          { en: "I'm trying to stay away from junk food.", kr: "요즘 인스턴트식품을 멀리하려고 해." }
        ]
      },
      {
        id: "d42_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "갑자기 왜 그래? 내가 살게.",
        en: "What's gotten into you? I'm buying.",
        time: "01:58",
        seconds: 118,
        note: "What's gotten into you? : 너 갑자기 왜 그래? (평소와 다를 때) / I'm buying : 내가 낼게",
        extras: [
          { en: "You're acting weird. What's gotten into you?", kr: "너 이상하게 행동하네. 대체 왜 그래?" }
        ]
      },
      {
        id: "d42_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "사실 3일째 설사를 하고 있거든.",
        en: "Actually, I've had the runs for three days.",
        time: "02:25",
        seconds: 145,
        note: "have the runs : 설사를 하다 (병원, 약국 필수 표현)",
        extras: [
          { en: "Do you have the runs?", kr: "너 설사해?" },
          { en: "I've had the runs for a few days.", kr: "며칠째 설사하고 있어요." }
        ]
      },
      {
        id: "d42_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "힘들겠다. 뭐 잘못 먹었어?",
        en: "It must be tough. Did you eat something wrong?",
        time: "03:03",
        seconds: 183,
        note: "It must be tough : 힘들겠구나 / eat something wrong : 음식을 잘못 먹다",
        extras: []
      },
      {
        id: "d42_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "며칠 전 먹은 생고기 때문인 것 같아.",
        en: "Maybe it's the raw meat I had the other day.",
        time: "03:20",
        seconds: 200,
        note: "raw meat : 생고기 / the other day : 며칠 전에",
        extras: []
      }
    ]
  },

  // --- DAY 043 ---
  {
    day: 43,
    dayFormatted: "DAY 043",
    title: "소박한 여름휴가",
    videoId: "I2bh16E8hLY",
    dialogues: [
      {
        id: "d43_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 여름휴가 계획 세웠어?",
        en: "Have you made plans for your summer vacation?",
        time: "00:44",
        seconds: 44,
        note: "make plans for ~ : ~ 계획을 세우다",
        extras: []
      },
      {
        id: "d43_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그냥 집에서 호캉스나 하면서 쉬려고 해.",
        en: "I'm just planning on taking a staycation at home.",
        time: "01:12",
        seconds: 72,
        note: "staycation : (집이나 근처에서 보내는) 스테이케이션, 홈캉스",
        extras: []
      },
      {
        id: "d43_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어디 멀리 여행 안 가?",
        en: "Aren't you traveling somewhere far away?",
        time: "01:46",
        seconds: 106,
        note: "far away : 멀리 떨어진",
        extras: []
      },
      {
        id: "d43_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "성수기라 어딜 가도 인산인해에 바가지요금이야.",
        en: "It's peak season, so everywhere is crowded and overpriced.",
        time: "02:18",
        seconds: 138,
        note: "peak season : 성수기 / overpriced : 바가지요금인, 너무 비싼",
        extras: [
          { en: "off-peak season", kr: "비수기" }
        ]
      },
      {
        id: "d43_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "밀린 영화나 보면서 에어컨 쐬는 게 최고지.",
        en: "Chilling in the AC watching movies is the best.",
        time: "02:50",
        seconds: 170,
        note: "chill : 느긋하게 쉬다 / AC : 에어컨(Air Conditioner)",
        extras: []
      },
      {
        id: "d43_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "맞아. 그게 가장 가성비 좋은 휴가야.",
        en: "Exactly. That's the most cost-effective vacation.",
        time: "03:15",
        seconds: 195,
        note: "cost-effective : 가성비가 좋은, 경제적인",
        extras: []
      }
    ]
  },

  // --- DAY 044 ---
  {
    day: 44,
    dayFormatted: "DAY 044",
    title: "생활 속 피서지",
    videoId: "HxErurCkwhI",
    dialogues: [
      {
        id: "d44_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "집에 있으면 너무 더워서 견딜 수가 없어.",
        en: "I can't stand the heat staying at home.",
        time: "00:43",
        seconds: 43,
        note: "can't stand ~ : ~을 참을 수(견딜 수) 없다",
        extras: []
      },
      {
        id: "d44_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "동네 도서관이나 카페로 피신하는 건 어때?",
        en: "Why don't you take refuge in a local library or café?",
        time: "01:10",
        seconds: 70,
        note: "take refuge : 피신하다, 피난처를 찾다",
        extras: []
      },
      {
        id: "d44_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "도서관은 조용하고 에어컨도 빵빵하잖아.",
        en: "The library is quiet and the AC is blasting.",
        time: "01:45",
        seconds: 105,
        note: "the AC is blasting : 에어컨이 아주 시원하게 빵빵하게 틀어져 있다",
        extras: []
      },
      {
        id: "d44_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "독서하면서 더위도 피할 수 있어 일석이조야.",
        en: "You can read and beat the heat, killing two birds with one stone.",
        time: "02:18",
        seconds: 138,
        note: "kill two birds with one stone : 일석이조, 일거양득 / beat the heat : 더위를 피하다",
        extras: []
      },
      {
        id: "d44_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "냉방병 걸리지 않게 겉옷 하나 챙겨가야겠어.",
        en: "I should bring a light cardigan so I don't catch a cold from the AC.",
        time: "02:50",
        seconds: 170,
        note: "bring a light cardigan : 얇은 카디건(겉옷)을 챙기다",
        extras: []
      },
      {
        id: "d44_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋은 생각이야. 자리 맡으려면 서둘러.",
        en: "Good idea. Hurry up to grab a seat.",
        time: "03:15",
        seconds: 195,
        note: "grab a seat : 자리를 잡다",
        extras: []
      }
    ]
  },

  // --- DAY 045 ---
  {
    day: 45,
    dayFormatted: "DAY 045",
    title: "온라인 쇼핑",
    videoId: "wX8p65wx9ro",
    dialogues: [
      {
        id: "d45_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "인터넷으로 옷을 샀는데 사이즈가 안 맞아.",
        en: "I bought clothes online, but the size doesn't fit.",
        time: "00:44",
        seconds: 44,
        note: "fit : (치수, 사이즈가) 딱 맞다",
        extras: []
      },
      {
        id: "d45_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "환불하거나 다른 사이즈로 교환해.",
        en: "Ask for a refund or exchange it for a different size.",
        time: "01:12",
        seconds: 72,
        note: "refund : 환불 / exchange A for B : A를 B로 교환하다",
        extras: []
      },
      {
        id: "d45_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "반품 배송비를 내가 물어야 해.",
        en: "I have to pay for the return shipping fee.",
        time: "01:46",
        seconds: 106,
        note: "return shipping fee : 반품 배송비",
        extras: []
      },
      {
        id: "d45_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "입어보고 사지 않는 온라인 쇼핑의 단점이지.",
        en: "That's the downside of online shopping without trying them on.",
        time: "02:20",
        seconds: 140,
        note: "downside : 단점, 불리한 면 / try on : 입어보다",
        extras: []
      },
      {
        id: "d45_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "구매 후기 리뷰를 더 꼼꼼히 읽어볼 걸 그랬어.",
        en: "I should have read the customer reviews more thoroughly.",
        time: "02:52",
        seconds: 172,
        note: "should have + p.p. : ~했어야 했는데 (후회) / thoroughly : 꼼꼼하게",
        extras: []
      },
      {
        id: "d45_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다음부터는 실측 치수를 꼭 확인해 봐.",
        en: "Next time, make sure to check the exact measurements.",
        time: "03:18",
        seconds: 198,
        note: "exact measurements : 정확한 실측 치수",
        extras: []
      }
    ]
  },

  // --- DAY 046 ---
  {
    day: 46,
    dayFormatted: "DAY 046",
    title: "맥주가 당기네",
    videoId: "eSuz26NvpWY",
    dialogues: [
      {
        id: "d46_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이렇게 무더운 날엔 시원한 생맥주가 당겨.",
        en: "On a sweltering day like this, I crave a cold draft beer.",
        time: "00:43",
        seconds: 43,
        note: "sweltering : 찌는 듯이 무더운 / draft beer : 생맥주",
        extras: []
      },
      {
        id: "d46_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "퇴근하고 야외 테라스 펍에 갈까?",
        en: "Shall we hit an outdoor patio pub after work?",
        time: "01:10",
        seconds: 70,
        note: "outdoor patio : 야외 테라스 / after work : 퇴근 후",
        extras: []
      },
      {
        id: "d46_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "완전 찬성이야! 생각만 해도 갈증이 풀려.",
        en: "I'm all for it! Just thinking about it quenches my thirst.",
        time: "01:45",
        seconds: 105,
        note: "be all for it : 전적으로 찬성하다 / quench one's thirst : 갈증을 풀다",
        extras: []
      },
      {
        id: "d46_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "안주로는 치킨이랑 감자튀김 어때?",
        en: "How about chicken and french fries for finger food?",
        time: "02:18",
        seconds: 138,
        note: "finger food / snacks : 안주거리, 핑거푸드",
        extras: []
      },
      {
        id: "d46_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "치맥은 언제나 환상의 조합이지.",
        en: "Chicken and beer is always a match made in heaven.",
        time: "02:50",
        seconds: 170,
        note: "a match made in heaven : 환상의 궁합/조합",
        extras: []
      },
      {
        id: "d46_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "얼른 일 끝내고 마시러 가자.",
        en: "Let's wrap up our work quickly and head out.",
        time: "03:15",
        seconds: 195,
        note: "wrap up : 마무리 짓다 / head out : 출발하다, 나가다",
        extras: []
      }
    ]
  },

  // --- DAY 047 ---
  {
    day: 47,
    dayFormatted: "DAY 047",
    title: "휴식이 필요해",
    videoId: "uYsq1olkwTU",
    dialogues: [
      {
        id: "d47_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘 과로해서 완전히 번아웃 됐어.",
        en: "I've been overworked and feel completely burned out.",
        time: "00:44",
        seconds: 44,
        note: "overworked : 과로한 / burned out : 에너지가 다 소진된, 번아웃된",
        extras: []
      },
      {
        id: "d47_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "잠시 일손을 놓고 재충전할 시간이야.",
        en: "It's time to take some time off and recharge your batteries.",
        time: "01:12",
        seconds: 72,
        note: "recharge one's batteries : 재충전하다",
        extras: []
      },
      {
        id: "d47_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "주말 내내 아무것도 안 하고 뒹굴거렸어.",
        en: "I just bummed around doing nothing all weekend.",
        time: "01:46",
        seconds: 106,
        note: "bum around : 빈둥거리다, 뒹굴거리다",
        extras: []
      },
      {
        id: "d47_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가끔은 뇌에도 멍때리는 휴식이 필요해.",
        en: "Sometimes your brain needs time to zone out.",
        time: "02:20",
        seconds: 140,
        note: "zone out : 멍때리다, 생각을 비우다",
        extras: []
      },
      {
        id: "d47_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "스마트폰 알림도 다 꺼두고 지냈더니 한결 낫더라.",
        en: "I turned off all smartphone notifications and felt much better.",
        time: "02:52",
        seconds: 172,
        note: "turn off notifications : 알림을 끄다",
        extras: []
      },
      {
        id: "d47_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "디지털 디톡스가 현대인에겐 필수야.",
        en: "A digital detox is essential for modern people.",
        time: "03:17",
        seconds: 197,
        note: "digital detox : 디지털 단식/디톡스 / essential : 필수적인",
        extras: []
      }
    ]
  },

  // --- DAY 048 ---
  {
    day: 48,
    dayFormatted: "DAY 048",
    title: "열대야 후유증",
    videoId: "XTVtDSviJpw",
    dialogues: [
      {
        id: "d48_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어젯밤 열대야 때문에 밤새 잠을 설쳤어.",
        en: "I tossed and turned all night because of the tropical night.",
        time: "00:43",
        seconds: 43,
        note: "toss and turn : 뒤척이다, 잠을 설치다 / tropical night : 열대야",
        extras: []
      },
      {
        id: "d48_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "눈 밑에 다크서클이 턱까지 내려왔네.",
        en: "You have dark circles all the way down to your chin.",
        time: "01:10",
        seconds: 70,
        note: "dark circles : 다크서클 / all the way down to ~ : ~까지 완전히 내려온",
        extras: []
      },
      {
        id: "d48_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "에어컨 타이머가 꺼지면 자꾸 깨더라고.",
        en: "I kept waking up when the AC timer went off.",
        time: "01:45",
        seconds: 105,
        note: "keep -ing : 계속해서 ~하다 / timer goes off : 타이머가 울리다/꺼지다",
        extras: []
      },
      {
        id: "d48_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "틀고 자면 냉방병 걸리고, 끄면 덥고 난감해.",
        en: "Leaving it on makes you sick, but turning it off makes you sweat.",
        time: "02:18",
        seconds: 138,
        note: "leave it on : 켜두다 / turn it off : 끄다",
        extras: []
      },
      {
        id: "d48_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "선풍기를 미풍으로 틀고 자는 게 나을 것 같아.",
        en: "I'd better leave the fan on low while sleeping.",
        time: "02:50",
        seconds: 170,
        note: "leave the fan on low : 선풍기를 약풍/미풍으로 켜두다",
        extras: []
      },
      {
        id: "d48_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "찬물로 샤워하고 시원한 수박 한 조각 먹어봐.",
        en: "Take a cold shower and have a slice of chilled watermelon.",
        time: "03:15",
        seconds: 195,
        note: "chilled watermelon : 시원한 수박",
        extras: []
      }
    ]
  },

  // --- DAY 049 ---
  {
    day: 49,
    dayFormatted: "DAY 049",
    title: "아쉬운 야구경기",
    videoId: "-LpmeLSjdp4",
    dialogues: [
      {
        id: "d49_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어제 우리 팀 야구 경기 봤어?",
        en: "Did you catch our team's baseball game yesterday?",
        time: "00:44",
        seconds: 44,
        note: "catch the game : 경기를 보다/시청하다",
        extras: []
      },
      {
        id: "d49_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 9회 말에 역전패당해서 너무 아쉬웠어.",
        en: "Yeah, it was devastating to lose in a comeback in the bottom of the 9th.",
        time: "01:14",
        seconds: 74,
        note: "the bottom of the 9th : 9회 말 / comeback loss : 역전패",
        extras: []
      },
      {
        id: "d49_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "만루 홈런 한 방이면 이길 수 있었는데.",
        en: "We could have won with just one grand slam.",
        time: "01:48",
        seconds: 108,
        note: "grand slam : 만루 홈런 / could have + p.p. : ~할 수도 있었는데",
        extras: []
      },
      {
        id: "d49_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "수비 실책이 패배의 결정적인 원인이었어.",
        en: "The fielding error was the deciding factor in the defeat.",
        time: "02:22",
        seconds: 142,
        note: "fielding error : 수비 실책 / deciding factor : 결정적 요인",
        extras: []
      },
      {
        id: "d49_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그래도 선수들이 끝까지 포기하지 않았잖아.",
        en: "Still, the players didn't give up until the very end.",
        time: "02:54",
        seconds: 174,
        note: "until the very end : 맨 마지막 순간까지",
        extras: []
      },
      {
        id: "d49_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "맞아. 다음 주말 홈경기에는 꼭 이기길 바라.",
        en: "Right. I hope they bounce back in next weekend's home game.",
        time: "03:20",
        seconds: 200,
        note: "bounce back : 다시 회복하다, 반등하다",
        extras: []
      }
    ]
  },

  // --- DAY 050 ---
  {
    day: 50,
    dayFormatted: "DAY 050",
    title: "나이는 못 속여",
    videoId: "9GQYFZpHrqE",
    dialogues: [
      {
        id: "d50_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘 조금만 무리해도 온몸이 쑤셔.",
        en: "These days, my whole body aches even with a little overexertion.",
        time: "00:43",
        seconds: 43,
        note: "ache : 쑤시다, 뻐근하다 / overexertion : 무리함, 과로",
        extras: []
      },
      {
        id: "d50_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나도 그래. 예전 같지 않다는 걸 실감해.",
        en: "Same here. I realize I'm not as young as I used to be.",
        time: "01:10",
        seconds: 70,
        note: "not as ~ as one used to be : 예전만큼 ~하지 않다",
        extras: []
      },
      {
        id: "d50_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "밤샘하고도 멀쩡했던 때가 엊그제 같은데.",
        en: "It feels like yesterday when I was fine after pulling all-nighters.",
        time: "01:45",
        seconds: 105,
        note: "pull an all-nighter : 밤을 새우다 / feel like yesterday : 엊그제 같다",
        extras: []
      },
      {
        id: "d50_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "세월 앞엔 장사 없다더니 나이는 못 속이나 봐.",
        en: "You can't fool age. Father Time catches up with everyone.",
        time: "02:18",
        seconds: 138,
        note: "catch up with ~ : (세월, 피로 등이) ~를 따라잡다, 덮치다 / fool : 속이다",
        extras: []
      },
      {
        id: "d50_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이제부터라도 영양제 잘 챙겨 먹고 운동해야겠어.",
        en: "From now on, I should take dietary supplements and work out regularly.",
        time: "02:50",
        seconds: 170,
        note: "dietary supplements : 영양제, 건강보조식품",
        extras: []
      },
      {
        id: "d50_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "건강이 최고 자산이야. 꾸준히 관리하자.",
        en: "Health is the greatest wealth. Let's take good care of it.",
        time: "03:15",
        seconds: 195,
        note: "take good care of ~ : ~을 잘 돌보다, 관리하다",
        extras: []
      }
    ]
  },
  // --- DAY 051 ---
  {
    day: 51,
    dayFormatted: "DAY 051",
    title: "내 시력 돌려줘",
    videoId: "O50luwO_YFY",
    dialogues: [
      {
        id: "d51_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "최근에 시력이 나빠진 것 같아.",
        en: "I think my eyesight got worse recently.",
        time: "00:44",
        seconds: 44,
        note: "get worse : 악화되다, 나빠지다 / eyesight : 시력",
        extras: [
          { en: "My memory is getting worse.", kr: "내 기억력이 안 좋아지고 있는 것 같아." },
          { en: "The economy seems to be getting worse.", kr: "경제가 안 좋아질 것 같아." }
        ]
      },
      {
        id: "d51_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "노안이 온 거야. 나도 저녁에 눈이 침침해.",
        en: "It comes with age. My vision gets blurry at night.",
        time: "01:09",
        seconds: 69,
        note: "come with age : 나이가 들면서 생기다(노안 등) / blurry : 흐릿한, 침침한",
        extras: []
      },
      {
        id: "d51_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이런, 내가 늘 걱정했던 거야.",
        en: "My goodness! That's what I've been afraid of.",
        time: "01:33",
        seconds: 93,
        note: "what I've been afraid of : 내가 줄곧 두려워하고 걱정해 온 것",
        extras: [
          { en: "That's not what I expected.", kr: "이건 내가 기대했던 게 아니야." }
        ]
      },
      {
        id: "d51_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "안과에 가서 검사 좀 받아봐.",
        en: "Go to the clinic to get your eyes checked.",
        time: "02:13",
        seconds: 133,
        note: "clinic : 병원(안과/의원) / get one's eyes checked : 눈 검사를 받다",
        extras: [
          { en: "get a regular checkup", kr: "정기 건강검진을 받다" },
          { en: "get a blood test", kr: "피검사를 받다" }
        ]
      },
      {
        id: "d51_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "늘 생각을 했는데 시간을 못 냈어.",
        en: "It's been on my mind, but I haven't gotten around to it.",
        time: "02:42",
        seconds: 162,
        note: "be on one's mind : 마음에 걸리다, 늘 생각하다 / get around to ~ : 짬을 내서 ~을 하다",
        extras: [
          { en: "You've been on my mind all day.", kr: "네가 하루 종일 마음에 걸렸어." }
        ]
      },
      {
        id: "d51_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아이들 돌보느라 너무 바빴으니까.",
        en: "You've got your hands full taking care of your kids.",
        time: "03:31",
        seconds: 211,
        note: "have one's hands full : 손이 열 개라도 모자라다, 몹시 바쁘다",
        extras: [
          { en: "I have my hands full organizing the party.", kr: "파티 준비하느라 너무 바빠." }
        ]
      }
    ]
  },

  // --- DAY 052 ---
  {
    day: 52,
    dayFormatted: "DAY 052",
    title: "고기가 안 잡혀",
    videoId: "6Woxx8uW7FE",
    dialogues: [
      {
        id: "d52_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "낚시는 잘 되어가고 있어?",
        en: "How's your fishing coming along?",
        time: "00:44",
        seconds: 44,
        note: "How is ~ coming along? : ~은 어떻게 잘 진행되어 가고 있니?",
        extras: [
          { en: "How's your diet coming along?", kr: "다이어트는 잘 돼가?" },
          { en: "How's your new job coming along?", kr: "새 직장은 다닐 만해?" }
        ]
      },
      {
        id: "d52_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "입질은 많은데 대부분 허탕이야.",
        en: "I got a lot of bites, but mostly came up empty-handed.",
        time: "01:13",
        seconds: 73,
        note: "get a bite : (물고기) 입질이 오다, 물다 / come up empty-handed : 빈손으로 오다, 허탕 치다",
        extras: [
          { en: "I got a mosquito bite.", kr: "모기한테 물렸어." },
          { en: "Don't tell me you came empty-handed.", kr: "설마 빈손으로 온 건 아니겠지." }
        ]
      },
      {
        id: "d52_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요리할 준비를 하자. 배고파 죽겠어.",
        en: "Let's get ready to cook. I'm so hungry I could eat a horse.",
        time: "02:13",
        seconds: 133,
        note: "get ready to ~ : ~할 준비를 하다 / I could eat a horse : (말 한 마리도 먹을 만큼) 배고파 죽겠다",
        extras: [
          { en: "Let's get ready to set the table.", kr: "상 차릴 준비하자." }
        ]
      },
      {
        id: "d52_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "목이 마르다. 맥주는 어디에 뒀어?",
        en: "I'm so thirsty. Where did you put the beers?",
        time: "03:01",
        seconds: 181,
        note: "thirsty : 목이 마른",
        extras: []
      },
      {
        id: "d52_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "바위 옆 파란색 아이스박스 안에 있어.",
        en: "They're in the blue cooler next to the rock.",
        time: "03:08",
        seconds: 188,
        note: "cooler : 아이스박스 / next to ~ : ~ 옆에",
        extras: [
          { en: "cooler bag", kr: "보냉 가방" }
        ]
      },
      {
        id: "d52_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어두워지기 전에 텐트부터 쳐야겠다.",
        en: "We should set up the tent before it gets dark.",
        time: "03:21",
        seconds: 201,
        note: "set up the tent : 텐트를 치다(설치하다) / before it gets dark : 어두워지기 전에",
        extras: [
          { en: "set up the barbecue grill", kr: "바비큐 그릴을 설치하다" }
        ]
      }
    ]
  },

  // --- DAY 053 ---
  {
    day: 53,
    dayFormatted: "DAY 053",
    title: "층간소음",
    videoId: "S7wT_-Axyuw",
    dialogues: [
      {
        id: "d53_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이런, 이건 무슨 소음이야?",
        en: "Holy cow! What's with all this noise?",
        time: "00:46",
        seconds: 46,
        note: "Holy cow! : 맙소사! 세상에! / What's with ~? : 도대체 ~은 왜 이래?",
        extras: [
          { en: "What's with the weather?", kr: "날씨가 도대체 왜 이래?" },
          { en: "What's with your face?", kr: "너 얼굴이 도대체 왜 그래?" }
        ]
      },
      {
        id: "d53_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "위층 이웃이야. 얘기 좀 해야겠다.",
        en: "It's the upstairs neighbor. I'll bring it up with them.",
        time: "01:12",
        seconds: 72,
        note: "upstairs neighbor : 위층 이웃 / bring it up with ~ : ~에게 말을 꺼내다, 문제를 제기하다",
        extras: [
          { en: "next-door neighbor", kr: "옆집 이웃" },
          { en: "Don't bring it up again.", kr: "다시는 그 얘기 꺼내지 마." }
        ]
      },
      {
        id: "d53_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정말 심각하다. 저걸 어떻게 참니?",
        en: "This is dead serious. How do you put up with that?",
        time: "01:49",
        seconds: 109,
        note: "dead serious : 몹시 심각한 / put up with ~ : ~을 참고 견디다",
        extras: [
          { en: "I can't put up with you anymore.", kr: "난 더 이상 널 참을 수가 없어." },
          { en: "I can't put up with neighbor noise.", kr: "난 이웃집 소음을 견딜 수가 없어." }
        ]
      },
      {
        id: "d53_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "소음만 제외하면 정말 좋은 사람들이야.",
        en: "Besides the noise, they're really good people.",
        time: "02:32",
        seconds: 152,
        note: "besides ~ : ~을 제외하고, ~ 외에도",
        extras: [
          { en: "Do you speak any languages besides English?", kr: "영어 외에 할 줄 아는 언어가 있나요?" }
        ]
      },
      {
        id: "d53_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그 사람들 옹호하는 거야? 정말 대단하다.",
        en: "Are you standing up for them? You're really something.",
        time: "03:06",
        seconds: 186,
        note: "stand up for ~ : ~을 옹호하다, 편들다 / You're really something : 너 정말 보통이 아니구나, 대단하다",
        extras: [
          { en: "I always stand up for my son.", kr: "난 언제나 내 아들을 지지해." }
        ]
      },
      {
        id: "d53_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "무슨 말인지 알아. 아파트에 사는 게 그런 거지.",
        en: "I can see where you're coming from. That's how you live in an apartment building.",
        time: "03:44",
        seconds: 224,
        note: "see where you're coming from : 무슨 뜻/입장인지 이해하다 / That's how ~ : ~이란 다 그런 거다",
        extras: [
          { en: "That's how love goes.", kr: "사랑이란 원래 그런 거야." }
        ]
      }
    ]
  },

  // --- DAY 054 ---
  {
    day: 54,
    dayFormatted: "DAY 054",
    title: "사랑싸움 그만해",
    videoId: "IbOyefAd_4I",
    dialogues: [
      {
        id: "d54_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "남자친구와 어떻게 지내?",
        en: "How's it going with your boyfriend?",
        time: "00:44",
        seconds: 44,
        note: "How's it going with ~? : ~와는 어떻게 지내? / 잘 돼가?",
        extras: [
          { en: "How's it going with your project?", kr: "프로젝트는 잘 돼가?" }
        ]
      },
      {
        id: "d54_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지난주에 크게 싸우고 헤어졌어.",
        en: "We broke up last week after a big fight.",
        time: "01:12",
        seconds: 72,
        note: "break up with ~ : ~와 헤어지다 / after a big fight : 대판 싸운 뒤에",
        extras: [
          { en: "I broke up with my girlfriend yesterday.", kr: "어제 여자친구와 헤어졌어." }
        ]
      },
      {
        id: "d54_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "또야? 결국 화해할 거잖아.",
        en: "Not again! You guys will make up in the end.",
        time: "01:36",
        seconds: 96,
        note: "Not again! : 또야? (지겹다는 뉘앙스) / make up : 화해하다 / in the end : 결국에는",
        extras: [
          { en: "kiss and make up", kr: "화해하다, 풀다" }
        ]
      },
      {
        id: "d54_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우린 끝났어. 이미 마음 정리했어.",
        en: "We're history. I've already moved on.",
        time: "02:13",
        seconds: 133,
        note: "be history : (관계가) 끝장나다 / move on : 마음을 정리하다, 새 출발하다",
        extras: [
          { en: "It's time to move on and start a new life.", kr: "과거를 잊고 새 삶을 시작할 때야." }
        ]
      },
      {
        id: "d54_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "걱정 마. 짚신도 다 짝이 있으니까.",
        en: "Don't worry. There's a lid for every pot.",
        time: "02:46",
        seconds: 166,
        note: "There is a lid for every pot : 모든 냄비엔 뚜껑이 있다 (짚신도 제 짝이 있다)",
        extras: [
          { en: "Every Jack has his Jill.", kr: "철수에게도 영이가 있다 (짚신도 짝이 있다)." }
        ]
      },
      {
        id: "d54_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그가 잔소리하는 거 참을 만큼 참았어.",
        en: "I've had enough of him bossing me around.",
        time: "03:17",
        seconds: 197,
        note: "have had enough of ~ : ~은 지긋지긋하다, 참을 만큼 참았다 / boss around : 이래라저래라 지시하다",
        extras: [
          { en: "I've had enough of your excuses.", kr: "네 변명은 이제 지겨워." },
          { en: "Stop bossing me around.", kr: "나한테 이래라저래라 하지 마." }
        ]
      }
    ]
  },

  // --- DAY 055 ---
  {
    day: 55,
    dayFormatted: "DAY 055",
    title: "볼링시합",
    videoId: "YhyTWZyFI94",
    dialogues: [
      {
        id: "d55_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 저녁에 볼링 치러 갈래?",
        en: "Do you want to go bowling tonight?",
        time: "00:44",
        seconds: 44,
        note: "go bowling : 볼링 치러 가다",
        extras: [
          { en: "go swimming / go skiing", kr: "수영하러 가다 / 스키 타러 가다" }
        ]
      },
      {
        id: "d55_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아! 내기 볼링 한판 하자.",
        en: "Sounds fun! Let's play a game for a bet.",
        time: "01:10",
        seconds: 70,
        note: "for a bet : 내기로, 판돈을 걸고",
        extras: []
      },
      {
        id: "d55_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "진 사람이 게임비랑 간식 내는 거다.",
        en: "The loser pays for the games and snacks.",
        time: "01:45",
        seconds: 105,
        note: "The loser pays : 진 사람이 계산하다",
        extras: []
      },
      {
        id: "d55_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나 오늘 손목 컨디션이 최고조야.",
        en: "My wrist is in tip-top shape today.",
        time: "02:18",
        seconds: 138,
        note: "in tip-top shape : 최상의 컨디션인",
        extras: []
      },
      {
        id: "d55_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "두고 봐. 나 스트라이크 연속으로 칠 거니까.",
        en: "Just wait and see. I'm going to get consecutive strikes.",
        time: "02:50",
        seconds: 170,
        note: "wait and see : 두고 보다 / consecutive : 연속적인",
        extras: []
      },
      {
        id: "d55_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "말만 앞세우지 말고 실력으로 보여줘.",
        en: "Talk is cheap. Show me what you've got.",
        time: "03:15",
        seconds: 195,
        note: "Talk is cheap : 말이야 누구나 쉽게 하지 / Show me what you've got : 네 실력을 보여줘",
        extras: []
      }
    ]
  },

  // --- DAY 056 ---
  {
    day: 56,
    dayFormatted: "DAY 056",
    title: "피부관리",
    videoId: "5uPbk4xQD44",
    dialogues: [
      {
        id: "d56_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘 피부가 너무 푸석푸석하고 건조해.",
        en: "My skin is so dull and dry these days.",
        time: "00:43",
        seconds: 43,
        note: "dull : 푸석푸석한, 윤기 없는 / dry skin : 건성 피부",
        extras: []
      },
      {
        id: "d56_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "물을 자주 마시고 보습제를 듬뿍 발라.",
        en: "Drink water frequently and apply plenty of moisturizer.",
        time: "01:10",
        seconds: 70,
        note: "apply moisturizer : 보습제(로션)를 바르다 / plenty of : 듬뿍, 많은",
        extras: []
      },
      {
        id: "d56_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "외출할 때 자외선 차단제는 꼭 바르고 있어?",
        en: "Do you always wear sunscreen when going out?",
        time: "01:45",
        seconds: 105,
        note: "wear sunscreen : 선크림(자외선 차단제)을 바르다",
        extras: []
      },
      {
        id: "d56_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "흐린 날에도 자외선 차단제는 필수야.",
        en: "Sunscreen is a must even on cloudy days.",
        time: "02:18",
        seconds: 138,
        note: "a must : 필수품, 꼭 해야 하는 것",
        extras: []
      },
      {
        id: "d56_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 밤에는 마스크팩을 하고 자야겠어.",
        en: "I should put on a facial sheet mask before bed.",
        time: "02:50",
        seconds: 170,
        note: "sheet mask : 시트 마스크팩 / before bed : 자기 전에",
        extras: []
      },
      {
        id: "d56_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "피부는 미리 가꾸는 게 가장 중요해.",
        en: "Taking care of your skin in advance is key.",
        time: "03:15",
        seconds: 195,
        note: "in advance : 미리, 사전에 / is key : 핵심이다",
        extras: []
      }
    ]
  },

  // --- DAY 057 ---
  {
    day: 57,
    dayFormatted: "DAY 057",
    title: "노후에 뭘 할까",
    videoId: "4CMOT40mkzs",
    dialogues: [
      {
        id: "d57_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "은퇴하면 한적한 시골에서 살고 싶어.",
        en: "When I retire, I want to live in the quiet countryside.",
        time: "00:44",
        seconds: 44,
        note: "retire : 은퇴하다 / quiet countryside : 한적한 시골",
        extras: []
      },
      {
        id: "d57_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "텃밭 가꾸면서 여유롭게 지내면 좋겠다.",
        en: "It would be great to relax and tend a garden.",
        time: "01:12",
        seconds: 72,
        note: "tend a garden : 정원/텃밭을 가꾸다",
        extras: []
      },
      {
        id: "d57_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "노후 자금 마련은 잘 준비하고 있어?",
        en: "Are you preparing well for your retirement fund?",
        time: "01:46",
        seconds: 106,
        note: "retirement fund : 노후 자금, 은퇴 연금",
        extras: []
      },
      {
        id: "d57_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "연금이랑 저축을 꾸준히 붓고 있어.",
        en: "I've been steadily contributing to a pension and savings.",
        time: "02:20",
        seconds: 140,
        note: "contribute to a pension : 연금을 붓다(납입하다)",
        extras: []
      },
      {
        id: "d57_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "건강도 미리 챙겨야 노후를 즐길 수 있지.",
        en: "You have to stay healthy to enjoy your golden years.",
        time: "02:52",
        seconds: 172,
        note: "golden years : 노후, 황혼기",
        extras: []
      },
      {
        id: "d57_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "맞아. 머지않은 미래니까 미리 대비해야 해.",
        en: "Right. It's not far off, so we should prepare early.",
        time: "03:18",
        seconds: 198,
        note: "not far off : 멀지 않은",
        extras: []
      }
    ]
  },

  // --- DAY 058 ---
  {
    day: 58,
    dayFormatted: "DAY 058",
    title: "동물병원",
    videoId: "skgLuVMRwxk",
    dialogues: [
      {
        id: "d58_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "강아지가 밥도 안 먹고 축 처져 있어.",
        en: "My puppy won't eat and is feeling sluggish.",
        time: "00:43",
        seconds: 43,
        note: "sluggish : 축 처진, 기운 없는",
        extras: []
      },
      {
        id: "d58_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "열은 없어? 당장 동물병원에 데려가 봐.",
        en: "Does it have a fever? Take it to the vet right now.",
        time: "01:10",
        seconds: 70,
        note: "have a fever : 열이 나다 / vet (veterinarian) : 동물병원 수의사",
        extras: []
      },
      {
        id: "d58_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "예방접종 맞을 시기가 지나서 걱정돼.",
        en: "I'm worried because it's past due for vaccinations.",
        time: "01:45",
        seconds: 105,
        note: "past due : 기한이 지난 / vaccination : 예방접종",
        extras: []
      },
      {
        id: "d58_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "말을 못 하니까 더 신경 써서 살펴봐야 해.",
        en: "They can't talk, so you have to watch them more closely.",
        time: "02:18",
        seconds: 138,
        note: "watch closely : 주의 깊게 지켜보다",
        extras: []
      },
      {
        id: "d58_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "큰 병이 아니었으면 좋겠어.",
        en: "I hope it's nothing serious.",
        time: "02:50",
        seconds: 170,
        note: "nothing serious : 심각한 것이 아닌",
        extras: []
      },
      {
        id: "d58_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "진찰받고 약 먹으면 금방 나을 거야.",
        en: "It'll get better once examined and given medicine.",
        time: "03:15",
        seconds: 195,
        note: "get examined : 진찰받다",
        extras: []
      }
    ]
  },

  // --- DAY 059 ---
  {
    day: 59,
    dayFormatted: "DAY 059",
    title: "헤어지는 날",
    videoId: "APe6FvtMq3k",
    dialogues: [
      {
        id: "d59_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "공항까지 배웅해 줘서 고마워.",
        en: "Thank you for seeing me off at the airport.",
        time: "00:44",
        seconds: 44,
        note: "see somebody off : ~를 배웅하다",
        extras: []
      },
      {
        id: "d59_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네가 떠난다니 정말 실감이 안 나.",
        en: "It hasn't sank in yet that you're leaving.",
        time: "01:12",
        seconds: 72,
        note: "sink in : 실감이 나다, 마음에 와닿다",
        extras: []
      },
      {
        id: "d59_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "연락 자주 하고 꼭 소식 전해줘.",
        en: "Stay in touch often and keep me posted.",
        time: "01:46",
        seconds: 106,
        note: "stay in touch : 연락하며 지내다 / keep somebody posted : 지속해서 소식을 알리다",
        extras: []
      },
      {
        id: "d59_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "도착하자마자 바로 전화해.",
        en: "Give me a call as soon as you land.",
        time: "02:18",
        seconds: 138,
        note: "as soon as ~ : ~하자마자 / land : 착륙하다, 도착하다",
        extras: []
      },
      {
        id: "d59_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "몸조심하고 건강하게 잘 지내.",
        en: "Take care of yourself and stay healthy.",
        time: "02:50",
        seconds: 170,
        note: "Take care of yourself : 몸조심해",
        extras: []
      },
      {
        id: "d59_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "너도 비행 편안하길 바라. 안녕!",
        en: "Have a safe flight, too. Farewell!",
        time: "03:15",
        seconds: 195,
        note: "safe flight : 편안하고 안전한 비행 / Farewell : 작별 인사",
        extras: []
      }
    ]
  },

  // --- DAY 060 ---
  {
    day: 60,
    dayFormatted: "DAY 060",
    title: "가릴 처지가 아니지",
    videoId: "qLCA1SUogG4",
    dialogues: [
      {
        id: "d60_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "취업 준비는 요즘 어때?",
        en: "How is your job hunting going these days?",
        time: "00:43",
        seconds: 43,
        note: "job hunting : 구직 활동",
        extras: []
      },
      {
        id: "d60_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "눈을 좀 낮춰서 지원해 볼까 봐.",
        en: "I'm thinking of lowering my standards and applying.",
        time: "01:10",
        seconds: 70,
        note: "lower one's standards : 눈높이를 낮추다",
        extras: []
      },
      {
        id: "d60_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "원하는 조건이 아니어도 괜찮겠어?",
        en: "Are you okay with conditions that aren't ideal?",
        time: "01:45",
        seconds: 105,
        note: "ideal : 이상적인",
        extras: []
      },
      {
        id: "d60_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "지금 이것저것 가릴 처지가 아니야.",
        en: "Beggars can't be choosers right now.",
        time: "02:18",
        seconds: 138,
        note: "Beggars can't be choosers : 아쉬운 입장에서 찬밥 더운밥 가릴 처지가 아니다",
        extras: []
      },
      {
        id: "d60_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어디든 들어가서 경력을 쌓는 게 먼저지.",
        en: "Building up experience comes first anywhere.",
        time: "02:50",
        seconds: 170,
        note: "build up experience : 경력을 쌓다 / come first : 우선이다",
        extras: []
      },
      {
        id: "d60_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "맞아. 일단 부딪혀보고 기회를 찾아야겠어.",
        en: "Right. I should give it a shot and seek opportunities.",
        time: "03:15",
        seconds: 195,
        note: "give it a shot : 시도해 보다, 부딪혀보다",
        extras: []
      }
    ]
  },
  // --- DAY 061 ---
  {
    day: 61,
    dayFormatted: "DAY 061",
    title: "이른 출장",
    videoId: "aKuPf1RjxSA",
    dialogues: [
      {
        id: "d61_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "늦어서 미안해. 알람 소리를 못 듣고 잤어.",
        en: "Sorry, I'm late. I slept through the alarm.",
        time: "00:41",
        seconds: 41,
        note: "sleep through ~ : ~을 못 듣고 계속 자다 / alarm : 알람",
        extras: [
          { en: "I was so tired I slept through the alarm.", kr: "너무 피곤해서 알람 소리를 못 듣고 잤어." }
        ]
      },
      {
        id: "d61_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "뒤풀이 때문에 피곤했구나.",
        en: "You must be exhausted from the after-party.",
        time: "01:02",
        seconds: 62,
        note: "be exhausted from ~ : ~ 때문에 완전히 지치다, 녹초가 되다 / after-party : 뒤풀이",
        extras: [
          { en: "I'm exhausted from looking after my baby.", kr: "아기를 돌보느라 완전히 지쳤어." },
          { en: "I'm exhausted from the heat.", kr: "더위에 완전히 지친다." }
        ]
      },
      {
        id: "d61_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "여기 엄청 춥다. 히터 좀 틀어줄래?",
        en: "It's freezing here. Can you turn on the heater?",
        time: "01:30",
        seconds: 90,
        note: "freezing : 몹시 추운 / turn on ~ : (기기 전원을) 켜다 / heater : 히터",
        extras: [
          { en: "Please turn on the radio.", kr: "라디오 좀 켜주세요." },
          { en: "I can't turn on this computer.", kr: "이 컴퓨터가 안 켜져." }
        ]
      },
      {
        id: "d61_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 음악도 틀어줄게.",
        en: "All right. Let me put on some music.",
        time: "01:58",
        seconds: 118,
        note: "put on some music : 음악을 틀다",
        extras: [
          { en: "I put on music as soon as I wake up.", kr: "난 아침에 일어나자마자 음악을 틀어." }
        ]
      },
      {
        id: "d61_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "고마워. 커피 마시고 정신 좀 차려야지.",
        en: "Thanks. I'll wake myself up with some coffee.",
        time: "02:25",
        seconds: 145,
        note: "wake oneself up with ~ : ~을 마시며(하며) 잠/정신을 깨우다",
        extras: [
          { en: "I need to wake myself up with some coffee.", kr: "커피 마시고 정신 좀 차려야겠어." }
        ]
      },
      {
        id: "d61_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "여기 있어 봐. 가서 커피 사 올게.",
        en: "Just stay put. I'll go get some coffee.",
        time: "02:55",
        seconds: 175,
        note: "stay put : (움직이지 않고) 그대로 있다, 가만히 있다",
        extras: [
          { en: "If you stay put, nothing will happen.", kr: "여기 가만히 있으면 아무 일도 일어나지 않을 거야." }
        ]
      }
    ]
  },

  // --- DAY 062 ---
  {
    day: 62,
    dayFormatted: "DAY 062",
    title: "기계치 친구",
    videoId: "kPtI0qxo3WE",
    dialogues: [
      {
        id: "d62_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "새로 산 노트북 설정하는 것 좀 도와줄래?",
        en: "Can you help me set up my new laptop?",
        time: "00:44",
        seconds: 44,
        note: "set up : (기기나 소프트웨어를) 설정하다 / laptop : 노트북",
        extras: []
      },
      {
        id: "d62_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "설명서대로 따라 하면 아주 간단한데.",
        en: "It's a breeze if you follow the manual.",
        time: "01:10",
        seconds: 70,
        note: "a breeze : 식은 죽 먹기, 아주 쉬운 일 / follow the manual : 설명서를 따르다",
        extras: [
          { en: "a piece of cake", kr: "식은 죽 먹기" }
        ]
      },
      {
        id: "d62_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나 기계치인 거 알잖아. 봐도 모르겠어.",
        en: "You know I'm all thumbs with gadgets. I'm clueless.",
        time: "01:45",
        seconds: 105,
        note: "be all thumbs : 손재주가 없다, 서툴다 / gadget : 전자기기 / clueless : 전혀 모르는",
        extras: []
      },
      {
        id: "d62_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 기본 프로그램 다 설치해 줄게.",
        en: "I'll install all the essential programs for you.",
        time: "02:18",
        seconds: 138,
        note: "install : 설치하다 / essential programs : 필수 프로그램",
        extras: []
      },
      {
        id: "d62_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 없었으면 어쩔 뻔했니. 정말 고마워.",
        en: "What would I do without you? Thank you so much.",
        time: "02:50",
        seconds: 170,
        note: "What would I do without you? : 너 없었으면 어쩔 뻔했어?",
        extras: []
      },
      {
        id: "d62_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "별말씀을. 대신 맛있는 저녁 사줘.",
        en: "Don't mention it. Buy me a nice dinner instead.",
        time: "03:15",
        seconds: 195,
        note: "Don't mention it : 천만에요 / instead : 대신에",
        extras: []
      }
    ]
  },

  // --- DAY 063 ---
  {
    day: 63,
    dayFormatted: "DAY 063",
    title: "갑질 상사",
    videoId: "ToL825ZwEk4",
    dialogues: [
      {
        id: "d63_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 팀장님한테 또 한소리 들었어.",
        en: "I got chewed out by my team manager again today.",
        time: "00:43",
        seconds: 43,
        note: "get chewed out : 몹시 호되게 혼나다, 깨지다",
        extras: []
      },
      {
        id: "d63_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "또 무슨 꼬투리를 잡아서 그러셔?",
        en: "What did he nitpick about this time?",
        time: "01:10",
        seconds: 70,
        note: "nitpick : 트집을 잡다, 꼬투리를 잡다",
        extras: []
      },
      {
        id: "d63_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "별것도 아닌 사소한 실수로 온갖 트집을 잡잖아.",
        en: "He finds fault with every little minor mistake.",
        time: "01:46",
        seconds: 106,
        note: "find fault with ~ : ~의 흠/결점을 잡다 / minor mistake : 사소한 실수",
        extras: []
      },
      {
        id: "d63_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "부하직원들한테 권위를 세우려고 그러는 거야.",
        en: "He's just trying to throw his weight around.",
        time: "02:20",
        seconds: 140,
        note: "throw one's weight around : 권력을 휘두르다, 위세를 부리다",
        extras: []
      },
      {
        id: "d63_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "스트레스 받아서 당장 때려치우고 싶어.",
        en: "I'm so stressed out I feel like quitting right away.",
        time: "02:52",
        seconds: 172,
        note: "feel like -ing : ~하고 싶다 / quit : 그만두다",
        extras: []
      },
      {
        id: "d63_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "감정적으로 굴지 말고 한 귀로 듣고 흘려.",
        en: "Don't take it personally. Let it in one ear and out the other.",
        time: "03:18",
        seconds: 198,
        note: "take it personally : 개인적으로 마음에 담아두다 / in one ear and out the other : 한 귀로 듣고 한 귀로 흘리다",
        extras: []
      }
    ]
  },

  // --- DAY 064 ---
  {
    day: 64,
    dayFormatted: "DAY 064",
    title: "사랑도 노력이야",
    videoId: "NZohRw3D2MI",
    dialogues: [
      {
        id: "d64_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "요즘 연애 권태기가 온 것 같아.",
        en: "I think we hit a rough patch in our relationship.",
        time: "00:44",
        seconds: 44,
        note: "hit a rough patch : 난관에 부딪히다, 권태기를 겪다",
        extras: []
      },
      {
        id: "d64_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "익숙함에 속아 소중함을 잃지 마.",
        en: "Don't take each other for granted because you're used to it.",
        time: "01:12",
        seconds: 72,
        note: "take ~ for granted : ~을 당연하게 여기다 / be used to ~ : ~에 익숙하다",
        extras: []
      },
      {
        id: "d64_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "처음처럼 설레는 감정이 사라졌어.",
        en: "The butterflies in my stomach are gone.",
        time: "01:48",
        seconds: 108,
        note: "butterflies in one's stomach : 설레는 감정, 두근거림",
        extras: []
      },
      {
        id: "d64_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오래된 연인일수록 끊임없이 노력해야 해.",
        en: "Long-term couples need to constantly work at it.",
        time: "02:22",
        seconds: 142,
        note: "long-term couple : 장수 커플 / work at it : 노력하다",
        extras: []
      },
      {
        id: "d64_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "새로운 데이트 코스를 짜서 분위기 좀 바꿔볼까?",
        en: "Should we spice things up with a new date idea?",
        time: "02:54",
        seconds: 174,
        note: "spice things up : 흥미를 돋우다, 분위기를 전환하다",
        extras: []
      },
      {
        id: "d64_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "진솔한 대화를 나누며 서로의 마음을 털어놔 봐.",
        en: "Have a heart-to-heart talk and open up to each other.",
        time: "03:20",
        seconds: 200,
        note: "heart-to-heart talk : 진솔한 대화 / open up : 마음을 털어놓다",
        extras: []
      }
    ]
  },

  // --- DAY 065 ---
  {
    day: 65,
    dayFormatted: "DAY 065",
    title: "화창한 가을날",
    videoId: "8eGtT8yq8TA",
    dialogues: [
      {
        id: "d65_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "하늘이 높고 푸른 완벽한 가을 날씨야.",
        en: "The sky is so high and blue. It's perfect autumn weather.",
        time: "00:43",
        seconds: 43,
        note: "autumn weather : 가을 날씨",
        extras: []
      },
      {
        id: "d65_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "바람도 선선하고 습도도 낮아서 쾌적해.",
        en: "There's a crisp breeze and the humidity is low, so it's pleasant.",
        time: "01:10",
        seconds: 70,
        note: "crisp breeze : 상쾌하고 선선한 바람 / humidity : 습도",
        extras: []
      },
      {
        id: "d65_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "단풍 구경하러 주말에 등산 갈래?",
        en: "Shall we go hiking this weekend to see the fall foliage?",
        time: "01:45",
        seconds: 105,
        note: "fall foliage : 가을 단풍 / go hiking : 등산 가다",
        extras: []
      },
      {
        id: "d65_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "산 정상이 울긋불긋 물들어서 장관이겠어.",
        en: "The mountain peaks must look spectacular with autumn colors.",
        time: "02:18",
        seconds: 138,
        note: "spectacular : 장관을 이루는, 화려한",
        extras: []
      },
      {
        id: "d65_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "따뜻한 보온병에 차 담아가서 마시자.",
        en: "Let's bring some hot tea in a thermos to drink.",
        time: "02:50",
        seconds: 170,
        note: "thermos : 보온병",
        extras: []
      },
      {
        id: "d65_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가을이 순식간에 지나가기 전에 즐겨야지.",
        en: "We should enjoy it before autumn slips away in a blink.",
        time: "03:15",
        seconds: 195,
        note: "slip away : 사라지다, 덧없이 지나가다 / in a blink : 순식간에",
        extras: []
      }
    ]
  },

  // --- DAY 066 ---
  {
    day: 66,
    dayFormatted: "DAY 066",
    title: "고속버스 터미널",
    videoId: "VJyzKPbIkPI",
    dialogues: [
      {
        id: "d66_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "부산행 고속버스 표 두 장 주세요.",
        en: "Two tickets for the express bus to Busan, please.",
        time: "00:44",
        seconds: 44,
        note: "express bus to ~ : ~행 고속버스",
        extras: []
      },
      {
        id: "d66_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "일반으로 드릴까요, 우등으로 드릴까요?",
        en: "Would you like standard or premium seats?",
        time: "01:12",
        seconds: 72,
        note: "standard : 일반석 / premium : 우등석",
        extras: []
      },
      {
        id: "d66_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "장거리니까 우등 고속으로 할게요.",
        en: "Since it's a long journey, we'll go with the premium one.",
        time: "01:46",
        seconds: 106,
        note: "long journey : 장거리 여정 / go with ~ : ~을 선택하다",
        extras: []
      },
      {
        id: "d66_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가장 빠른 차가 10시 30분에 출발합니다.",
        en: "The earliest bus departs at 10:30 AM.",
        time: "02:18",
        seconds: 138,
        note: "earliest : 가장 이른 / depart : 출발하다",
        extras: []
      },
      {
        id: "d66_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "버스 탑승 게이트는 몇 번인가요?",
        en: "Which platform do we board the bus at?",
        time: "02:50",
        seconds: 170,
        note: "platform : 승강장 / board : 탑승하다",
        extras: []
      },
      {
        id: "d66_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "7번 홈에서 출발 5분 전까지 탑승하세요.",
        en: "Board at Platform 7 up to 5 minutes before departure.",
        time: "03:15",
        seconds: 195,
        note: "before departure : 출발 전에",
        extras: []
      }
    ]
  },

  // --- DAY 067 ---
  {
    day: 67,
    dayFormatted: "DAY 067",
    title: "주제 파악",
    videoId: "hK3uUWzkIm4",
    dialogues: [
      {
        id: "d67_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그 친구는 항상 자기가 제일 잘난 줄 알아.",
        en: "He always acts like he's something special.",
        time: "00:43",
        seconds: 43,
        note: "act like ~ : 마치 ~인 양 행동하다",
        extras: []
      },
      {
        id: "d67_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "자신감이 넘치는 건지 거만한 건지 모르겠어.",
        en: "I can't tell if he's confident or just arrogant.",
        time: "01:10",
        seconds: 70,
        note: "can't tell if ~ : ~인지 아닌지 분간이 안 가다 / arrogant : 거만한",
        extras: []
      },
      {
        id: "d67_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "남을 무시하는 태도는 고쳐야 해.",
        en: "He should fix his habit of looking down on others.",
        time: "01:45",
        seconds: 105,
        note: "look down on ~ : ~을 얕잡아보다, 무시하다",
        extras: []
      },
      {
        id: "d67_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "자기 분수를 알아야 부끄러움을 안 당하지.",
        en: "He needs to know his place to avoid embarrassment.",
        time: "02:18",
        seconds: 138,
        note: "know one's place : 분수(주제)를 알다 / embarrassment : 당황, 수치",
        extras: []
      },
      {
        id: "d67_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "벼는 익을수록 고개를 숙인다는 말이 딱 맞아.",
        en: "Humility comes with wisdom, as the saying goes.",
        time: "02:50",
        seconds: 170,
        note: "humility : 겸손 / as the saying goes : 속담에도 있듯이",
        extras: []
      },
      {
        id: "d67_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "조만간 큰 코 다치고 교훈을 얻을 거야.",
        en: "He'll learn his lesson the hard way sooner or later.",
        time: "03:15",
        seconds: 195,
        note: "learn one's lesson the hard way : 혼쭐이 나고 교훈을 얻다 / sooner or later : 조만간",
        extras: []
      }
    ]
  },

  // --- DAY 068 ---
  {
    day: 68,
    dayFormatted: "DAY 068",
    title: "면접시험",
    videoId: "gWGuulKx4N0",
    dialogues: [
      {
        id: "d68_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내일 최종 면접이라 너무 긴장돼.",
        en: "I'm on pins and needles about my final interview tomorrow.",
        time: "00:44",
        seconds: 44,
        note: "on pins and needles : 가시방석에 앉은 듯 초조하고 긴장된",
        extras: []
      },
      {
        id: "d68_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "심호흡하고 마음을 가라앉혀봐.",
        en: "Take a deep breath and compose yourself.",
        time: "01:12",
        seconds: 72,
        note: "take a deep breath : 심호흡하다 / compose oneself : 마음을 가다듬다",
        extras: []
      },
      {
        id: "d68_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "압박 질문이 들어오면 말문이 막힐까 봐 걱정돼.",
        en: "I'm afraid I might freeze up if given stress questions.",
        time: "01:46",
        seconds: 106,
        note: "freeze up : (긴장으로) 얼어붙다, 말문이 막히다 / stress question : 압박 질문",
        extras: []
      },
      {
        id: "d68_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "솔직하고 당당하게 답변하면 좋은 결과 있을 거야.",
        en: "Answer honestly and confidently, and you'll do fine.",
        time: "02:20",
        seconds: 140,
        note: "confidently : 자신감 있게 / do fine : 잘 해내다",
        extras: []
      },
      {
        id: "d68_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "예상 질문에 대한 답변을 계속 연습해 봐야겠어.",
        en: "I should keep practicing answers to expected questions.",
        time: "02:52",
        seconds: 172,
        note: "expected questions : 예상 질문",
        extras: []
      },
      {
        id: "d68_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "충분히 준비했으니 잘 해낼 수 있을 거야. 행운을 빌어!",
        en: "You're well prepared. You've got this! Break a leg!",
        time: "03:17",
        seconds: 197,
        note: "You've got this : 넌 해낼 수 있어 / Break a leg : 행운을 빌어 (관용 표현)",
        extras: []
      }
    ]
  },

  // --- DAY 069 ---
  {
    day: 69,
    dayFormatted: "DAY 069",
    title: "아기 재우기",
    videoId: "YyRibwEyhEs",
    dialogues: [
      {
        id: "d69_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "쉿, 조용히 해. 아기가 방금 잠들었어.",
        en: "Shh, keep it down. The baby just fell asleep.",
        time: "00:43",
        seconds: 43,
        note: "keep it down : 조용히 하다, 목소리를 낮추다 / fall asleep : 잠들다",
        extras: []
      },
      {
        id: "d69_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "재우는 데 한 시간 넘게 안고 있었지?",
        en: "You held him for over an hour to put him to sleep?",
        time: "01:10",
        seconds: 70,
        note: "put somebody to sleep : ~를 재우다",
        extras: []
      },
      {
        id: "d69_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "등을 바닥에 대기만 하면 귀신같이 눈을 떠.",
        en: "He wakes up like magic the moment his back touches the bed.",
        time: "01:45",
        seconds: 105,
        note: "the moment ~ : ~하는 순간 / like magic : 마법처럼, 귀신같이 (등 센서)",
        extras: []
      },
      {
        id: "d69_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "살금살금 걸어 다녀야겠네. 까치발로 걷자.",
        en: "We should tiptoe around quietly.",
        time: "02:18",
        seconds: 138,
        note: "tiptoe : 발끝으로 살금살금 걷다",
        extras: []
      },
      {
        id: "d69_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "자는 모습이 천사 같아서 힘든 게 싹 잊혀져.",
        en: "He looks like an angel sleeping, so all the fatigue vanishes.",
        time: "02:50",
        seconds: 170,
        note: "fatigue : 피로 / vanish : 사라지다",
        extras: []
      },
      {
        id: "d69_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "당신도 너무 무리하지 말고 아기 잘 때 같이 한숨 자.",
        en: "Don't push yourself too hard. Take a nap while he sleeps.",
        time: "03:15",
        seconds: 195,
        note: "take a nap : 낮잠을 자다 / while ~ : ~하는 동안에",
        extras: []
      }
    ]
  },

  // --- DAY 070 ---
  {
    day: 70,
    dayFormatted: "DAY 070",
    title: "엄마와 선생님",
    videoId: "ius4CLnoarU",
    dialogues: [
      {
        id: "d70_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "오늘 아이 담임 선생님과 상담을 했어.",
        en: "I had a parent-teacher conference with the homeroom teacher today.",
        time: "00:44",
        seconds: 44,
        note: "parent-teacher conference : 학부모 상담 / homeroom teacher : 담임교사",
        extras: []
      },
      {
        id: "d70_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "선생님께서 학교생활에 대해 뭐라고 말씀하셨어?",
        en: "What did the teacher say about his school life?",
        time: "01:12",
        seconds: 72,
        note: "school life : 학교생활",
        extras: []
      },
      {
        id: "d70_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "친구들과 두루두루 잘 어울리고 발표도 잘한대.",
        en: "She said he gets along well with friends and speaks up in class.",
        time: "01:46",
        seconds: 106,
        note: "get along with ~ : ~와 잘 어울려 지내다 / speak up : 자신 있게 말하다, 발표하다",
        extras: []
      },
      {
        id: "d70_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "집에서는 장난꾸러기인데 학교에선 젓가락처럼 얌전하네.",
        en: "He's a troublemaker at home, but behaves himself at school.",
        time: "02:20",
        seconds: 140,
        note: "troublemaker : 말썽꾸러기 / behave oneself : 예의 바르게 행동하다",
        extras: []
      },
      {
        id: "d70_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "선생님께서 칭찬을 많이 해주셔서 마음이 놓였어.",
        en: "The teacher gave him so much praise that I was relieved.",
        time: "02:52",
        seconds: 172,
        note: "praise : 칭찬 / relieved : 안도하는, 마음이 놓이는",
        extras: []
      },
      {
        id: "d70_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "집에 오면 맛있는 간식 챙겨주고 안아줘야겠어.",
        en: "When he gets home, let's treat him to a snack and give him a hug.",
        time: "03:17",
        seconds: 197,
        note: "treat somebody to ~ : ~에게 ~을 대접하다 / give a hug : 안아주다",
        extras: []
      }
    ]
  },
  // --- DAY 071 ---
  {
    day: 71,
    dayFormatted: "DAY 071",
    title: "기분이 별로야",
    videoId: "VyBHFPIXOp8",
    dialogues: [
      {
        id: "d71_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "비가 엄청 오네. 오늘 일진이 사납겠군.",
        en: "It's really coming down. I'm having a bad hair day.",
        time: "00:44",
        seconds: 44,
        note: "come down : (비나 눈이) 억수같이 쏟아지다 / have a bad hair day : 일이 잘 안 풀리는 날이다, 일진이 사납다",
        extras: [
          { en: "It's pouring.", kr: "비가 억수같이 쏟아진다." }
        ]
      },
      {
        id: "d71_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "운하고 날씨는 아무런 상관이 없어.",
        en: "Your luck has nothing to do with the weather.",
        time: "01:24",
        seconds: 84,
        note: "have nothing to do with ~ : ~와 아무런 관계(상관)가 없다",
        extras: [
          { en: "This has nothing to do with you.", kr: "이건 너와 무관한 일이야." },
          { en: "The rumor has nothing to do with me.", kr: "그 소문은 나와 아무 관계가 없어." }
        ]
      },
      {
        id: "d71_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "언젠가 비를 맞고 감기에 걸렸거든.",
        en: "One day, I got caught in the rain and came down with a cold.",
        time: "01:56",
        seconds: 116,
        note: "get caught in the rain : 비를 맞다 / come down with ~ : (감기 등의 질병에) 걸리다",
        extras: [
          { en: "I got caught in the rain on my way home.", kr: "어제 집에 오는 길에 비를 맞았어." },
          { en: "I think I'm coming down with a cold.", kr: "감기 기운이 있는 것 같아." }
        ]
      },
      {
        id: "d71_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그래서 비 오는 날을 안 좋아하는구나.",
        en: "That's why you're not happy about rainy days.",
        time: "02:44",
        seconds: 164,
        note: "That's why ~ : 그래서 ~한 거구나 / not happy about ~ : ~을 마음에 들어 하지 않다",
        extras: [
          { en: "I'm sorry you're not happy about it.", kr: "만족스럽지 않으시다니 유감입니다." }
        ]
      },
      {
        id: "d71_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "엎친 데 덮친다는 말이 있잖아.",
        en: "Like they say, when it rains, it pours.",
        time: "03:18",
        seconds: 198,
        note: "When it rains, it pours : 엎친 데 덮친 격이다, 안 좋은 일은 겹쳐서 온다",
        extras: [
          { en: "Like they say / You know what they say", kr: "속담에도 있듯이, 그런 말이 있잖아" }
        ]
      },
      {
        id: "d71_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "진정해. 걱정도 팔자구나.",
        en: "Calm down. You're such a worrywart.",
        time: "03:47",
        seconds: 227,
        note: "calm down : 진정하다 / worrywart : 사서 걱정하는 사람, 걱정이 유난히 많은 사람",
        extras: [
          { en: "Take it easy. / Relax.", kr: "진정해. 마음 편히 가져." }
        ]
      }
    ]
  },

  // --- DAY 072 ---
  {
    day: 72,
    dayFormatted: "DAY 072",
    title: "어느 바쁜 날",
    videoId: "xDmY3S0_v5w",
    dialogues: [
      {
        id: "d72_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "왜 내 문자에 답장을 안 해?",
        en: "Why do you keep ignoring my text messages?",
        time: "00:43",
        seconds: 43,
        note: "keep -ing : 계속 ~하다 / ignore one's text : 문자를 무시하다(답장을 안 하다)",
        extras: [
          { en: "Why did you ignore my message?", kr: "왜 내 문자를 씹었어(무시했어)?" }
        ]
      },
      {
        id: "d72_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "운전 중이었어. 일정이 빠듯했거든.",
        en: "I was at the wheel. I had a tight schedule.",
        time: "01:12",
        seconds: 72,
        note: "at the wheel : 운전 중인 (운전대를 잡고 있는) / have a tight schedule : 일정이 빡빡하다",
        extras: [
          { en: "be asleep at the wheel", kr: "졸음운전을 하다" },
          { en: "I'm on a tight schedule today.", kr: "오늘 일정이 정말 빡빡해요." }
        ]
      },
      {
        id: "d72_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "프로젝트 하느라 고생이 많구나.",
        en: "You're bending over backwards for the project.",
        time: "02:03",
        seconds: 123,
        note: "bend over backwards for ~ : ~을 위해 안간힘을 쓰다, 각별한 노력을 기울이다",
        extras: [
          { en: "I know you bent over backwards for me.", kr: "절 위해 애써주신 것 잘 알고 있어요." }
        ]
      },
      {
        id: "d72_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "만사가 늘 원하는 대로 되나.",
        en: "Things don't always go your way.",
        time: "02:39",
        seconds: 159,
        note: "go one's way : 뜻대로 풀리다, 원하는 대로 되다",
        extras: [
          { en: "Things don't always go as planned.", kr: "일이 늘 계획대로 풀리지는 않아." }
        ]
      },
      {
        id: "d72_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "초밥 먹으러 갈래? 내가 살게.",
        en: "Why don't we go get some sushi? My treat.",
        time: "03:03",
        seconds: 183,
        note: "go get ~ : ~을 먹으러 가다 / My treat : 내가 사는 거야(쏠게)",
        extras: [
          { en: "It's on me.", kr: "내가 낼게." }
        ]
      },
      {
        id: "d72_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋지! 내가 딱 좋은 곳을 알아. 마음에 들 거야.",
        en: "Sounds great! I know just the place. You'll love it.",
        time: "03:18",
        seconds: 198,
        note: "know just the place : 딱 알맞은 좋은 장소를 알다",
        extras: []
      }
    ]
  },

  // --- DAY 073 ---
  {
    day: 73,
    dayFormatted: "DAY 073",
    title: "장거리 연애",
    videoId: "Cp3NzfN4zYs",
    dialogues: [
      {
        id: "d73_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "장거리 연애하는 거 힘들지 않아?",
        en: "Isn't it tough being in a long-distance relationship?",
        time: "00:44",
        seconds: 44,
        note: "long-distance relationship : 장거리 연애 (롱디)",
        extras: []
      },
      {
        id: "d73_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "자주 못 봐서 그립긴 하지만 매일 영상통화 해.",
        en: "I miss her not seeing her often, but we video call every day.",
        time: "01:10",
        seconds: 70,
        note: "video call : 영상통화하다",
        extras: []
      },
      {
        id: "d73_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "몸이 멀어지면 마음도 멀어진다는 말도 있잖아.",
        en: "They say out of sight, out of mind.",
        time: "01:45",
        seconds: 105,
        note: "out of sight, out of mind : 눈에서 멀어지면 마음도 멀어진다",
        extras: []
      },
      {
        id: "d73_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우린 서로에 대한 굳건한 신뢰가 있어.",
        en: "We have solid trust in each other.",
        time: "02:18",
        seconds: 138,
        note: "solid trust : 확고한 신뢰 / each other : 서로",
        extras: []
      },
      {
        id: "d73_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "애틋함이 관계를 더 단단하게 만들어주나 봐.",
        en: "Absence must make the heart grow fonder.",
        time: "02:50",
        seconds: 170,
        note: "Absence makes the heart grow fonder : 떨어져 있으면 그리움이 커진다",
        extras: []
      },
      {
        id: "d73_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 만날 때마다 매 순간이 소중해.",
        en: "Right. Every moment is precious when we meet.",
        time: "03:15",
        seconds: 195,
        note: "precious : 귀중한, 소중한",
        extras: []
      }
    ]
  },

  // --- DAY 074 ---
  {
    day: 74,
    dayFormatted: "DAY 074",
    title: "대학 동창회",
    videoId: "1NTPXtruN4E",
    dialogues: [
      {
        id: "d74_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 주말 대학 동창회에 갈 거야?",
        en: "Are you going to the college reunion this weekend?",
        time: "00:43",
        seconds: 43,
        note: "college reunion : 대학 동창회",
        extras: []
      },
      {
        id: "d74_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 졸업하고 거의 10년 만에 모이는 거잖아.",
        en: "Yeah, it's our first gathering in nearly ten years since graduation.",
        time: "01:10",
        seconds: 70,
        note: "gathering : 모임 / graduation : 졸업",
        extras: []
      },
      {
        id: "d74_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "옛날 친구들 다시 볼 생각에 정말 설렌다.",
        en: "I'm so thrilled to see my old friends again.",
        time: "01:46",
        seconds: 106,
        note: "be thrilled to ~ : ~하게 되어 매우 설레다/신나다",
        extras: []
      },
      {
        id: "d74_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다들 어떻게 변했을지 정말 궁금해.",
        en: "I wonder how everyone has changed over time.",
        time: "02:20",
        seconds: 140,
        note: "wonder : 궁금하다 / over time : 시간이 흐르면서",
        extras: []
      },
      {
        id: "d74_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "밤새 옛 추억을 나누며 이야기꽃을 피우겠네.",
        en: "We'll stay up all night reminiscing about old memories.",
        time: "02:52",
        seconds: 172,
        note: "stay up all night : 밤새우다 / reminisce about ~ : ~을 추억하다, 회상하다",
        extras: []
      },
      {
        id: "d74_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "카메라 챙겨가서 사진 많이 남기자.",
        en: "Let's bring a camera and take lots of photos.",
        time: "03:16",
        seconds: 196,
        note: "take photos : 사진을 찍다",
        extras: []
      }
    ]
  },

  // --- DAY 075 ---
  {
    day: 75,
    dayFormatted: "DAY 075",
    title: "엄마의 잔소리",
    videoId: "ItC8wN7hzB4",
    dialogues: [
      {
        id: "d75_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "방 좀 치우고 살아라. 발 디딜 틈이 없잖니.",
        en: "Clean up your room. There's barely room to stand.",
        time: "00:44",
        seconds: 44,
        note: "barely room to stand : 발 디딜 틈도 거의 없는",
        extras: []
      },
      {
        id: "d75_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이따가 할게요. 저 지금 바빠요.",
        en: "I'll do it later. I'm busy right now.",
        time: "01:12",
        seconds: 72,
        note: "do it later : 나중에 하다",
        extras: []
      },
      {
        id: "d75_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "매번 말로만 그러고 미루기만 하잖아.",
        en: "You always just say that and keep procrastinating.",
        time: "01:46",
        seconds: 106,
        note: "procrastinate : 일을 미루다, 늑장 부리다",
        extras: []
      },
      {
        id: "d75_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "제 방이니까 제가 알아서 할게요.",
        en: "It's my room, so I'll take care of it myself.",
        time: "02:18",
        seconds: 138,
        note: "take care of it oneself : 스스로 알아서 처리하다",
        extras: []
      },
      {
        id: "d75_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "다 널 위해서 하는 잔소리인 거 몰라?",
        en: "Don't you know I'm nagging you for your own good?",
        time: "02:50",
        seconds: 170,
        note: "nag : 잔소리하다 / for your own good : 다 너 잘되라고",
        extras: []
      },
      {
        id: "d75_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어요. 30분 안에 싹 치울게요.",
        en: "Okay, Mom. I'll tidy it all up within 30 minutes.",
        time: "03:15",
        seconds: 195,
        note: "tidy up : 말끔히 정리정돈하다 / within ~ : ~ 이내에",
        extras: []
      }
    ]
  },

  // --- DAY 076 ---
  {
    day: 76,
    dayFormatted: "DAY 076",
    title: "친환경 자동차",
    videoId: "85_BLo1kniY",
    dialogues: [
      {
        id: "d76_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "전기차로 바꿀까 진지하게 고민 중이야.",
        en: "I'm seriously considering switching to an electric vehicle.",
        time: "00:45",
        seconds: 45,
        note: "seriously consider : 진지하게 고민하다 / electric vehicle (EV) : 전기차",
        extras: []
      },
      {
        id: "d76_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "유지비도 적게 들고 환경에도 좋잖아.",
        en: "Maintenance costs are low and it's eco-friendly.",
        time: "01:14",
        seconds: 74,
        note: "maintenance cost : 유지비 / eco-friendly : 친환경적인",
        extras: []
      },
      {
        id: "d76_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "충전소 찾기가 여전히 불편하지는 않을까?",
        en: "Wouldn't finding charging stations still be inconvenient?",
        time: "01:50",
        seconds: 110,
        note: "charging station : 충전소 / inconvenient : 불편한",
        extras: []
      },
      {
        id: "d76_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "요즘 아파트 단지마다 충전기가 잘 갖춰져 있어.",
        en: "These days, charging ports are well equipped in apartment complexes.",
        time: "02:24",
        seconds: 144,
        note: "well equipped : 잘 갖추어진 / apartment complex : 아파트 단지",
        extras: []
      },
      {
        id: "d76_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정부 보조금 혜택도 받을 수 있는지 알아봐야겠어.",
        en: "I should check if I can get government subsidies.",
        time: "02:55",
        seconds: 175,
        note: "government subsidy : 정부 보조금",
        extras: []
      },
      {
        id: "d76_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "시승 신청부터 먼저 해보고 결정해.",
        en: "Sign up for a test drive first before you decide.",
        time: "03:20",
        seconds: 200,
        note: "test drive : 시승 / sign up for ~ : ~을 신청하다",
        extras: []
      }
    ]
  },

  // --- DAY 077 ---
  {
    day: 77,
    dayFormatted: "DAY 077",
    title: "엄마의 장난",
    videoId: "z42KQ8WNyoc",
    dialogues: [
      {
        id: "d77_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "엄마가 오늘 만우절이라고 나한테 거짓말하셨어.",
        en: "My mom played a prank on me for April Fools' Day.",
        time: "00:43",
        seconds: 43,
        note: "play a prank on ~ : ~에게 장난을 치다 / April Fools' Day : 만우절",
        extras: []
      },
      {
        id: "d77_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어머니가 센스가 대단하시네! 무슨 장난이었는데?",
        en: "Your mom has great wit! What kind of prank was it?",
        time: "01:10",
        seconds: 70,
        note: "wit : 재치, 센스",
        extras: []
      },
      {
        id: "d77_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "복권 1등에 당첨됐다고 해서 깜짝 속았잖아.",
        en: "She said she hit the lottery jackpot, and I fell for it.",
        time: "01:45",
        seconds: 105,
        note: "hit the lottery jackpot : 복권 1등에 당첨되다 / fall for it : (속임수에) 속아 넘어가다",
        extras: []
      },
      {
        id: "d77_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말 깜빡 속을 만한 장난이었네.",
        en: "That was totally believable enough to fall for.",
        time: "02:18",
        seconds: 138,
        note: "believable : 그럴듯한, 믿을 만한",
        extras: []
      },
      {
        id: "d77_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "온 가족이 한바탕 크게 웃었어.",
        en: "The whole family had a hearty laugh together.",
        time: "02:50",
        seconds: 170,
        note: "have a hearty laugh : 한바탕 통쾌하게 웃다",
        extras: []
      },
      {
        id: "d77_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "유쾌한 장난으로 하루가 즐거웠겠네.",
        en: "A playful joke must have brightened up your day.",
        time: "03:15",
        seconds: 195,
        note: "brighten up one's day : 하루를 유쾌하게 만들다",
        extras: []
      }
    ]
  },

  // --- DAY 078 ---
  {
    day: 78,
    dayFormatted: "DAY 078",
    title: "야근수당 주세요",
    videoId: "Av_krPb1unc",
    dialogues: [
      {
        id: "d78_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 주 내내 야근하느라 녹초가 됐어.",
        en: "I've been working overtime all week and I'm exhausted.",
        time: "00:44",
        seconds: 44,
        note: "work overtime : 야근하다 / exhausted : 기진맥진한",
        extras: []
      },
      {
        id: "d78_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "야근 수당은 제대로 챙겨주고 있는 거야?",
        en: "Are they paying you overtime pay properly?",
        time: "01:12",
        seconds: 72,
        note: "overtime pay : 야근수당 / properly : 제대로",
        extras: []
      },
      {
        id: "d78_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "포괄임금제라 야근 수당이 따로 없어.",
        en: "It's a comprehensive wage system, so there's no extra pay.",
        time: "01:46",
        seconds: 106,
        note: "comprehensive wage system : 포괄임금제 / extra pay : 추가 수당",
        extras: []
      },
      {
        id: "d78_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "일한 만큼 정당하게 보상받아야 마땅한데.",
        en: "You deserve to be fairly compensated for your hard work.",
        time: "02:20",
        seconds: 140,
        note: "deserve to ~ : ~받아 마땅하다 / compensate : 보상하다",
        extras: []
      },
      {
        id: "d78_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "대체 휴가라도 쓸 수 있게 해줬으면 좋겠어.",
        en: "I wish they'd at least let us take compensatory time off.",
        time: "02:52",
        seconds: 172,
        note: "compensatory time off : 대체 휴무(보상 휴가)",
        extras: []
      },
      {
        id: "d78_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "건강 상하지 않게 쉬어가면서 일해.",
        en: "Pace yourself so you don't ruin your health.",
        time: "03:17",
        seconds: 197,
        note: "pace oneself : 완급을 조절하다 / ruin one's health : 건강을 망치다",
        extras: []
      }
    ]
  },

  // --- DAY 079 ---
  {
    day: 79,
    dayFormatted: "DAY 079",
    title: "건강한 습관",
    videoId: "ch8TgXpLark",
    dialogues: [
      {
        id: "d79_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아침에 일어나자마자 미온수 한 잔씩 마시고 있어.",
        en: "I drink a glass of lukewarm water first thing in the morning.",
        time: "00:43",
        seconds: 43,
        note: "lukewarm water : 미온수 / first thing in the morning : 아침에 일어나자마자",
        extras: []
      },
      {
        id: "d79_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그게 신진대사를 깨우는 데 정말 좋다더라.",
        en: "I heard it's great for jump-starting your metabolism.",
        time: "01:10",
        seconds: 70,
        note: "jump-start : 활성화하다, 시동을 걸다 / metabolism : 신진대사",
        extras: []
      },
      {
        id: "d79_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "그리고 하루에 만 보씩 걷기도 실천 중이야.",
        en: "And I'm also practicing walking 10,000 steps a day.",
        time: "01:45",
        seconds: 105,
        note: "practice : 실천하다 / 10,000 steps : 만 보",
        extras: []
      },
      {
        id: "d79_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "작은 습관이 모여서 큰 건강 변화를 만들지.",
        en: "Small habits add up to make a huge difference in health.",
        time: "02:18",
        seconds: 138,
        note: "add up to ~ : 조금씩 쌓여 ~가 되다 / make a difference : 변화를 만들다",
        extras: []
      },
      {
        id: "d79_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "몸이 한결 가볍고 활력이 넘쳐.",
        en: "My body feels so much lighter and full of energy.",
        time: "02:50",
        seconds: 170,
        note: "full of energy : 활력이 넘치는",
        extras: []
      },
      {
        id: "d79_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "나도 본받아서 오늘부터 실천해야겠다.",
        en: "I should follow your lead and start today.",
        time: "03:15",
        seconds: 195,
        note: "follow one's lead : ~의 선례를 따르다, 본받다",
        extras: []
      }
    ]
  },

  // --- DAY 080 ---
  {
    day: 80,
    dayFormatted: "DAY 080",
    title: "친구의 이혼",
    videoId: "-wXH6ghXeMc",
    dialogues: [
      {
        id: "d80_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "민수 부부가 결국 이혼하기로 했대.",
        en: "Minsu and his wife finally decided to get a divorce.",
        time: "00:44",
        seconds: 44,
        note: "get a divorce : 이혼하다",
        extras: []
      },
      {
        id: "d80_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "정말 충격이다. 잉꼬부부인 줄 알았는데.",
        en: "That's shocking. I thought they were lovebirds.",
        time: "01:12",
        seconds: 72,
        note: "shocking : 충격적인 / lovebirds : 잉꼬부부, 금슬 좋은 부부",
        extras: []
      },
      {
        id: "d80_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "성격 차이 때문에 오래전부터 갈등이 깊었나 봐.",
        en: "Personality clashes must have caused deep conflict for a while.",
        time: "01:46",
        seconds: 106,
        note: "personality clash : 성격 차이/충돌 / deep conflict : 깊은 갈등",
        extras: []
      },
      {
        id: "d80_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "남녀 사이의 일은 당사자들만 아는 법이지.",
        en: "Only the couple truly knows what goes on behind closed doors.",
        time: "02:20",
        seconds: 140,
        note: "behind closed doors : 은밀하게, 당사자들만 아는 곳에서",
        extras: []
      },
      {
        id: "d80_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어려운 결정을 내렸으니 각자의 길을 응원해 줘야지.",
        en: "Since they made a hard choice, we should root for their own paths.",
        time: "02:52",
        seconds: 172,
        note: "root for ~ : ~을 응원하다",
        extras: []
      },
      {
        id: "d80_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "친구로서 곁에서 묵묵히 힘이 되어주자.",
        en: "As friends, let's just quietly stand by him and support him.",
        time: "03:17",
        seconds: 197,
        note: "stand by ~ : ~의 곁을 지키다, 지지하다",
        extras: []
      }
    ]
  },
  // --- DAY 081 ---
  {
    day: 81,
    dayFormatted: "DAY 081",
    title: "금단 현상",
    videoId: "mm_zKnFaktc",
    dialogues: [
      {
        id: "d81_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "왜 손톱을 물어뜯고 그래?",
        en: "Why are you biting your nails?",
        time: "00:43",
        seconds: 43,
        note: "bite one's nails : 손톱을 물어뜯다",
        extras: [
          { en: "Stop biting your nails.", kr: "손톱 좀 그만 물어뜯어." }
        ]
      },
      {
        id: "d81_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "며칠 전에 갑자기 담배를 끊었거든.",
        en: "Well, I quit smoking cold turkey a few days ago.",
        time: "00:58",
        seconds: 58,
        note: "quit ~ cold turkey : (나쁜 습관 등을) 단번에 갑자기 끊다",
        extras: [
          { en: "I tried to quit cold turkey, but failed.", kr: "단번에 끊으려 했는데 실패했어." }
        ]
      },
      {
        id: "d81_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "금단현상이구나. 계속 열심히 해봐.",
        en: "You're having withdrawal symptoms. Keep up the good work.",
        time: "01:26",
        seconds: 86,
        note: "withdrawal symptoms : 금단현상 / Keep up the good work : 지금처럼 계속 열심히 해",
        extras: [
          { en: "have withdrawals", kr: "금단현상을 겪다" }
        ]
      },
      {
        id: "d81_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "네가 그렇게 말할 처지는 아니잖아.",
        en: "You're in no place to talk like that.",
        time: "02:14",
        seconds: 134,
        note: "be in no place to ~ : ~할 처지(입장)가 아니다",
        extras: [
          { en: "I'm not in a position to make that decision.", kr: "난 그걸 결정할 위치에 있지 않아." }
        ]
      },
      {
        id: "d81_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "할 말이 없네. 나도 곧 담배 끊을 거야.",
        en: "You got me. I'll give up smoking soon.",
        time: "02:57",
        seconds: 177,
        note: "You got me : (정곡을 찔려) 내가 졌다, 할 말이 없네 / give up : 끊다, 포기하다",
        extras: []
      },
      {
        id: "d81_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "한번 해볼 거야. 뭐든지 해야지.",
        en: "I'm going to give it a try. I'll try anything.",
        time: "03:39",
        seconds: 219,
        note: "give it a try : 시도해 보다, 한번 해보다 / try anything : 뭐든 시도하다",
        extras: [
          { en: "Why don't you give it a try?", kr: "한번 시도해 보는 게 어때?" }
        ]
      }
    ]
  },

  // --- DAY 082 ---
  {
    day: 82,
    dayFormatted: "DAY 082",
    title: "컨디션 안 좋은 날",
    videoId: "Mcu2A2Fj3E8",
    dialogues: [
      {
        id: "d82_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 눈이 부은 것 같아.",
        en: "I think your eyes are swollen.",
        time: "00:41",
        seconds: 41,
        note: "swollen / puffy : 부은, 부어오른",
        extras: [
          { en: "Your face is puffy.", kr: "얼굴이 부었어." },
          { en: "I woke up with swollen eyes.", kr: "자고 일어났더니 눈이 부었어." }
        ]
      },
      {
        id: "d82_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어젯밤에 한숨도 못 잤어.",
        en: "I didn't get a wink of sleep last night.",
        time: "01:13",
        seconds: 73,
        note: "not get a wink of sleep : 눈을 한숨도 못 붙이다",
        extras: [
          { en: "I couldn't sleep a wink.", kr: "한숨도 잘 수 없었어." }
        ]
      },
      {
        id: "d82_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "점심시간에 잠깐 눈 좀 붙여.",
        en: "Take a quick nap during your lunch break.",
        time: "01:36",
        seconds: 96,
        note: "take a quick nap : 잠깐 눈을 붙이다 / lunch break : 점심시간",
        extras: [
          { en: "take a quick shower", kr: "간단히 샤워하다" }
        ]
      },
      {
        id: "d82_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다행히 오늘 부장님이 출장 가셨어.",
        en: "Luckily, my boss is on a business trip today.",
        time: "02:00",
        seconds: 120,
        note: "be on a business trip : 출장 중이다",
        extras: [
          { en: "He is on a business trip to China.", kr: "그는 중국으로 출장 가 있어." }
        ]
      },
      {
        id: "d82_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "근데 우리 이따가 화상 회의에 참석해야 해.",
        en: "But we need to attend a video conference later.",
        time: "02:26",
        seconds: 146,
        note: "attend : 참석하다 / video conference : 화상 회의",
        extras: [
          { en: "attend a meeting", kr: "회의에 참석하다" }
        ]
      },
      {
        id: "d82_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오늘 제정신이 아니야. 긴 하루가 되겠군.",
        en: "I'm not myself today. It's going to be a long day.",
        time: "02:58",
        seconds: 178,
        note: "be not oneself : 제정신이 아니다, 평소 같지 않다 / a long day : 힘들고 긴 하루",
        extras: [
          { en: "It's been a long day.", kr: "정말 힘든 하루였어." }
        ]
      }
    ]
  },

  // --- DAY 083 ---
  {
    day: 83,
    dayFormatted: "DAY 083",
    title: "건강이 최고야",
    videoId: "8glVNbNMTEg",
    dialogues: [
      {
        id: "d83_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정기 건강검진 결과 나왔어?",
        en: "Did you get the results of your regular checkup?",
        time: "00:43",
        seconds: 43,
        note: "regular checkup : 정기 건강검진 / result : 결과",
        extras: []
      },
      {
        id: "d83_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "혈압이랑 콜레스테롤 수치가 조금 높게 나왔어.",
        en: "My blood pressure and cholesterol levels were slightly high.",
        time: "01:10",
        seconds: 70,
        note: "blood pressure : 혈압 / cholesterol level : 콜레스테롤 수치",
        extras: []
      },
      {
        id: "d83_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "짜게 먹는 식습관부터 당장 고쳐야겠네.",
        en: "You should fix your habit of eating salty food right away.",
        time: "01:45",
        seconds: 105,
        note: "eating habit : 식습관 / salty : 짠",
        extras: []
      },
      {
        id: "d83_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "의사 선생님이 유산소 운동도 매일 하라고 권하셨어.",
        en: "The doctor advised me to do cardio exercise every day.",
        time: "02:18",
        seconds: 138,
        note: "advise somebody to ~ : ~에게 권고하다 / cardio exercise : 유산소 운동",
        extras: []
      },
      {
        id: "d83_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "아프고 나서 후회해 봤자 소용없잖아.",
        en: "It's no use regretting it after getting sick.",
        time: "02:50",
        seconds: 170,
        note: "It's no use -ing : ~해 봤자 소용없다 / regret : 후회하다",
        extras: []
      },
      {
        id: "d83_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "맞는 말이야. 건강 잃으면 다 잃는 거지.",
        en: "True that. If you lose health, you lose everything.",
        time: "03:15",
        seconds: 195,
        note: "True that : 맞는 말이야 (동의 표현)",
        extras: []
      }
    ]
  },

  // --- DAY 084 ---
  {
    day: 84,
    dayFormatted: "DAY 084",
    title: "엄마의 생일",
    videoId: "As3uD9rZHao",
    dialogues: [
      {
        id: "d84_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 주말이 어머니 생신인 거 알고 있지?",
        en: "You know this weekend is Mom's birthday, right?",
        time: "00:44",
        seconds: 44,
        note: "birthday : 생일",
        extras: []
      },
      {
        id: "d84_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "그럼, 깜빡할 리가 있겠어? 선물 뭐로 할까?",
        en: "Of course, how could I forget? What should we get her?",
        time: "01:12",
        seconds: 72,
        note: "how could I forget? : 내가 어떻게 잊겠어?",
        extras: []
      },
      {
        id: "d84_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "돈봉투랑 같이 스카프 하나 사드리면 어떨까?",
        en: "How about buying her a scarf along with a cash envelope?",
        time: "01:46",
        seconds: 106,
        note: "cash envelope : 돈봉투(용돈 봉투) / along with ~ : ~와 함께",
        extras: []
      },
      {
        id: "d84_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋아! 분위기 좋은 한정식집 예약해 둘게.",
        en: "Sounds great! I'll book a nice traditional Korean restaurant.",
        time: "02:20",
        seconds: 140,
        note: "book : 예약하다 / traditional Korean restaurant : 한정식집",
        extras: []
      },
      {
        id: "d84_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "수제 생일 케이크도 미리 맞춰두자.",
        en: "Let's also custom-order a handmade birthday cake in advance.",
        time: "02:52",
        seconds: 172,
        note: "custom-order : 주문 제작하다 / in advance : 미리",
        extras: []
      },
      {
        id: "d84_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어머니께서 엄청 감동받으실 거야.",
        en: "Mom is going to be so deeply touched.",
        time: "03:17",
        seconds: 197,
        note: "deeply touched : 깊이 감동받은",
        extras: []
      }
    ]
  },

  // --- DAY 085 ---
  {
    day: 85,
    dayFormatted: "DAY 085",
    title: "어깨 통증",
    videoId: "1amvgG_Ybf0",
    dialogues: [
      {
        id: "d85_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "하루 종일 컴퓨터를 봤더니 어깨가 결려.",
        en: "My shoulders are stiff from staring at the computer all day.",
        time: "00:43",
        seconds: 43,
        note: "stiff : 뻐근한, 결리는 / stare at ~ : ~을 응시하다",
        extras: []
      },
      {
        id: "d85_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "목이랑 어깨 스트레칭 좀 자주 해줘.",
        en: "You should stretch your neck and shoulders frequently.",
        time: "01:10",
        seconds: 70,
        note: "stretch : 스트레칭하다 / frequently : 자주",
        extras: []
      },
      {
        id: "d85_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어깨에 돌덩이를 얹어 놓은 것 같아.",
        en: "It feels like I have heavy rocks on my shoulders.",
        time: "01:45",
        seconds: 105,
        note: "feel like ~ : 마치 ~처럼 느껴지다",
        extras: []
      },
      {
        id: "d85_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "모니터 높이를 눈높이에 맞춰 조절해 봐.",
        en: "Try adjusting your monitor to eye level.",
        time: "02:18",
        seconds: 138,
        note: "adjust : 조절하다 / eye level : 눈높이",
        extras: []
      },
      {
        id: "d85_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "퇴근하고 온찜질 좀 해야겠어.",
        en: "I should apply a hot compress after work.",
        time: "02:50",
        seconds: 170,
        note: "hot compress : 온찜질",
        extras: [
          { en: "cold compress", kr: "냉찜질" }
        ]
      },
      {
        id: "d85_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "통증이 지속되면 한의원에 가서 침 맞아봐.",
        en: "If the pain persists, go get acupuncture at a clinic.",
        time: "03:15",
        seconds: 195,
        note: "persist : 지속되다 / acupuncture : 침술, 침 치료",
        extras: []
      }
    ]
  },

  // --- DAY 086 ---
  {
    day: 86,
    dayFormatted: "DAY 086",
    title: "고속도로 휴게소",
    videoId: "rdvCEHI9vuc",
    dialogues: [
      {
        id: "d86_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "다음 휴게소에 들러서 화장실 좀 가자.",
        en: "Let's pull into the next rest area and use the restroom.",
        time: "00:44",
        seconds: 44,
        note: "pull into ~ : (차를 몰고) ~에 들어가다 / rest area : 휴게소",
        extras: []
      },
      {
        id: "d86_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "마침 슬슬 졸리던 참이었는데 잘됐다.",
        en: "Good timing. I was just getting drowsy anyway.",
        time: "01:12",
        seconds: 72,
        note: "drowsy : 졸리는, 나른한",
        extras: []
      },
      {
        id: "d86_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "휴게소 명물 호두과자랑 소떡소떡 먹자.",
        en: "Let's grab some walnut pastries and skewered sausage and rice cakes.",
        time: "01:46",
        seconds: 106,
        note: "walnut pastry : 호두과자 / skewer : 꼬치",
        extras: []
      },
      {
        id: "d86_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "휴게소 간식 먹는 게 장거리 운전의 묘미지.",
        en: "Eating rest stop snacks is the highlight of long road trips.",
        time: "02:20",
        seconds: 140,
        note: "highlight : 가장 좋은 부분, 묘미 / road trip : 자동차 여행",
        extras: []
      },
      {
        id: "d86_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "잠 깨게 시원한 캔커피도 하나 사다 줄게.",
        en: "I'll grab you an iced canned coffee to wake you up.",
        time: "02:52",
        seconds: 172,
        note: "wake somebody up : 잠을 깨우다",
        extras: []
      },
      {
        id: "d86_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "고마워. 스트레칭 좀 하고 다시 출발하자.",
        en: "Thanks. Let's do some stretching before hitting the road again.",
        time: "03:17",
        seconds: 197,
        note: "hit the road : 다시 길을 떠나다, 출발하다",
        extras: []
      }
    ]
  },

  // --- DAY 087 ---
  {
    day: 87,
    dayFormatted: "DAY 087",
    title: "육아의 달인",
    videoId: "S_XHppT3w3w",
    dialogues: [
      {
        id: "d87_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "너 아기 다루는 솜씨가 보통이 아니네.",
        en: "You're really handy with handling babies.",
        time: "00:43",
        seconds: 43,
        note: "be handy with ~ : ~에 솜씨가 좋다 / handle : 다루다",
        extras: []
      },
      {
        id: "d87_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "조카들을 워낙 많이 돌봐서 익숙해졌어.",
        en: "I've babysat my nieces and nephews so much that I'm used to it.",
        time: "01:10",
        seconds: 70,
        note: "niece : 조카딸 / nephew : 조카 / be used to ~ : ~에 익숙하다",
        extras: []
      },
      {
        id: "d87_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "울던 아기도 네 품에만 안기면 뚝 그쳐.",
        en: "Crying babies stop immediately once held in your arms.",
        time: "01:45",
        seconds: 105,
        note: "immediately : 즉시, 뚝 / hold in one's arms : 품에 안다",
        extras: []
      },
      {
        id: "d87_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아기 눈높이에 맞춰 놀아주는 게 비결이야.",
        en: "Playing with them at eye level is the secret.",
        time: "02:18",
        seconds: 138,
        note: "at eye level : 눈높이에 맞춰",
        extras: []
      },
      {
        id: "d87_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "나중에 좋은 부모가 될 게 틀림없어.",
        en: "There's no doubt you'll make an amazing parent someday.",
        time: "02:50",
        seconds: 170,
        note: "There is no doubt : 틀림없다 / make a good parent : 좋은 부모가 되다",
        extras: []
      },
      {
        id: "d87_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "아이들이 웃는 모습을 보면 피로가 다 풀려.",
        en: "Seeing kids smile washes away all my tiredness.",
        time: "03:15",
        seconds: 195,
        note: "wash away : 씻은 듯이 날려버리다 / tiredness : 피로",
        extras: []
      }
    ]
  },

  // --- DAY 088 ---
  {
    day: 88,
    dayFormatted: "DAY 088",
    title: "객지 생활",
    videoId: "OFhWjTCn9QE",
    dialogues: [
      {
        id: "d88_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "혼자 자취하면서 객지 생활하는 거 외롭지 않아?",
        en: "Don't you feel lonely living on your own away from home?",
        time: "00:44",
        seconds: 44,
        note: "live on one's own : 혼자 살다 / away from home : 집을 떠나 객지에서",
        extras: []
      },
      {
        id: "d88_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "처음엔 향수병 때문에 힘들었는데 이젠 적응했어.",
        en: "Homesickness was rough at first, but I've adjusted now.",
        time: "01:12",
        seconds: 72,
        note: "homesickness : 향수병 / adjust : 적응하다",
        extras: []
      },
      {
        id: "d88_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "집밥 챙겨 먹는 게 가장 번거롭지?",
        en: "Cooking home-cooked meals must be the biggest hassle, right?",
        time: "01:46",
        seconds: 106,
        note: "home-cooked meal : 집밥 / hassle : 번거롭고 귀찮은 일",
        extras: []
      },
      {
        id: "d88_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "응, 배달 음식도 슬슬 물려서 직접 해 먹어.",
        en: "Yeah, I got sick of takeout, so I cook for myself.",
        time: "02:20",
        seconds: 140,
        note: "get sick of ~ : ~에 물리다, 진절머리 나다 / takeout : 배달/포장 음식",
        extras: []
      },
      {
        id: "d88_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "부모님 소중함을 객지 나와서 절실히 깨달았지?",
        en: "You truly realized how precious your parents are, didn't you?",
        time: "02:52",
        seconds: 172,
        note: "realize : 깨닫다 / precious : 소중한",
        extras: []
      },
      {
        id: "d88_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "맞아. 주말마다 안부 전화 꼬박꼬박 드리고 있어.",
        en: "Totally. I make sure to call them every single weekend.",
        time: "03:17",
        seconds: 197,
        note: "make sure to ~ : 반드시 꼭 ~하다",
        extras: []
      }
    ]
  },

  // --- DAY 089 ---
  {
    day: 89,
    dayFormatted: "DAY 089",
    title: "공감력 부족",
    videoId: "geyrel66p-g",
    dialogues: [
      {
        id: "d89_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내 힘든 얘기를 하면 해결책만 제시하려 들어.",
        en: "Whenever I talk about my struggles, he only offers solutions.",
        time: "00:43",
        seconds: 43,
        note: "struggles : 힘든 일, 고민 / offer solutions : 해결책을 제시하다",
        extras: []
      },
      {
        id: "d89_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "넌 그저 따뜻한 위로와 공감이 필요한 거잖아.",
        en: "All you need is just warm comfort and empathy.",
        time: "01:10",
        seconds: 70,
        note: "comfort : 위로 / empathy : 공감",
        extras: []
      },
      {
        id: "d89_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "맞아. 누가 정답을 몰라서 털어놓는 게 아닌데.",
        en: "Exactly. It's not like I open up because I don't know the answer.",
        time: "01:45",
        seconds: 105,
        note: "It's not like ~ : ~인 것은 아니다 / open up : 마음을 털어놓다",
        extras: []
      },
      {
        id: "d89_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가끔은 묵묵히 고개 끄덕이며 들어주는 게 최고야.",
        en: "Sometimes just quietly nodding and listening is best.",
        time: "02:18",
        seconds: 138,
        note: "nod : 고개를 끄덕이다",
        extras: []
      },
      {
        id: "d89_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "감정적인 공감대를 형성하는 법을 배웠으면 좋겠어.",
        en: "I wish he'd learn how to build emotional rapport.",
        time: "02:50",
        seconds: 170,
        note: "emotional rapport : 감정적 공감대/유대감",
        extras: []
      },
      {
        id: "d89_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "원하는 대화 방식을 솔직하게 터놓고 얘기해 봐.",
        en: "Tell him honestly what kind of conversation style you prefer.",
        time: "03:15",
        seconds: 195,
        note: "conversation style : 대화 방식 / prefer : 선호하다",
        extras: []
      }
    ]
  },

  // --- DAY 090 ---
  {
    day: 90,
    dayFormatted: "DAY 090",
    title: "보고서 마감",
    videoId: "qDUuU7yfOw0",
    dialogues: [
      {
        id: "d90_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "분기 실적 보고서 마감일이 언제까지야?",
        en: "When is the deadline for the quarterly report?",
        time: "00:44",
        seconds: 44,
        note: "deadline : 마감일 / quarterly report : 분기 보고서",
        extras: []
      },
      {
        id: "d90_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "오늘 퇴근 전까지 부장님께 제출해야 해.",
        en: "We must submit it to the director before leaving today.",
        time: "01:12",
        seconds: 72,
        note: "submit : 제출하다 / director : 부장, 이사",
        extras: []
      },
      {
        id: "d90_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "자료 취합하고 도표 수정하려면 시간이 촉박한데.",
        en: "Time is running out to gather data and fix the charts.",
        time: "01:46",
        seconds: 106,
        note: "Time is running out : 시간이 촉박하다, 다 떨어져 간다 / gather data : 자료를 취합하다",
        extras: []
      },
      {
        id: "d90_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "내가 오탈자 검토랑 서식 편집을 맡아서 도울게.",
        en: "I'll help you by proofreading and formatting the document.",
        time: "02:20",
        seconds: 140,
        note: "proofread : 교정/오탈자를 보다 / format : 서식을 맞추다",
        extras: []
      },
      {
        id: "d90_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "정말 든든하다. 역할 분담해서 빨리 끝내자.",
        en: "That's a huge relief. Let's divide and conquer to finish fast.",
        time: "02:52",
        seconds: 172,
        note: "divide and conquer : 역할을 분담하여 효율적으로 처리하다",
        extras: []
      },
      {
        id: "d90_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "마감 지키고 칼퇴근해서 한잔하러 가자.",
        en: "Let's meet the deadline, leave on time, and grab a drink.",
        time: "03:17",
        seconds: 197,
        note: "meet the deadline : 마감 시한을 맞추다 / leave on time : 정시 퇴근하다(칼퇴근)",
        extras: []
      }
    ]
  },
  // --- DAY 091 ---
  {
    day: 91,
    dayFormatted: "DAY 091",
    title: "초밥이 너무 좋아",
    videoId: "tLm8IoaFY40",
    dialogues: [
      {
        id: "d91_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 주 토요일에 뭐 할 거야?",
        en: "What are your plans for this Saturday?",
        time: "00:44",
        seconds: 44,
        note: "What are your plans for ~? : ~에 어떤 계획이 있니?",
        extras: [
          { en: "What are your plans for tomorrow?", kr: "너 내일 뭐 할 거야?" }
        ]
      },
      {
        id: "d91_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "집에서 밀린 독서를 할 것 같아.",
        en: "Maybe I'll catch up on my reading at home.",
        time: "01:14",
        seconds: 74,
        note: "catch up on ~ : (밀린 일/잠 등을) 따라잡다, 보충하다",
        extras: [
          { en: "I need to catch up on some sleep.", kr: "밀린 잠 좀 자야겠어." },
          { en: "I have a lot of work to catch up on.", kr: "밀린 일이 너무 많아." }
        ]
      },
      {
        id: "d91_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "가족 모임이 있다고 하지 않았니?",
        en: "Didn't you say you have a family gathering?",
        time: "01:37",
        seconds: 97,
        note: "Didn't you say ~? : ~라고 말하지 않았어? / family gathering : 가족 모임",
        extras: [
          { en: "hold a family gathering", kr: "가족 모임을 열다" }
        ]
      },
      {
        id: "d91_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "남동생 때문에 다음 주로 연기되었어.",
        en: "It has been put off until next week because of my brother.",
        time: "02:04",
        seconds: 124,
        note: "be put off until ~ : ~까지 연기되다 / because of ~ : ~ 때문에",
        extras: [
          { en: "The event was put off until the end of this month.", kr: "행사가 이달 말로 연기되었어." }
        ]
      },
      {
        id: "d91_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "초밥 먹으러 갈래? 새로 생긴 곳을 아는데 가성비가 좋아.",
        en: "How about having some sushi? I know a new place. You get a lot for your money.",
        time: "02:34",
        seconds: 154,
        note: "get a lot for one's money : 지불한 돈에 비해 많이 얻다 (가성비가 좋다)",
        extras: []
      },
      {
        id: "d91_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "좋지. 초밥은 아무리 먹어도 질리지 않아.",
        en: "Why not? I can't get enough of sushi.",
        time: "03:01",
        seconds: 181,
        note: "Why not? : 왜 안 되겠어? (당연히 좋지) / can't get enough of ~ : 아무리 ~해도 질리지 않다, 끝이 없다",
        extras: [
          { en: "I can't get enough of this song.", kr: "이 노래는 아무리 들어도 질리지 않아." }
        ]
      }
    ]
  },

  // --- DAY 092 ---
  {
    day: 92,
    dayFormatted: "DAY 092",
    title: "휴대폰 없는 날",
    videoId: "7CaSQempQ14",
    dialogues: [
      {
        id: "d92_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "휴대폰을 집에 두고 나와서 하루 종일 불안했어.",
        en: "I left my phone at home and felt anxious all day.",
        time: "00:44",
        seconds: 44,
        note: "leave ~ at home : ~을 집에 두고 오다 / anxious : 불안한",
        extras: []
      },
      {
        id: "d92_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "우리가 스마트폰에 얼마나 중독되어 있는지 실감 나지?",
        en: "It makes you realize how addicted we are to smartphones, right?",
        time: "01:12",
        seconds: 72,
        note: "be addicted to ~ : ~에 중독되다",
        extras: []
      },
      {
        id: "d92_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "연락도 못 받고 시계도 못 보니까 손발이 묶인 기분이었어.",
        en: "Without calls and the clock, I felt completely helpless.",
        time: "01:46",
        seconds: 106,
        note: "helpless : 무기력한, 손발이 묶인 듯한",
        extras: []
      },
      {
        id: "d92_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "하지만 화면을 덜 보니까 눈과 마음은 편안했을 텐데.",
        en: "On the bright side, your eyes and mind must have had a break.",
        time: "02:20",
        seconds: 140,
        note: "on the bright side : 긍정적인 면을 보면 / have a break : 휴식을 취하다",
        extras: []
      },
      {
        id: "d92_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "맞아. 주변 사람들과 대화에 더 집중할 수 있었어.",
        en: "True. I could focus much more on conversations with people around me.",
        time: "02:52",
        seconds: 172,
        note: "focus on ~ : ~에 집중하다",
        extras: []
      },
      {
        id: "d92_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가끔은 일부러라도 휴대폰과 거리 두기를 해봐.",
        en: "Try unplugging from your phone intentionally once in a while.",
        time: "03:17",
        seconds: 197,
        note: "unplug from ~ : ~에서 접속을 끊다(거리를 두다) / once in a while : 가끔",
        extras: []
      }
    ]
  },

  // --- DAY 093 ---
  {
    day: 93,
    dayFormatted: "DAY 093",
    title: "감기 몸살",
    videoId: "63Sv2laMfo8",
    dialogues: [
      {
        id: "d93_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "온몸이 으슬으슬하고 열이 나는 것 같아.",
        en: "I feel chilly all over and think I'm running a fever.",
        time: "00:43",
        seconds: 43,
        note: "feel chilly : 으슬으슬 춥다 / run a fever : 열이 나다",
        extras: []
      },
      {
        id: "d93_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "목도 쉬고 목소리가 완전히 잠겼네.",
        en: "Your voice is totally hoarse and raspy.",
        time: "01:10",
        seconds: 70,
        note: "hoarse / raspy : 목이 쉰, 거친",
        extras: []
      },
      {
        id: "d93_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "침 삼킬 때마다 목구멍이 찢어질 듯 아파.",
        en: "My throat hurts terribly whenever I swallow.",
        time: "01:45",
        seconds: 105,
        note: "swallow : 삼키다 / sore throat : 인후통",
        extras: []
      },
      {
        id: "d93_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "무리하지 말고 오후에 조퇴해서 이비인후과 가봐.",
        en: "Don't push yourself. Take off early and see an ENT specialist.",
        time: "02:18",
        seconds: 138,
        note: "take off early : 조퇴하다 / ENT (ear, nose, and throat) : 이비인후과",
        extras: []
      },
      {
        id: "d93_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "종합 감기약 먹고 한숨 푹 자야겠어.",
        en: "I should take cold medicine and sleep it off.",
        time: "02:50",
        seconds: 170,
        note: "sleep it off : 자고 일어나서 (피로/감기 등을) 털어내다",
        extras: []
      },
      {
        id: "d93_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "따뜻한 꿀물 끓여 마시고 푹 쉬어.",
        en: "Drink some warm honey water and get plenty of rest.",
        time: "03:15",
        seconds: 195,
        note: "plenty of rest : 충분한 휴식",
        extras: []
      }
    ]
  },

  // --- DAY 094 ---
  {
    day: 94,
    dayFormatted: "DAY 094",
    title: "술자리 마무리",
    videoId: "syBBQvaiL-Q",
    dialogues: [
      {
        id: "d94_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "벌써 자정이 다 되어가네. 슬슬 일어날까?",
        en: "It's almost midnight. Shall we call it a night?",
        time: "00:44",
        seconds: 44,
        note: "call it a night : 오늘 밤을 마무리하다, 술자리를 파하다",
        extras: []
      },
      {
        id: "d94_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "마지막으로 생맥주 한 잔만 딱 더 하고 가자.",
        en: "Let's just have one for the road before we go.",
        time: "01:12",
        seconds: 72,
        note: "one for the road : 떠나기 전 막잔",
        extras: []
      },
      {
        id: "d94_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "막차 끊기기 전에 얼른 지하철 타러 가야 해.",
        en: "I need to catch the subway before the last train leaves.",
        time: "01:46",
        seconds: 106,
        note: "last train : 막차",
        extras: []
      },
      {
        id: "d94_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "차 끊기면 택시 같이 타고 귀가하자.",
        en: "If you miss it, we can share a cab home.",
        time: "02:20",
        seconds: 140,
        note: "share a cab : 택시를 합승하다",
        extras: []
      },
      {
        id: "d94_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "내일 출근해야 하니까 아쉬워도 여기서 끝내자.",
        en: "I have to work tomorrow, so let's wrap it up here.",
        time: "02:52",
        seconds: 172,
        note: "wrap it up : 마무리 짓다",
        extras: []
      },
      {
        id: "d94_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "알았어. 계산서 가져올게. n분의 1로 나누자.",
        en: "All right. I'll get the bill. Let's split it evenly.",
        time: "03:17",
        seconds: 197,
        note: "split evenly / go Dutch : 각자 내다(더치페이하다)",
        extras: []
      }
    ]
  },

  // --- DAY 095 ---
  {
    day: 95,
    dayFormatted: "DAY 095",
    title: "승진이 뭐길래",
    videoId: "Q_CShCIIqfM",
    dialogues: [
      {
        id: "d95_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "박 과장 이번 인사에서 차장으로 승진했대.",
        en: "Manager Park got promoted to senior manager in this review.",
        time: "00:43",
        seconds: 43,
        note: "get promoted : 승진하다",
        extras: []
      },
      {
        id: "d95_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "입사 동기들 중에서 승진이 가장 빠르네.",
        en: "He climbed the corporate ladder faster than anyone in our cohort.",
        time: "01:10",
        seconds: 70,
        note: "climb the corporate ladder : 출세 가도를 달리다, 승진하다",
        extras: []
      },
      {
        id: "d95_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "매일 밤샘 야근하면서 회사에 헌신했잖아.",
        en: "He dedicated his life to work, burning the midnight oil every day.",
        time: "01:45",
        seconds: 105,
        note: "burn the midnight oil : 밤늦게까지 야근하다",
        extras: []
      },
      {
        id: "d95_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "노력한 만큼 정당한 보상을 받아서 다행이야.",
        en: "I'm glad his hard work paid off with fair recognition.",
        time: "02:18",
        seconds: 138,
        note: "pay off : 결실을 맺다 / recognition : 인정, 보상",
        extras: []
      },
      {
        id: "d95_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "하지만 승진할수록 책임감과 스트레스도 커지겠지.",
        en: "Still, with a promotion comes greater pressure and responsibility.",
        time: "02:50",
        seconds: 170,
        note: "with ~ comes ... : ~와 함께 …이 따라오다",
        extras: []
      },
      {
        id: "d95_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "워라밸과 성공 사이에서 균형을 잘 잡아야 해.",
        en: "Balancing work-life balance and success is the real challenge.",
        time: "03:15",
        seconds: 195,
        note: "work-life balance : 워라밸",
        extras: []
      }
    ]
  },

  // --- DAY 096 ---
  {
    day: 96,
    dayFormatted: "DAY 096",
    title: "황당한 인사발령",
    videoId: "3PHwliguvxI",
    dialogues: [
      {
        id: "d96_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "김 대리가 지방 지사로 발령 났다는 소식 들었어?",
        en: "Did you hear that Assistant Manager Kim got transferred to a branch office?",
        time: "00:44",
        seconds: 44,
        note: "get transferred : 전근 가다, 인사발령 나다 / branch office : 지사",
        extras: []
      },
      {
        id: "d96_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "갑자기 뜬금없이? 완전히 마른하늘에 날벼락이네.",
        en: "Out of the blue? That must be a bolt from the blue for him.",
        time: "01:12",
        seconds: 72,
        note: "out of the blue : 뜬금없이 / a bolt from the blue : 마른하늘에 날벼락",
        extras: []
      },
      {
        id: "d96_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "사전에 아무런 귀띔도 없이 일방적으로 통보받았대.",
        en: "He was notified unilaterally without any prior heads-up.",
        time: "01:46",
        seconds: 106,
        note: "unilaterally : 일방적으로 / heads-up : 귀띔, 사전 경고",
        extras: []
      },
      {
        id: "d96_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가족들과 떨어져 지내야 하니 막막하겠어.",
        en: "He must feel devastated having to live away from his family.",
        time: "02:20",
        seconds: 140,
        note: "devastated : 참담한, 망연자실한",
        extras: []
      },
      {
        id: "d96_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "회사 생활이란 게 참 비정하고 냉정해.",
        en: "Corporate life can be so ruthless and cold-hearted.",
        time: "02:52",
        seconds: 172,
        note: "ruthless : 무자비한, 비정한",
        extras: []
      },
      {
        id: "d96_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "위로의 송별회 자리라도 마련해 주자.",
        en: "Let's organize a farewell dinner to comfort him.",
        time: "03:17",
        seconds: 197,
        note: "farewell dinner : 송별회",
        extras: []
      }
    ]
  },

  // --- DAY 097 ---
  {
    day: 97,
    dayFormatted: "DAY 097",
    title: "밤샘 파티",
    videoId: "LArrV6IAan8",
    dialogues: [
      {
        id: "d97_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "어제 친구 집들이 파티에서 밤새 놀았어.",
        en: "I stayed up all night at my friend's housewarming party yesterday.",
        time: "00:43",
        seconds: 43,
        note: "housewarming party : 집들이 파티",
        extras: []
      },
      {
        id: "d97_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "어쩐지 오늘 얼굴에 피곤함이 가득해 보여.",
        en: "No wonder fatigue is written all over your face today.",
        time: "01:10",
        seconds: 70,
        note: "written all over one's face : 얼굴에 티가 다 나는",
        extras: []
      },
      {
        id: "d97_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "보드게임하고 노래방 기계로 노래 부르느라 시간 가는 줄 몰랐어.",
        en: "Playing board games and karaoke made us lose track of time.",
        time: "01:45",
        seconds: 105,
        note: "lose track of time : 시간 가는 줄 모르다",
        extras: []
      },
      {
        id: "d97_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "이웃들한테 층간소음 항의는 안 들어왔어?",
        en: "Didn't neighbors file noise complaints against you?",
        time: "02:18",
        seconds: 138,
        note: "file a complaint : 항의하다, 민원을 넣다",
        extras: []
      },
      {
        id: "d97_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "방음이 잘되는 단독주택이라 마음껏 떠들었지.",
        en: "It was a soundproof detached house, so we could party freely.",
        time: "02:50",
        seconds: 170,
        note: "soundproof : 방음이 되는 / detached house : 단독주택",
        extras: []
      },
      {
        id: "d97_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "부럽다! 오늘은 일찍 들어가서 기절하듯 자.",
        en: "I'm jealous! Go home early and crash today.",
        time: "03:15",
        seconds: 195,
        note: "crash : 곯아떨어지다, 기절하듯 잠들다",
        extras: []
      }
    ]
  },

  // --- DAY 098 ---
  {
    day: 98,
    dayFormatted: "DAY 098",
    title: "성탄절 계획",
    videoId: "eQO30r5_VPQ",
    dialogues: [
      {
        id: "d98_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "이번 크리스마스이브에 특별한 계획 있어?",
        en: "Do you have any special plans for this Christmas Eve?",
        time: "00:44",
        seconds: 44,
        note: "Christmas Eve : 크리스마스이브",
        extras: []
      },
      {
        id: "d98_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "가족들과 홈파티 하면서 크리스마스 특선 영화 볼 거야.",
        en: "I'll have a home party with family and watch holiday movies.",
        time: "01:12",
        seconds: 72,
        note: "holiday movie : 명절/연말 특선 영화",
        extras: []
      },
      {
        id: "d98_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "거리마다 캐럴이 울려 퍼지니 연말 분위기가 물씬 나네.",
        en: "Carols echoing in the streets bring out the holiday spirit.",
        time: "01:46",
        seconds: 106,
        note: "carol : 캐럴 / holiday spirit : 연말연시 분위기",
        extras: []
      },
      {
        id: "d98_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "트리 장식도 해놓고 케이크도 예약해 뒀어.",
        en: "We decorated the Christmas tree and booked a cake.",
        time: "02:20",
        seconds: 140,
        note: "decorate : 장식하다",
        extras: []
      },
      {
        id: "d98_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "화이트 크리스마스가 되면 더 낭만적일 텐데.",
        en: "It would be even more romantic if we had a white Christmas.",
        time: "02:52",
        seconds: 172,
        note: "romantic : 낭만적인",
        extras: []
      },
      {
        id: "d98_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "따뜻하고 행복한 성탄절 보내길 바라!",
        en: "Wishing you a warm and Merry Christmas!",
        time: "03:17",
        seconds: 197,
        note: "Merry Christmas : 즐거운 성탄절 되세요",
        extras: []
      }
    ]
  },

  // --- DAY 099 ---
  {
    day: 99,
    dayFormatted: "DAY 099",
    title: "송년회 모임",
    videoId: "_7k_VyG8GL4",
    dialogues: [
      {
        id: "d99_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "올해도 눈 깜짝할 사이에 며칠 안 남았네.",
        en: "This year has just flown by in the blink of an eye.",
        time: "00:43",
        seconds: 43,
        note: "fly by : 순식간에 지나가다 / in the blink of an eye : 눈 깜짝할 사이에",
        extras: []
      },
      {
        id: "d99_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "연말이라 송년회 약속이 줄줄이 잡혀 있어.",
        en: "With year-end approaching, year-end parties are booked back-to-back.",
        time: "01:10",
        seconds: 70,
        note: "year-end party : 송년회, 망년회 / back-to-back : 연속해서 줄줄이",
        extras: []
      },
      {
        id: "d99_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "연이은 술자리 때문에 간이 쉴 틈이 없겠어.",
        en: "Consecutive drinking sessions give your liver no time to rest.",
        time: "01:45",
        seconds: 105,
        note: "consecutive : 연이은 / liver : 간",
        extras: []
      },
      {
        id: "d99_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "과음하지 않도록 술 조절을 잘해야겠어.",
        en: "I should pace myself so I don't binge drink.",
        time: "02:18",
        seconds: 138,
        note: "binge drink : 폭음하다 / pace oneself : 속도를 조절하다",
        extras: []
      },
      {
        id: "d99_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "소중한 사람들과 한 해를 뜻깊게 마무리하자.",
        en: "Let's wrap up the year meaningfully with our loved ones.",
        time: "02:50",
        seconds: 170,
        note: "meaningfully : 뜻깊게, 의미 있게",
        extras: []
      },
      {
        id: "d99_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "다사다난했던 올 한 해도 정말 수고 많았어.",
        en: "You did great enduring this eventful year.",
        time: "03:15",
        seconds: 195,
        note: "eventful : 다사다난한, 파란만장한",
        extras: []
      }
    ]
  },

  // --- DAY 100 ---
  {
    day: 100,
    dayFormatted: "DAY 100",
    title: "새해맞이",
    videoId: "ZWejNSxjOEg",
    dialogues: [
      {
        id: "d100_1",
        role: "A",
        roleLabel: "A (여성)",
        kr: "100일 동안 매일 빠짐없이 영어 공부를 끝냈어!",
        en: "I finished studying English for 100 days straight without missing a day!",
        time: "00:44",
        seconds: 44,
        note: "straight : 연속으로 / without missing a day : 하루도 빠짐없이",
        extras: []
      },
      {
        id: "d100_2",
        role: "B",
        roleLabel: "B (남성)",
        kr: "진짜 대단하다! 네 끈기와 뚝심에 박수를 보낸다.",
        en: "That's incredible! Kudos to your persistence and grit.",
        time: "01:12",
        seconds: 72,
        note: "Kudos to ~ : ~에게 찬사/박수를 보내다 / persistence : 끈기 / grit : 투지",
        extras: []
      },
      {
        id: "d100_3",
        role: "A",
        roleLabel: "A (여성)",
        kr: "새해에는 영어로 자연스럽게 프리토킹하는 게 목표야.",
        en: "My goal for the new year is to free-talk fluently in English.",
        time: "01:46",
        seconds: 106,
        note: "fluently : 유창하게 / New Year's resolution : 새해 결심",
        extras: []
      },
      {
        id: "d100_4",
        role: "B",
        roleLabel: "B (남성)",
        kr: "시작이 반이고 꾸준함이 기적을 만든다는 걸 증명했잖아.",
        en: "You proved that well begun is half done and consistency makes miracles.",
        time: "02:20",
        seconds: 140,
        note: "Well begun is half done : 시작이 반이다 / consistency : 일관성, 꾸준함",
        extras: []
      },
      {
        id: "d100_5",
        role: "A",
        roleLabel: "A (여성)",
        kr: "새해에도 건강하고 소망하는 일 모두 이루길 바라.",
        en: "May the new year bring you good health and all your wishes come true.",
        time: "02:52",
        seconds: 172,
        note: "May ~ : ~하기를 기원합니다",
        extras: []
      },
      {
        id: "d100_6",
        role: "B",
        roleLabel: "B (남성)",
        kr: "새해 복 많이 받아! 100일의 기적 완주를 진심으로 축하해!",
        en: "Happy New Year! Huge congratulations on finishing the 100-Day Miracle!",
        time: "03:17",
        seconds: 197,
        note: "congratulations on ~ : ~을 축하합니다",
        extras: []
      }
    ]
  }
];
