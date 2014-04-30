xionghushan.com-2014
=============

熊虎山五金实业有限公司中文官网2014年版


域名绑定、301转向及nginx配置
-----

新建配置文件: ``sudo nano /etc/nginx/sites-available/xionghushan.com``

编辑配置文件及保存: 

    server {
        server_name xionghushan.com;
        return 301 http://www.xionghushan.com$request_uri;
    }
    server {
        server_name www.xionghushan.com;
        index index.html;
        root /srv/xionghushan.com-2014/_site;
    }

建立链接: ``sudo ln -s /etc/nginx/sites-available/xionghushan.com /etc/nginx/sites-enabled/``

重启nginx: ``sudo service nginx restart``


下载及生成网站
-----

1. 下载网站源码: ``git clone git://github.com/zackwong/xionghushan.com-2014.git``

2. 进入源码根目录: ``cd xionghushan.com-2014``

3. 生成网站: ``jekyll build``