import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    author: "E.O.C",
    content:
      "I am a member of the inner circle of impact. I thank God for the successful journey so far. For the growth and impact.\n\nI joined the IC impact community for personal development, to build a relationship with God, acquire digital skill and build my life. At a time my life wasn't going the way I planned it. I always wanted to build a strong relationship with God and have the courage to speak to the world. Though I am a Christian but I don't pray all the time, I fast when it is necessary, and I don't even study the scriptures. I was just living a life that wasn't mine though I know I am in the world for a reason but I put all my focus on my future not minding my present.\n\nMy encounter with the IC impact community helped me to build a consistent fellowship with God in terms of prayer, fasting and studying the scriptures. I am now fully aware that I am not too young to make wealth, build and fulfill my purpose. I have to start building a better future now that I am young. All these changes come through the live session and meeting held in the community in which I was taught how to build a relationship with God, importance of purpose and personal development.\n\nAs I make bold steps into my future. I chose to positively impact my world. I will teach the world the importance of purpose, intimacy with God and personal development.\n\nI'm grateful for the growth and impact; though I still want more, I desire more.\n\nThanks to my wonderful community Shepherd; my good shepherd for the changes he has made in my life, for challenging me to become who I always want to be. His love, commitment and concern make it a success. And to my dear trainers, thanks for letting me gain from your wisdom. Thank you all for lending me your shoulder to stand on. God bless 🙏🙏.\n\nSo I recommend anyone out there, seeking for growth in the aspect of intimacy with God, purpose, personal development and success. Join the IC impact community and there will be a great transformation in your life, your life won't remain the same because you will become who God made you to be. Every hidden treasure in you will be uncovered.",
    videoUrl: "https://vimeo.com/1142055439",
    highlights: [
      "Built consistent fellowship with God through prayer, fasting and scripture study",
      "Gained awareness about fulfilling purpose at a young age",
      "Learned importance of personal development and intimacy with God",
    ],
  },
  {
    id: 2,
    author: "E.B",
    content:
      "And then you so much for IC-IMPACT, thank you for the teachings, prayers and most importantly thank you for drawing me to God. 🥹\n\nThank you for making me know that in as much as God says Good things about me I still need to portray myself in a way that would show God glory because if God considers me to his delight and people don't see me as a fool or a jock it's just the way I presented myself.\n\nThank you for clarity, thank you for the confidence you install in me reading my Bible makes me so confident because I know who I am, thank you so much Daddy. 🥹",
    videoUrl: "https://vimeo.com/1142395540",
    highlights: [
      "Drawn closer to God",
      "Gained clarity and confidence",
      "Learned to portray oneself in a way that shows God's glory",
    ],
  },
  {
    id: 3,
    author: "E.O",
    content:
      "Please sir, this will be long. I feel like the nine lepers that did not return to thank Jesus.\n\nFirstly, It is safe to say that Ic impact gave me a new phone. My phone has been giving me serious issues since last year and I have been hoping for a new phone. So when I joined IC impact community 18th December and attended the sessions my prayer life got resurrected along the line and I started praying more so I would normally present my phone issue to God I even was forced to tell my brother even an uncle but nothing was done. so it contined like that till this year when by the grace of God I got selected to join inner circle. during our meetings my network will be disturbing, it will be hanging and alot of other problems. The one that got me crying, is that it takes time for my Mike to off, so all those while they will be telling me off your Mike and I will be tapping and taping nothing will happen. So one night after a session I started crying asking God why he will bring me in the middle of the bush and leave me. I prayed in tears so I don't know if it's up to a week after that day before my aunties husband gave me a phone. My happiness is not just the phone but it is a prove to me that God is still very much Interested in my case. I can't wait to see the next big miracle that I believe he will work out.\n\nThen the second testimony is patainig to the accountability partner, when You told us to tag who we want to be our patner. I felt out of place, people were tagging and no one tagged me this voice inside me was telling me that they're tagging who can offer them, that what can I even offer someone, that I cant even account for myself. I honestly believed the voice,I felt small. to avoid many talks I got a partner and the first week I knew that God already planned it out. We have our Bible study session,prayer vigils and even a book to read for the month that we ll review although the book aspect haven't been so successful but I feel that God is really working in my life through IC impact community and I have this feeling that this is just the beginning.\n\nEven my aunty was saying the other day that this group that I will be attending meetings every now and then that what have I benefited, I laughed and told her is alot but one thing that I can tell her is that my prayer life got better I was expecting a negative comment which is her normal way but she said that's good In my mind I was like wow!\n\nThe call session I had with you was something else sir. it made me saw possibilities and light\n\nI'm grateful to God who brought this vision and made me a partaker of it to him be all the glory🙌.",
    videoUrl: "",
    highlights: [
      "Prayer life resurrected and strengthened",
      "Received answered prayer (new phone)",
      "Found meaningful accountability partnership",
      "Gained new perspective on possibilities through mentorship",
    ],
  },
  {
    id: 4,
    author: "F.A",
    content:
      "My words can't fully express how grateful I am. Looking back, I now see even more clearly the sacrifices, love, and consistent support you've poured into my growth. You believed in me when I didn't believe in myself, stood by me through difficult moments, and gave encouragement just when I needed it most.\n\nYour presence, your guidance, and your unwavering commitment have left a lasting impact on my life. Your wisdom and constant push for excellence have shaped me in ways I'll never forget.\n\nThank you, truly, for everything.\nYou are an incredible mentor, and we are all deeply blessed to have walked this journey with you.\n\nMay God bless you richly, reward your labour of love, and continue to lift you beyond measure. Amen.",
    videoUrl: "",
    highlights: [
      "Received unwavering support and mentorship",
      "Gained belief in self through mentor's belief",
      "Shaped by wisdom and push for excellence",
    ],
  },
  {
    id: 5,
    author: "C.O",
    content:
      "I just want to take a moment to say a heartfelt thank you to the entire IC Impact team.\nThese past four months have been deeply impactful from the lessons to the workshops, sessions, and the amazing sense of community.\nI've learned, grown, and been stretched in ways I didn't expect.\nI also received my package a special thank you to the coordinators.\n\nThank you to all the trainers and coordinators for the time, patience, and effort you've invested in us.\nIt's truly been worth it.\n\nGod will reward us all.\nAmen 🙏",
    videoUrl: "",
    highlights: [
      "Four months of impactful lessons and workshops",
      "Experienced unexpected growth and stretching",
      "Grateful for community support and coordination",
    ],
  },
];

const TestimonialContainer = () => {
  return (
    <div className="space-y-1 py-[4em] px-[8em] max-[900px]:px-[2em] max-[1200px]:px-[4em]">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          author={testimonial.author}
          content={testimonial.content}
          videoUrl={testimonial.videoUrl}
          highlights={testimonial.highlights}
          videoPosition={index % 2 === 0 ? "left" : "right"}
          autoplay={false}
        />
      ))}
    </div>
  );
};

export default TestimonialContainer;
