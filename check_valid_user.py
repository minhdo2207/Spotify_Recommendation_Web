import pandas as pd

def check_valid_user(user_id_number):
    df = pd.read_csv('./data/user_ratings.csv')
    return user_id_number in df.user_id.values

if __name__ == '__main__':
    print(check_valid_user('F6LSRT'))