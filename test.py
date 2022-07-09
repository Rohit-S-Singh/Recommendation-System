import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

ratings={
    'Payal':{
        'a' : 1,
        'b' : 2,
        'c' : 3,
    },
    'Rohit':{
        'z' : 1,
        'y' : 4,
        'x' : 6,
    },
}

ratings_df=pd.DataFrame(ratings)
ratings_df.fillna("Not Seen Yet" , inplace=True)
ratings_df

def unique_items():
    l = []
    for people in ratings.keys():
        for movie in ratings[people]:
            l.append(movie)
    s = set(l)
    l = list(s)
    return l

unique_items()

def item_sim(i1,i2):
    both_rated = {}
    for people in ratings.keys():
        if i1 in ratings[people] and i2 in ratings[people]:
            both_rated[people] = [ratings[people][i1],ratings[people][i2]]
            
    number_of_ratings = len(both_rated)
    if number_of_ratings == 0:
          return 0
#     print(both_rated) 
    
    
    item1_ratings = [[ratings[k][i1] for k,v in both_rated.items() if i1 in ratings[k] and i2 in ratings[k]]]
    item2_ratings = [[ratings[k][i2] for k, v in both_rated.items() if i1 in ratings[k] and i2 in ratings[k]]]
    #print("{} ratings :: {}".format(item1,item1_ratings))
    #print("{} ratings :: {}".format(item2,item2_ratings))
    cs = cosine_similarity(item1_ratings,item2_ratings)
    return cs[0][0]
    
    
item_sim("a","d")

def most_sim_item(target_item):
    un=unique_items()
    scores = [(item_sim(target_item,other_item),target_item+" --> "+other_item) for other_item in un if other_item!=target_item]
    scores.sort(reverse=True)
    return scores

most_sim_item("a")

def target_movies_to_users(target_person):
    target_person_movie_lst = []
    unique_list =unique_items()
    for movies in ratings[target_person]:
        target_person_movie_lst.append(movies)

    s=set(unique_list)
    recommended_movies=list(s.difference(target_person_movie_lst))
    a = len(recommended_movies)
    if a == 0:
        return 0
    return recommended_movies,target_person_movie_lst

    unseen_movies,seen_movies=target_movies_to_users('Payal')
dct = {"Unseen Movies":unseen_movies,"Seen Movies":seen_movies}
pd.DataFrame(dct)



def recommendation_phase(target_person):
    if target_movies_to_users(target_person=target_person) == 0:
        print(target_person, "has seen all the movies")
        return -1
    not_seen_movies,seen_movies=target_movies_to_users(target_person=target_person)
    seen_ratings = [[ratings[target_person][movies],movies] for movies in ratings[target_person]]
    weighted_avg,weighted_sim = 1,1
    rankings =[]
    for i in not_seen_movies:
        for rate,movie in seen_ratings:
            item_simm=item_sim(i,movie)
            weighted_avg +=(item_simm*rate)
            weighted_sim +=item_simm
        weighted_rank=weighted_avg/weighted_sim
        rankings.append([weighted_rank,i])

    rankings.sort(reverse=True)
    return rankings
recommendation_phase("Rohit")


print("Enter the target person")
tp = input().title()
if tp in ratings.keys():
    a=recommendation_phase(tp)
    if a != -1:
        print("Recommendation Using Item based Collaborative Filtering:  ")
        for w,m in a:
            print(m," ---> ",w)
else:
    print("Person not found in the dataset..please try again")