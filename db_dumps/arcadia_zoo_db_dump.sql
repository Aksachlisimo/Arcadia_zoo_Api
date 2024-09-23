PGDMP  
                    |           arcadia_zoo_db    16.4    16.4 6    '           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            (           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            )           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            *           1262    16398    arcadia_zoo_db    DATABASE     �   CREATE DATABASE arcadia_zoo_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE arcadia_zoo_db;
                postgres    false            �            1259    16434    contact_forms    TABLE     �   CREATE TABLE public.contact_forms (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    email character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.contact_forms;
       public         heap    postgres    false            �            1259    16433    contact_forms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.contact_forms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.contact_forms_id_seq;
       public          postgres    false    218            +           0    0    contact_forms_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.contact_forms_id_seq OWNED BY public.contact_forms.id;
          public          postgres    false    217            �            1259    16522    feeding_records    TABLE       CREATE TABLE public.feeding_records (
    id integer NOT NULL,
    animal_id character varying(50) NOT NULL,
    feeding_date date NOT NULL,
    feeding_time time without time zone NOT NULL,
    food_type character varying(100) NOT NULL,
    food_quantity numeric(10,2) NOT NULL
);
 #   DROP TABLE public.feeding_records;
       public         heap    postgres    false            �            1259    16521    feeding_records_id_seq    SEQUENCE     �   CREATE SEQUENCE public.feeding_records_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.feeding_records_id_seq;
       public          postgres    false    226            ,           0    0    feeding_records_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.feeding_records_id_seq OWNED BY public.feeding_records.id;
          public          postgres    false    225            �            1259    16513    habitat_comments    TABLE     �   CREATE TABLE public.habitat_comments (
    id integer NOT NULL,
    habitat_id character varying(50) NOT NULL,
    comment text NOT NULL
);
 $   DROP TABLE public.habitat_comments;
       public         heap    postgres    false            �            1259    16512    habitat_comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.habitat_comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.habitat_comments_id_seq;
       public          postgres    false    224            -           0    0    habitat_comments_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.habitat_comments_id_seq OWNED BY public.habitat_comments.id;
          public          postgres    false    223            �            1259    16532    reviews    TABLE     �   CREATE TABLE public.reviews (
    id integer NOT NULL,
    pseudo character varying(255),
    review text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.reviews;
       public         heap    postgres    false            �            1259    16531    reviews_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.reviews_id_seq;
       public          postgres    false    228            .           0    0    reviews_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;
          public          postgres    false    227            �            1259    16414    services    TABLE     �   CREATE TABLE public.services (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.services;
       public         heap    postgres    false            �            1259    16413    services_id_seq    SEQUENCE     �   CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.services_id_seq;
       public          postgres    false    216            /           0    0    services_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;
          public          postgres    false    215            �            1259    16457    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16456    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    220            0           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    219            �            1259    16504    vet_reports    TABLE     �   CREATE TABLE public.vet_reports (
    id integer NOT NULL,
    animal_id character varying(50) NOT NULL,
    report_date date NOT NULL,
    report text NOT NULL
);
    DROP TABLE public.vet_reports;
       public         heap    postgres    false            �            1259    16503    vet_reports_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vet_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.vet_reports_id_seq;
       public          postgres    false    222            1           0    0    vet_reports_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.vet_reports_id_seq OWNED BY public.vet_reports.id;
          public          postgres    false    221            p           2604    16437    contact_forms id    DEFAULT     t   ALTER TABLE ONLY public.contact_forms ALTER COLUMN id SET DEFAULT nextval('public.contact_forms_id_seq'::regclass);
 ?   ALTER TABLE public.contact_forms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            u           2604    16525    feeding_records id    DEFAULT     x   ALTER TABLE ONLY public.feeding_records ALTER COLUMN id SET DEFAULT nextval('public.feeding_records_id_seq'::regclass);
 A   ALTER TABLE public.feeding_records ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            t           2604    16516    habitat_comments id    DEFAULT     z   ALTER TABLE ONLY public.habitat_comments ALTER COLUMN id SET DEFAULT nextval('public.habitat_comments_id_seq'::regclass);
 B   ALTER TABLE public.habitat_comments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            v           2604    16535 
   reviews id    DEFAULT     h   ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);
 9   ALTER TABLE public.reviews ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            n           2604    16417    services id    DEFAULT     j   ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);
 :   ALTER TABLE public.services ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            r           2604    16460    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            s           2604    16507    vet_reports id    DEFAULT     p   ALTER TABLE ONLY public.vet_reports ALTER COLUMN id SET DEFAULT nextval('public.vet_reports_id_seq'::regclass);
 =   ALTER TABLE public.vet_reports ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222                      0    16434    contact_forms 
   TABLE DATA           R   COPY public.contact_forms (id, title, description, email, created_at) FROM stdin;
    public          postgres    false    218   w;       "          0    16522    feeding_records 
   TABLE DATA           n   COPY public.feeding_records (id, animal_id, feeding_date, feeding_time, food_type, food_quantity) FROM stdin;
    public          postgres    false    226   �<                  0    16513    habitat_comments 
   TABLE DATA           C   COPY public.habitat_comments (id, habitat_id, comment) FROM stdin;
    public          postgres    false    224   8=       $          0    16532    reviews 
   TABLE DATA           A   COPY public.reviews (id, pseudo, review, created_at) FROM stdin;
    public          postgres    false    228   _=                 0    16414    services 
   TABLE DATA           E   COPY public.services (id, name, description, created_at) FROM stdin;
    public          postgres    false    216   |=                 0    16457    users 
   TABLE DATA           =   COPY public.users (id, username, password, role) FROM stdin;
    public          postgres    false    220   {>                 0    16504    vet_reports 
   TABLE DATA           I   COPY public.vet_reports (id, animal_id, report_date, report) FROM stdin;
    public          postgres    false    222   �B       2           0    0    contact_forms_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.contact_forms_id_seq', 16, true);
          public          postgres    false    217            3           0    0    feeding_records_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.feeding_records_id_seq', 1, true);
          public          postgres    false    225            4           0    0    habitat_comments_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.habitat_comments_id_seq', 1, true);
          public          postgres    false    223            5           0    0    reviews_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.reviews_id_seq', 1, false);
          public          postgres    false    227            6           0    0    services_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.services_id_seq', 10, true);
          public          postgres    false    215            7           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 24, true);
          public          postgres    false    219            8           0    0    vet_reports_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.vet_reports_id_seq', 1, true);
          public          postgres    false    221            {           2606    16442     contact_forms contact_forms_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.contact_forms
    ADD CONSTRAINT contact_forms_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.contact_forms DROP CONSTRAINT contact_forms_pkey;
       public            postgres    false    218            �           2606    16527 $   feeding_records feeding_records_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.feeding_records
    ADD CONSTRAINT feeding_records_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.feeding_records DROP CONSTRAINT feeding_records_pkey;
       public            postgres    false    226            �           2606    16520 &   habitat_comments habitat_comments_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.habitat_comments
    ADD CONSTRAINT habitat_comments_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.habitat_comments DROP CONSTRAINT habitat_comments_pkey;
       public            postgres    false    224            �           2606    16540    reviews reviews_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    228            y           2606    16422    services services_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.services DROP CONSTRAINT services_pkey;
       public            postgres    false    216            }           2606    16464    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220                       2606    16466    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    220            �           2606    16511    vet_reports vet_reports_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.vet_reports
    ADD CONSTRAINT vet_reports_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.vet_reports DROP CONSTRAINT vet_reports_pkey;
       public            postgres    false    222               k  x���;n$1Dc���Q�����X�j�	4��x.��:جۀ�쑬b	�������q�Ϗ���&Xc�դW�����X{g��PWi��2���h�뤅}A�Yk����m�
K�%�3�f��x�P˚f�e^Nu�]ҞM��TYڨ�]��]��Y�A�=t̏^g�9j���l0#j
)V�W^�p����Em�Q�&�9��q��#[�Tڇ��o��_�Q�&q������~�~���c����5�&1&/��Z�Ifu�hD4ڭZ|�'�"9�hz�.�Bڒū5ι�e4�%r�)d(b�,z����N'�"�V���k��S�i�D;Ɂ|��z(_��1�.gR��&3i���z�J���g�      "   6   x�3�LO)�����FF&���F��fVF�V�i�VY��Fz\1z\\\ .�             x�3��H�H\1z\\\ 6��      $      x������ � �         �   x�e�;r!��Z:�^��x�%%Y<<*|��}��Na';�P}�#D����ߋ5���7��\��(�C���J��y��ޘ7�IK"�,Evj�����I&(O!ڀF+��:��<��$��	�z�+92��<.�5낞�1�d�st�e����rbY�F�f��m���>��?4&��xeX��V���G�3�v��)�b�`���U��H���\ �b�IC+��%����_B�f}K�e�R����h�         �  x�]�ɒ�J�5>G��A�5�  (3ƍ���*c2O��Muu���8'��F*0�;@�!?����P��
��J"JL���y1�cf�i����nQmQ���)c03��Y� l��X�C����C&�Qvny�x��?��~���T���M:���br��W@��,�������J�]@fc�ʪCo��4�K1
�tT��z{�m��Q<����$�)�ؽ9z�lg.�[ T\0WC�fF4��<=��𞗀k����]�K������]��݆ؿMf5��ݩգD��%�2���z��ϳ�����[wX��w��}3�o�ZI�@6=��s?3�3E�cP�"H�Ɍįq-n��<p�eJ���3���]QE]U�F\[�>g�m�㤅Yyi��}nG�@�f,՜SЌz�d�Y:V�Y���s�t�SVS|(׼�0�mT�יSC��H6���>�\n�a"�@b:�n� ��3I"�Q^%�&:���)1q����������a�y.�t��ʤ::}�M�˘�_�q�Y��Ky���W��&��J'���-�^�ؖ+�{�gs:�F�|�4�E��V��r�e�|J�),�ؔF�G��!�W�`c�����h� MV��`��/���j�ڥ�M�����6���,3u������ �d5�x*xN��T�<��~�{���A�}F���X��d��ݗ)�h,Y{00y��Ӌ��	8��q�+I �?V2���K>ƃ��Q���l}fy��s<�����p��b�e��|��+�x�O�P�a/V��J��a6P
IsY�$���+
^�s�.G��L��{Mؕ4X��3މ❝w�1h58�8�?;��[��߆����.`O������i���z����9Î��3p�c���Y��CU�pI�c�F��P(_�'��'xE� ��*k�tϥT���V��?�9�
�V��R6�^�����0HA��/������x�@A8�]�����8�$N�?�>���l���N         $   x�3�,I-.�4202�5��54�,�*,����� d��     