F=require('fs')
for(n of F.readdirSync(I='/input/')){t=F.readFileSync(I+n+'/level.txt')+'';w=t.search`
`+1;D=[-w,w,-1,1];A=[];B=[];G=[];M=[];o=''
for(i in t)c=t[i],A[i]=c==' '|c>'#',B[i]=c=='$'|c=='*',G[i]=c=='.'|c=='*'|c=='+',c=='@'|c=='+'&&(P=+i)
y=P/w|0
for(r in t)if(B[r]&&!M[r]){K=[+r];M[r]=r;b=[];S={}
for(u of K)B[u]&&(b.push(u),B[u]=0),D.map(d=>A[v=u+d]&&(v/w|0)-y&&!M[v]&&K.push(v,M[v]=r)&&K.pop())
for([b,p,s]of Q=[[b,P,'']]){b.map(x=>B[x]=1);R={[p]:s};K=[m=p]
for(u of K)D.map((d,j)=>A[v=u+d]&&!B[v]&&!(v in R)&&(R[v]=R[u]+'udlr'[j],K.push(v),v<m&&(m=v)))
if(!S[k=b.sort()+'_'+m]){S[k]=1
if(b.every(x=>G[x])){o+=s;P=p;break}
b.map((x,i)=>D.map((d,j)=>x-d in R&&M[v=x+d]==r&&!B[v]&&Q.push([b.map((z,l)=>l-i?z:v),x,R[x-d]+'udlr'[j]])))}
b.map(x=>B[x]=0)}}
F.mkdirSync(O='/output/'+n);F.writeFileSync(O+'/solution.txt',o)}