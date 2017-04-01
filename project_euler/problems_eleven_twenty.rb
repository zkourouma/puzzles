#problem eleven
def problem_eleven
end


#problem twelve
def problem_twelve(fact_length=500)
  require 'prime'
  #triangle number generator
  sums=1
  last=2
  check = false
  until check == true
    sums+=last
    if Prime.prime?(sums)
      last+=1
      next 
    elsif Math.sqrt(sums) < fact_length
      last+=1 
      next
    end
    facts=[]
    for i in 1..Math.sqrt(sums)
      sums%i==0 ? facts<<i : nil
    end
    print "(#{sums}: #{facts.length*2}), "
    if (facts.length)*2 > fact_length
      return sums
    else
      last+=1
    end
  end
end


#problem thirteen
def problem_thirteen(num_nums=100,digis=10)
  tot=0
  File.open("prob_thirteen_nums.txt").each{|line| tot+= (line.to_i)}
  tot.to_s[0,digis]
end


#problem fourteen
def problem_fourteen(n=999999)
  tops = 0
  best=0
  while n > 1
    counts=0
    m=n
    until m == 1
      if m.odd?
        m=(3*m+1)
      else
        m=(m/2)
      end
      counts+=1
    end
    if counts > tops
      best=n
      puts best
      tops=counts
    end
    n-=1
  end
  best
end

#problem fifteen
def problem_fifteen
end

#problem sixteen
def problem_sixteen(pow=1000)
  tot=0
  sting = (2**pow).to_s
  for c in 0...sting.length
    tot+= sting[c].to_i
  end
  tot
end

#problem seventeen
def problem_seventeen(cap=1000)
  thru_teen = {0=>"zero",1=>"one",2=>"two",3=>"three",4=>"four",5=>"five",6=>"six",7=>"seven",\
    8=>"eight",9=>"nine",11=>"eleven",12=>"twelve",13=>"thirteen",14=>"fourteen",15=>"fifteen",\
    16=>"sixteen",17=>"seventeen",18=>"eighteen",19=>"nineteen"}
  tens={10=>"ten",20=>"twenty",30=>"thirty",40=>"forty",50=>"fifty",60=>"sixty",70=>"seventy",\
    80=>"eighty",90=>"ninety"}
  thou=''
  hun=''
  dou=''
  sing=''
  tot=''
  len=0
  for i in 0..cap
    t=i.to_s
    if t.length == 4
      thou = thru_teen[t[0].to_i] + "thousand"
      t=t[1,3]
    end
    if t.length == 3 and t[0]!=0
      hun=thru_teen[t[0].to_i] + "hundredand"
      t=t[1,2]
    elsif t.length == 3 and t[0]==0
      t=t[1,2]
    end
    if t.length == 2
      if t[0]==1
        dou=thru_teen[t.to_i]
        t=''
      else
        dou=tens[t[0].to_i]
        t=t[0]
      end
    end
    if t.length==1
      sing=thru_teen[t[0].to_i]
    end
    tot = thou.to_s+hun.to_s+dou.to_s+sing.to_s
    puts tot
    len+=tot.length
  end
  len
  
end

#problem eighteen
def problem_eighteen
end


#problem nineteen
def problem_nineteen
  months = {jan : 31, feb : 28, mar : 31, apr : 30, may : 31, jun : 30, jul : 31, aug : 31, sep : 30 \
    oct : 31, nov : 30, dec : 31}
end

#problem twenty
def problem_twenty(f=100)
  factrial = f.downto(1).inject(:*)
  fArr = factrial.scan(/./)
end


puts problem_twenty