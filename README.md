https://stormpath.com/blog/ultimate-guide-deploying-static-site-aws
<pre><code>
aws s3 sync --acl public-read --sse --delete ./source s3://aws-website-opennewyork-7fok8
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $DISTRIBUTIONID --paths '/*'
</code></pre>
