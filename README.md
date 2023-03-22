# Bonsai's Pricing Page
An unofficial version of [Bonsai Co.'s pricing page](https://www.hellobonsai.com/pricing)

Built using Vite, Typescript and Styled Component.

It's responsive and feature hover and clickable drop down menu and a custom switch to toggle between showing monthly and yearly payment.

Preview: [Hosted on GitHub](https://winghaa.github.io/bonsai-pricing-page/)

After doing a little bit of reflection on it, I should have used global variable with theme provider for fonts, sizing and colors value. Should also switch to using em and rem instead of pixel.

I also forgot to set box-sizing: border-box on all elements making sizing awkward (Opps).

There were too much CSS nesting in some files and not having a good planning ahead containing boxes for layouts really hurt. 

It's better to draw boxes around elements and think how you will implement it. I think I did this quite well with the footer.
