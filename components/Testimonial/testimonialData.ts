import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    designation: "Software Engineer",
    image: image1,
    content:
      "Since subscribing to WealthPilot, I've successfully rebalanced my entire 401(k) and finally started investing in index funds. The advice is always straightforward and practical.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    designation: "Small Business Owner",
    image: image2,
    content:
      "This blog completely changed how I think about debt management and budgeting. The 50/30/20 rule guide was the catalyst I needed to get my finances in order.",
  },
  {
    id: 3,
    name: "David Smith",
    designation: "Retail Investor",
    image: image1,
    content:
      "The crypto market analysis is unlike anything else out there. Instead of hyping up coins, WealthPilot breaks down the actual underlying utility and economics. Highly recommended.",
  },
  {
    id: 4,
    name: "Jessica Alvarez",
    designation: "Marketing Director",
    image: image2,
    content:
      "I used to find the stock market incredibly intimidating. The beginner-friendly guides here broke down everything from ETFs to dividends perfectly. I feel completely confident now.",
  },
];
