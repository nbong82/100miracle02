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
  }
];
