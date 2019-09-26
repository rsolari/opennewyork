Website for opennewyork.city, a pro-housing nonprofit focused on land-use and zoning reform.

https://stormpath.com/blog/ultimate-guide-deploying-static-site-aws
<pre><code>
aws s3 sync --acl public-read --sse --delete ./source s3://aws-website-opennewyork-7fok8
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E2YIU5RYORBLCO --paths '/*'
aws cloudfront create-invalidation --distribution-id E2YIU5RYORBLCO --paths '/images/*'
</code></pre>
