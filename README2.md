1/ What is JSX, and why is it used?

Ans : Jsx হলো জাভা স্ক্রিপ্টে html কোড লেখার বিশেষণের মাধ্যম |  অর্থাৎ জাভা স্ক্রিপ্টে HTML,CSS কোড লেখার বিশেষ এক ফরমেট হ্যালো Jsx . এবং এটি ব্যবহার করার কারণ হলো এতে কোড লিখতে ও পড়তে সহজ হয় এবং এই React এ কোড লেখার জন্য এ ফরমেটটি প্রয়োজন এজন্য jsx Use করা হয় |  



2/ What is the difference between State and Props?

ans : React এর মধ্যে props হলো parent components থেকে child components এ ডাটা পাঠানোর একটা মাধ্যম।  যেগুলো শুধুমাত্র read only অর্থাৎ চেঞ্জ করা যাবে না। আর state হল components এর ভিতরের ডাটা , যেগুলো সময়ের সাথে সাথে পরিবর্তন হতে পারে । যখন state পরিবর্তন হয় তখন UI  এ ডাটা Update হয়।
Different Props and components.
State ডাটা চেঞ্জ বা আপডেট করার জন্য ব্যবহৃত হয় |  
Props ডাটা parents components থেকে চাইলে component এ দেখানোর জন্য ব্যবহৃত হয় এর দ্বারা ডাটা আপডেট করা যায় না শুধু Read only অর্থাৎ শুধু দেখানো যায় আর state এর ডাটা update & UI এ change হয় । এবং Re-render হয় ।



3/ What is the useState hook, and how does it work?

useState এটি হলো React এর একটি Hook এবং এটা ব্যবহার হয়। component এর ভেতরে state তৈরি করার জন্য । useState এ দুইটা  জিনিস পাওয়া যায় ১/ state variable ২/ set function . আর এই set function দিয়ে state update করা হয়। এবং যখন state পরিবর্তন হয়, React আবার তা UI এ re-render করে।


4/ How can you share state between components in React?

 ans : state শেয়ার করার জন্য state টা parent component এ রাখা হয়  তারপর সেই state  props এর মাধ্যমে child components এ পাঠানো হয় এভাবে state এক জায়গা থেকে অন্য জায়গায় শেয়ার করা যায় | 





5/ How is event handling done in React?

 ans : React এর মাঝে event handling হলো user এর action ধরার একটি মাধ্যম । এবং Event গুলো camelCase এ লেখা হয়। এবং Event এর সাথে function attach করা হয়, {} এর মাধ্যমে । এবং User action হলে React সেই function চালায় এবং UI এ তা  update করে।