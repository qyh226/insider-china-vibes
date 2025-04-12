
import React from "react";
import { Share } from "lucide-react";

const ArticleContent = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-xl font-medium mb-8">
        🔥 <strong>iShowSpeed's Wildest Moments in China</strong> – You Won't Believe #3!
        From backflips on skyscraper bridges to almost sinking in a tech-powered car, Speed's trip through China was pure chaos—in the best way possible. Here's a breakdown of the most viral, hilarious, and unexpected moments:
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">iShowSpeed's Most Viral China Moments</h2>
        <ol className="list-decimal pl-5 space-y-4">
          <li className="pl-2">
            <strong>Floating Car in Shenzhen</strong> – Speed Thought He Was Gonna Die!
          </li>
          <li className="pl-2">
            <strong>Cyberpunk Chaos in Chongqing</strong> – Speed Meets the 'Chinese Ronaldo'
          </li>
          <li className="pl-2">
            <strong>Subway Through a Skyscraper</strong> – The Moment That Left Speed Speechless
          </li>
          <li className="pl-2">
            <strong>Tech City Energy</strong> – Shenzhen Gives Speed a Digital Identity
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">🔥 What Do Chinese Netizens REALLY Think of iShowSpeed?</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2">✅</span>
            <span><strong>Why They Loved Him:</strong> Unfiltered, bold, engaged with culture.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">❌</span>
            <span><strong>Why Some Were Mixed:</strong> Loud, chaotic, misunderstood norms.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🌐</span>
            <span><strong>Bridging Cultures:</strong> IShowSpeed's Tour Becomes a Global Moment</span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-china-red pl-4 italic my-8">
        "The authenticity of his reactions - whether confused, amazed, or terrified - resonated with millions of viewers across cultural boundaries."
      </blockquote>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">📊 A Streamer Turned Soft Power Influencer</h2>
        <p>
          Quotes from scholars, state media, and real user reactions show Speed is reshaping international perceptions.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">🌍 Did iShowSpeed Just Bring $100M+ to China?</h2>
        <p>
          Inspired by a viral YouTube breakdown, the article explores the potential tourism and economic ripple effects of Speed's trip.
        </p>
      </div>

      <div className="mb-8 bg-gray-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">🔸 Final Verdict: A Meme, a Mirror, and a Movement</h2>
        <ul className="space-y-2">
          <li>A chaotic tourist, cultural ambassador, and global trendsetter.</li>
          <li>Whether serious or silly—he made China look fun.</li>
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">💬 What Do You Think?</h3>
        <p>
          Was Speed's visit a fluke or the start of something bigger? Drop your thoughts below ⬇️
        </p>
        
        <div className="mt-6">
          <textarea 
            className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-china-red"
            rows={4}
            placeholder="Share your thoughts..."
          ></textarea>
          <button className="mt-2 px-6 py-2 bg-china-red text-white rounded-md hover:bg-china-red/90 transition-colors">
            Comment
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 pt-6 mt-8">
        <div>
          <p className="text-sm text-muted-foreground">
            Tags: <a href="#" className="text-china-red hover:underline">iShowSpeed</a>, 
            <a href="#" className="text-china-red hover:underline"> China</a>, 
            <a href="#" className="text-china-red hover:underline"> Viral</a>, 
            <a href="#" className="text-china-red hover:underline"> Chongqing</a>, 
            <a href="#" className="text-china-red hover:underline"> Shenzhen</a>
          </p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Share size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
